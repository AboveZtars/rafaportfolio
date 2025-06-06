import React from "react";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProjectsPage from "./pages/projects";
import ChatbotPage from "./pages/chatbot";

function App() {
  // Add useEffect to scroll to top on initial load
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dark">
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-grow">
          <section id="home" className="section">
            <HomePage />
          </section>
          <section id="about" className="section">
            <AboutPage />
          </section>
          <section id="projects" className="section">
            <ProjectsPage />
          </section>
          <section id="chatbot" className="section">
            <ChatbotPage />
          </section>
        </main>
        <div className="flex justify-center relative z-20">
          <img
            src="/images/cat.gif"
            alt="Cat"
            className="h-32 w-auto -mb-12 z-20"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
