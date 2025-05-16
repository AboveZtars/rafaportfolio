import React from "react";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { useMousePositionRef } from "../../hooks/use-mouse-position-ref";
import BreathingText from "../../components/typography/breathing-text";
import ScrambleIn, { ScrambleInHandle } from "../../components/typography/scramble-in";

const HomePage: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const mousePositionRef = useMousePositionRef(containerRef);
  const scrambleRef = React.useRef<ScrambleInHandle>(null);
  
  // Add effect to start scramble animation after a delay
  React.useEffect(() => {
    const timer = setTimeout(() => {
      scrambleRef.current?.start();
    }, 1200); // Start after initial animations
    
    return () => clearTimeout(timer);
  }, []);
  
  React.useEffect(() => {
    const updateFontWeight = () => {
      if (containerRef.current) {
        const { x } = mousePositionRef.current;
        const containerWidth = containerRef.current.clientWidth;
        
        // Calculate weight between 300-900 based on cursor X position
        const weightRange = 600; // 900-300
        const weightMin = 300;
        const newWeight = Math.floor((x / containerWidth) * weightRange) + weightMin;
        
        // Clamp the weight between 300 and 900
        const clampedWeight = Math.max(300, Math.min(900, newWeight));
        // setFontWeight(clampedWeight);
      }
    };
    
    // Update on animation frame for better performance
    const animationFrame = requestAnimationFrame(updateFontWeight);
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePositionRef]);
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div 
      ref={containerRef}
      className="flex flex-col justify-center min-h-[90vh] px-4 md:px-8 lg:px-16"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-primary-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building the backbone <br className="hidden sm:block" />of{" "}
            <BreathingText
              label="innovation"
              className="variable-font"
              staggerDuration={0.1}
              fromFontVariationSettings="'wght' 100, 'slnt' 0"
              toFontVariationSettings="'wght' 800, 'slnt' -10"
            />
          </motion.h1>
          
          <motion.div 
            className="text-lg md:text-xl text-foreground-500 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ScrambleIn
              ref={scrambleRef}
              text="I'm passionate about creating reliable, scalable, and efficient backend solutions that power tomorrow's technologies."
              scrambleSpeed={30}
              scrambledLetterCount={5}
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"
              className="text-foreground-500"
              scrambledClassName="text-primary-400"
              autoStart={false}
              onComplete={() => console.log("Scramble animation complete")}
            />
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              color="primary" 
              size="lg" 
              className="px-8"
              onPress={() => scrollToSection('about')}
            >
              Learn More
            </Button>
            
            <Button 
              variant="bordered" 
              color="primary" 
              size="lg" 
              className="px-8"
              onPress={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;