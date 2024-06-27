const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
let userMessage = null; // Variable to store user's message
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
  // Create a chat <li> element with passed message and className
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", `${className}`);
  let chatContent =
    className === "outgoing"
      ? `<p></p>`
      : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
  chatLi.innerHTML = chatContent;
  chatLi.querySelector("p").textContent = message;
  return chatLi;
};

const generateResponse = (chatElement) => {
  const messageElement = chatElement.querySelector("p");
  console.log(userMessage);
  setTimeout(() => {
    message.forEach((elem) => {
      if (elem.user.toLowerCase() === userMessage.toLowerCase()) {
        messageElement.textContent = elem.bot;
      }
    });
  }, 2000);
};

const handleChat = () => {
  userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
  if (!userMessage) return;

  // Clear the input textarea and set its height to default
  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight}px`;

  // Append the user's message to the chatbox
  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    // Display "Thinking..." message while waiting for the response
    const incomingChatLi = createChatLi("Thinking...", "incoming");
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    generateResponse(incomingChatLi);
  }, 600);
};

chatInput.addEventListener("input", () => {
  // Adjust the height of the input textarea based on its content
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
  // If Enter key is pressed without Shift key and the window
  // width is greater than 800px, handle the chat
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault();
    handleChat();
  }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () =>
  document.body.classList.remove("show-chatbot")
);
chatbotToggler.addEventListener("click", () =>
  document.body.classList.toggle("show-chatbot")
);
const message = [
  {
    user: "hii",
    bot: "Hii How can I help you ?",
  },
  {
    user: "How are you",
    bot: "I am good Thank you! What about you ?",
  },
  {
    user: "I am also good",
    bot: "Okay How Can I help you? ",
  },
  {
    user: "Tell me a joke",
    bot: "Soory No joke for you ",
  },
  {
    user: "Hello",
    bot: "Hello! How can I assist you today?"
  },
  {
    user: "I need to book an appointment",
    bot: "Sure, I can help with that. What date and time works best for you?"
  },
  {
    user: "I'm feeling unwell",
    bot: "I'm sorry to hear that. Can you describe your symptoms in more detail?"
  },
  {
    user: "Do you accept insurance?",
    bot: "We accept a variety of insurance plans. Can you provide the name of your insurance provider?"
  },
  {
    user: "What is your contact number?",
    bot: "You can reach us at 000000. How else can I assist you?"
  },
  {
    user: "What are your working hours?",
    bot: "Our clinic hours are Monday to Friday, 9 AM to 5 PM. How can I help you further?"
  },
  {
    user: "Hello",
    bot: "Hello! How can I assist you today?"
  },
  {
    user: "How are you?",
    bot: "I'm just a bot, but I'm here to help you! How can I assist you today?"
  },
  {
    user: "Tell me a joke",
    bot: "Why don't scientists trust atoms? Because they make up everything!"
  },
  {
    user: "What's your name?",
    bot: "I'm HealthBot, your friendly assistant. How can I help you today?"
  },
  {
    user: "Thank you",
    bot: "You're welcome! Is there anything else I can assist you with?"
  },
  {
    user: "Goodbye",
    bot: "Goodbye! Have a great day!"
  },
  {
    user: "Can you recommend a good doctor?",
    bot: "Sure! Dr. Smith is highly recommended for general check-ups. Would you like to book an appointment with Dr. Smith?"
  },
  {
    user: "I'm feeling a bit anxious",
    bot: "I'm sorry to hear that. Taking deep breaths and staying hydrated can help. Would you like to speak to someone about it?"
  },
  {
    user: "Do you have any health tips?",
    bot: "Absolutely! Remember to stay hydrated, get regular exercise, and eat a balanced diet. Anything specific you'd like tips on?"
  },
  {
    user: "What's the weather like today?",
    bot: "I'm not equipped to provide weather updates, but you can check your local weather app for the latest information."
  },
  {
    user: "How can I improve my sleep?",
    bot: "Establishing a regular sleep schedule, avoiding screens before bedtime, and creating a relaxing bedtime routine can help. Need more tips?"
  },
  {
    user: "Can you tell me a fun fact?",
    bot: "Did you know that your heart beats about 100,000 times a day? How cool is that!"
  },
  {
    user: "What's your favorite part of the job?",
    bot: "I love helping people find the health information they need. How can I assist you today?"
  },
  {
    user: "I need motivation to exercise",
    bot: "Think of how great you'll feel after a workout! Even a short walk can boost your mood and energy levels. Ready to get moving?"
  },
  {
    user: "Any tips for a healthy diet?",
    bot: "Sure! Focus on eating a variety of fruits and vegetables, whole grains, lean proteins, and healthy fats. Balance is key!"
  },
  {
    user: "What's your favorite healthy snack?",
    bot: "As a bot, I don't eat, but I hear that apple slices with almond butter are a delicious and healthy snack!"
  },
  {
    user: "I need help staying hydrated",
    bot: "Try carrying a reusable water bottle with you and set reminders to drink water regularly. Your body will thank you!"
  },
  {
    user: "How do I manage stress?",
    bot: "Regular exercise, deep breathing exercises, and taking time for hobbies can help manage stress. Need more suggestions?"
  },
  {
    user: "Can you tell me something interesting?",
    bot: "Sure! Did you know that laughter can boost your immune system? Keep smiling!"
  },
  {
    user: "I'm bored",
    bot: "How about trying a new hobby or reading a book? Keeping your mind engaged can help beat boredom. Need more ideas?"
  }
];
