import React, { useRef, useState } from 'react';
import './style.css';
import { FaComment, FaTimes } from 'react-icons/fa';
import { MdOutlineSmartToy } from "react-icons/md";
const Chatbot: React.FC = () => {
    const [showChatIcon, setShowChatIcon] = useState(true);
    const chatboxRef = useRef<HTMLUListElement>(null);
    const chatInputRef = useRef<HTMLTextAreaElement>(null);
    const [userMessage, setUserMessage] = useState<string | null>(null); // Variable to store user's message
    const inputInitHeight = chatInputRef.current?.scrollHeight || 0;

    const createChatLi = (message: string, className: string) => {
        // Create a chat <li> element with passed message and className
        const chatLi = document.createElement("li");
        chatLi.classList.add("chat", `${className}`);
        let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
        chatLi.innerHTML = chatContent;
        chatLi.querySelector("p")!.textContent = message;
        return chatLi; // return chat <li> element
    }

    const generateResponse = (chatElement: HTMLElement) => {

        const API_URL = "https://api.openai.com/v1/chat/completions";
        const messageElement = chatElement.querySelector("p");

        // Define the properties and message for the API request
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer `
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: userMessage }],
            })
        }

        // Send POST request to API, get response and set the reponse as paragraph text
        fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
            messageElement!.textContent = data.choices[0].message.content.trim();
        }).catch(() => {
            messageElement!.classList.add("error");
            messageElement!.textContent = "Oops! Something went wrong. Please try again.";
        }).finally(() => chatboxRef.current!.scrollTo(0, chatboxRef.current!.scrollHeight));
    }

    const handleChat = () => {
        setUserMessage(chatInputRef.current?.value.trim() || ''); // Get user entered message and remove extra whitespace
        if (!userMessage) return;

        // Clear the input textarea and set its height to default
        if (chatInputRef.current) {
            chatInputRef.current.value = "";
            chatInputRef.current.style.height = `${inputInitHeight}px`;
        }

        // Append the user's message to the chatbox
        if (chatboxRef.current) {
            chatboxRef.current.appendChild(createChatLi(userMessage, "outgoing"));
            chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
        }

        setTimeout(() => {
            // Display "Thinking..." message while waiting for the response
            const incomingChatLi = createChatLi("Thinking...", "incoming");
            if (chatboxRef.current) {
                chatboxRef.current.appendChild(incomingChatLi);
                chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
                generateResponse(incomingChatLi);
            }
        }, 600);
    }

    const handleInputChange = () => {
        // Adjust the height of the input textarea based on its content
        if (chatInputRef.current) {
            chatInputRef.current.style.height = `${inputInitHeight}px`;
            chatInputRef.current.style.height = `${chatInputRef.current.scrollHeight}px`;
        }
    };

    const handleToggleChatbot = () => {
        setShowChatIcon(!showChatIcon);
        document.body.classList.toggle("show-chatbot");
    };

    return (
        <div>
            <button className="chatbot-toggler" onClick={handleToggleChatbot}>
                {showChatIcon ? <FaComment className="material-symbols-rounded" /> : null}
                {!showChatIcon ? <FaTimes className="material-symbols-outlined" /> : null}
            </button>
            <div className="chatbot">
                <header>
                    <h2>Chatbot</h2>
                    <span className="close-btn material-symbols-outlined" onClick={handleToggleChatbot}>close</span>
                </header>
                <ul className="chatbox" ref={chatboxRef}>
                    <li className="chat incoming">
                        <MdOutlineSmartToy
                            className='material-symbols-outlined icon'
                            size={40}
                            style={{ marginRight: '3px', marginTop: 'auto', marginBottom: '10px' }} // Áp dụng style nội tuyến
                        />
                        <p>Hi there 👋<br />How can I help you today?</p> 
                    </li>
                </ul>
                <div className="chat-input">
                    <textarea
                        ref={chatInputRef}
                        placeholder="Enter a message..."
                        spellCheck={false}
                        onChange={handleInputChange}
                        required
                    />
                    <span id="send-btn" className="material-symbols-rounded" onClick={handleChat}>send</span>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
