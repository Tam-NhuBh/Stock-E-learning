export const chatbotApi = async (userMessage: string) => {
  const API_URL = "https://api.openai.com/v1/chat/completions";

  try {
      const requestOptions = {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer YOUR_OPENAI_API_KEY` // Replace with your OpenAI API key
          },
          body: JSON.stringify({
              model: "gpt-3.5-turbo",
              messages: [{ role: "user", content: userMessage }],
          })
      };

      const response = await fetch(API_URL, requestOptions);
      const data = await response.json();
      const botResponse = data.choices[0].message.content.trim();

      return botResponse;
  } catch (error) {
      console.error("Error fetching response from OpenAI:", error);
      return "Oops! Something went wrong. Please try again.";
  }
};