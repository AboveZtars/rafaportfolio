import React from "react";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState("home");

  // Update active section based on scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id') || "";
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };
  
  // Add this function for mobile navigation
  const handleMobileNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    document.getElementById('mobile-menu')?.classList.add('hidden');
  };
  
  return (
    <motion.header 
      className="py-6 px-4 md:px-8 lg:px-16 bg-background z-10 sticky top-0 backdrop-blur-md bg-opacity-80"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a 
          href="#home" 
          className="text-foreground text-xl font-semibold"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          Rafael Molina
        </a>
        
        <nav className="hidden md:flex space-x-8">
          <a 
            href="#home"
            className={`nav-link text-foreground-600 hover:text-foreground ${activeSection === 'home' ? 'active text-primary' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={`nav-link text-foreground-600 hover:text-foreground ${activeSection === 'about' ? 'active text-primary' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            About
          </a>
          <a 
            href="#projects" 
            className={`nav-link text-foreground-600 hover:text-foreground ${activeSection === 'projects' ? 'active text-primary' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
          >
            Projects
          </a>
          <a 
            href="#chatbot" 
            className={`nav-link text-foreground-600 hover:text-foreground ${activeSection === 'chatbot' ? 'active text-primary' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('chatbot');
            }}
          >
            Chat
          </a>
        </nav>
        
        <div className="md:hidden">
          <Button
            isIconOnly
            variant="light"
            aria-label="Menu"
            onPress={() => {
              const mobileMenu = document.getElementById('mobile-menu');
              if (mobileMenu) {
                mobileMenu.classList.toggle('hidden');
              }
            }}
          >
            <Icon icon="lucide:menu" />
          </Button>
          
          <div id="mobile-menu" className="hidden fixed top-[4.5rem] right-0 left-0 bg-content1 p-4 shadow-lg z-50">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home"
                className="px-4 py-2 rounded hover:bg-content2"
                onClick={(e) => {
                  e.preventDefault();
                  handleMobileNavClick('home');
                }}
              >
                Home
              </a>
              <a 
                href="#about"
                className="px-4 py-2 rounded hover:bg-content2"
                onClick={(e) => {
                  e.preventDefault();
                  handleMobileNavClick('about');
                }}
              >
                About
              </a>
              <a 
                href="#projects"
                className="px-4 py-2 rounded hover:bg-content2"
                onClick={(e) => {
                  e.preventDefault();
                  handleMobileNavClick('projects');
                }}
              >
                Projects
              </a>
              <a 
                href="#chatbot"
                className="px-4 py-2 rounded hover:bg-content2"
                onClick={(e) => {
                  e.preventDefault();
                  handleMobileNavClick('chatbot');
                }}
              >
                Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;