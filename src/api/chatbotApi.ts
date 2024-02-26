const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "YOUR_API_KEY";

interface ChatMessage {
  role: string;
  content: string;
}

interface APIResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

const generateResponse = async (userMessage: string): Promise<string> => {
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userMessage }],
      })
    };

    const response = await fetch(API_URL, requestOptions);
    const data: APIResponse = await response.json();
    const botResponse = data.choices[0].message.content.trim();
    return botResponse;
  } catch (error) {
    console.error("Error fetching bot response:", error);
    return "Oops! Something went wrong. Please try again.";
  }
};

export default generateResponse;
