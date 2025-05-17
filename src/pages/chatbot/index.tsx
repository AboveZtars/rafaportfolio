import React from "react";
import {Card, CardBody, Button, Input, Avatar, Spinner} from "@heroui/react";
import {motion, AnimatePresence} from "framer-motion";
import {Icon} from "@iconify/react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatbotPage: React.FC = () => {
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "welcome",
      text: "Hi there! I'm Rafael's AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "Tell me about Rafa experience",
    "What technologies does Rafa work with?",
    "What are the career goals of Rafa?",
    "How can I contact Rafa?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text: string = inputValue) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response after delay
    setTimeout(() => {
      const botResponse = generateResponse(text);
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const generateResponse = (text: string): string => {
    const lowerText = text.toLowerCase();

    if (lowerText.includes("experience") || lowerText.includes("work")) {
      return "Rafael has over 8 years of experience in backend development, specializing in Node.js, Python, and Go. He's currently working as a Senior Software Engineer at Yummy, where he leads the development of scalable chatbots integrated with AI models.";
    } else if (
      lowerText.includes("technologies") ||
      lowerText.includes("tech stack") ||
      lowerText.includes("skills")
    ) {
      return "Rafael is proficient in Node.js, Python, Go, SQL/NoSQL databases, Docker, and cloud platforms like AWS and GCP. He's particularly skilled in designing efficient database schemas and implementing security best practices.";
    } else if (
      lowerText.includes("contact") ||
      lowerText.includes("email") ||
      lowerText.includes("reach")
    ) {
      return "You can contact Rafael through LinkedIn, GitHub, or via email. Just click on the respective icons in the footer section of this website.";
    } else if (
      lowerText.includes("goals") ||
      lowerText.includes("future") ||
      lowerText.includes("career")
    ) {
      return "Rafael aims to continue growing as a backend developer while exploring new technologies. He's particularly interested in AI integration, distributed systems, and contributing to open-source projects.";
    } else if (
      lowerText.includes("hello") ||
      lowerText.includes("hi") ||
      lowerText.includes("hey")
    ) {
      return "Hello! I'm Rafael's virtual assistant. Feel free to ask me anything about his experience, skills, or projects!";
    } else {
      return "That's an interesting question! Rafael would be happy to discuss this further. Feel free to reach out to him directly using the contact information in the footer.";
    }
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"});
  };

  return (
    <div className="container mx-auto px-4 py-12 md:px-8 lg:px-16 max-w-4xl">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
      >
        Want to Know More?
      </motion.h1>

      <motion.div
        className="w-full"
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.2}}
      >
        <Card className="bg-content1 mb-8">
          <CardBody className="p-0">
            {/* Chat header */}
            <div className="p-4 border-b border-divider flex items-center">
              <Avatar
                src="https://img.heroui.chat/image/avatar?w=200&h=200&u=42"
                className="mr-3"
                size="sm"
              />
              <div>
                <p className="font-medium">
                  Rafael's AI Assistant (Showcase purpose only)
                </p>
                <p className="text-xs text-foreground-500">
                  {isTyping ? (
                    <span className="flex items-center">
                      <span>Typing</span>
                      <span className="ml-1 flex space-x-1">
                        <motion.span
                          animate={{opacity: [0, 1, 0]}}
                          transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            times: [0, 0.5, 1],
                          }}
                          className="inline-block w-1 h-1 bg-foreground-500 rounded-full"
                        />
                        <motion.span
                          animate={{opacity: [0, 1, 0]}}
                          transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            delay: 0.2,
                            times: [0, 0.5, 1],
                          }}
                          className="inline-block w-1 h-1 bg-foreground-500 rounded-full"
                        />
                        <motion.span
                          animate={{opacity: [0, 1, 0]}}
                          transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            delay: 0.4,
                            times: [0, 0.5, 1],
                          }}
                          className="inline-block w-1 h-1 bg-foreground-500 rounded-full"
                        />
                      </span>
                    </span>
                  ) : (
                    "Online"
                  )}
                </p>
              </div>
            </div>

            {/* Chat messages */}
            <div className="h-[300px] overflow-y-auto p-4 space-y-4">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{opacity: 0, y: 20, scale: 0.95}}
                    animate={{opacity: 1, y: 0, scale: 1}}
                    exit={{opacity: 0, scale: 0.95}}
                    transition={{type: "spring", damping: 25, stiffness: 300}}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-xl p-3 ${
                        message.sender === "user"
                          ? "bg-primary text-white rounded-tr-none"
                          : "bg-content2 rounded-tl-none"
                      }`}
                    >
                      <p>{message.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === "user"
                            ? "text-white/70"
                            : "text-foreground-500"
                        }`}
                      >
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    key="typing"
                    initial={{opacity: 0, y: 20, scale: 0.95}}
                    animate={{opacity: 1, y: 0, scale: 1}}
                    exit={{opacity: 0, scale: 0.95}}
                    transition={{type: "spring", damping: 25, stiffness: 300}}
                    className="flex justify-start"
                  >
                    <div className="bg-content2 rounded-xl rounded-tl-none p-4 max-w-[80%]">
                      <Spinner size="sm" color="primary" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested questions */}
            <div className="px-4 py-3 border-t border-divider overflow-x-auto">
              <p className="text-sm text-foreground-500 mb-2">
                Suggested questions:
              </p>
              <div className="flex gap-2 pb-1 flex-nowrap">
                {suggestedQuestions.map((question, index) => (
                  <motion.div
                    key={index}
                    whileHover={{scale: 1.03}}
                    whileTap={{scale: 0.97}}
                  >
                    <Button
                      size="sm"
                      variant="flat"
                      color="primary"
                      className="whitespace-nowrap"
                      onPress={() => handleSendMessage(question)}
                    >
                      {question}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Input area */}
            <div className="p-4 border-t border-divider">
              <form
                className="flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
              >
                <Input
                  placeholder="Type your message..."
                  value={inputValue}
                  onValueChange={setInputValue}
                  className="flex-grow"
                  size="sm"
                  autoComplete="off"
                />
                <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                  <Button
                    isIconOnly
                    color="primary"
                    type="submit"
                    isDisabled={!inputValue.trim() || isTyping}
                  >
                    <Icon icon="lucide:send" />
                  </Button>
                </motion.div>
              </form>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
};

export default ChatbotPage;
