import React from "react";
import { Card, CardBody, Avatar, Divider, Progress } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import LetterSwapForward from "../../components/typography/letter-swap-forward";

const AboutPage: React.FC = () => {
  const skills = [
    { name: "Node.js", level: 90 },
    { name: "Python", level: 85 },
    { name: "Go", level: 75 },
    { name: "SQL/NoSQL", level: 90 },
    { name: "Docker", level: 80 },
    { name: "AWS/GCP", level: 85 },
  ];

  const experience = [
    {
      position: "Senior Software Engineer",
      company: "Yummy",
      period: "2021 - Present",
      responsibilities: [
        "Leading development of scalable chatbots integrated with AI models and real world applications",
        "Optimizing the performance of the chatbot by implementing caching strategies and optimizing database queries",
        "Developing and maintaining RESTful APIs for seamless integration with external systems",
        "Collaborating with cross-functional teams to define, design, and ship new features",
        "Architecting and implementing highly scalable and fault-tolerant systems"
      ]
    }
  ];

  const education = [
    {
      degree: "Electrical Engineering Studies",
      institution: "University",
      period: "3 Years",
      description: "Focused on core electrical engineering principles, circuit design, and systems analysis."
    }
  ];

  const interests = [
    { name: "Open Source", icon: "lucide:github" },
    { name: "Tech Podcasts", icon: "lucide:headphones" },
    { name: "Hiking", icon: "lucide:mountain" },
    { name: "Reading", icon: "lucide:book-open" },
    { name: "Photography", icon: "lucide:camera" },
    { name: "Chess", icon: "lucide:puzzle" }
  ];

  return (
    <div className="container mx-auto px-4 py-6 md:px-8 lg:px-16 max-w-4xl">
      <motion.h1 
        className="text-3xl md:text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>

      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="bg-content1 mb-8">
          <CardBody className="p-6">
            {/* Profile and Biography in the same row */}
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              {/* Left column: Profile information */}
              <div className="flex flex-col items-center justify-center md:self-center text-center md:w-1/3">
                <Avatar 
                  src="https://img.heroui.chat/image/avatar?w=200&h=200&u=42" 
                  alt="Rafael Molina"
                  className="w-28 h-28 text-large mb-4"
                  isBordered
                  color="primary"
                  size="lg"
                />
                <h2 className="text-2xl font-semibold mt-2">Rafael Molina</h2>
                <p className="text-foreground-500 mb-2">Backend Developer</p>
                
                <div className="flex justify-center gap-2 mt-1">
                  <Icon icon="lucide:map-pin" className="text-primary" />
                  <span className="text-sm text-foreground-500">Venezuela</span>
                </div>
              </div>
              
              {/* Right column: Biography */}
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold mb-4 md:mt-0 mt-6 md:text-left text-center">
                  <LetterSwapForward 
                    label="Biography" 
                    className="inline-flex text-xl font-semibold"
                  />
                </h3>
                
                <p className="text-foreground-600 mb-4">
                  I'm a passionate software engineer based in Venezuela, dedicated to creating innovative solutions 
                  that make a difference. When I'm not coding, you can find me exploring new technologies.
                </p>
                
                <p className="text-foreground-600">
                  My expertise lies in designing efficient database schemas, implementing security
                  best practices, and optimizing application performance. I'm constantly exploring 
                  new technologies and methodologies to stay at the forefront of backend development.
                </p>
              </div>
            </div>
            
            <Divider className="my-6" />
            
            <h3 className="text-xl font-semibold mb-4">
              <LetterSwapForward 
                label="Professional Experience" 
                className="inline-flex text-xl font-semibold"
              />
            </h3>
            
            {experience.map((job, index) => (
              <div key={index} className="mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h4 className="text-lg font-medium text-primary">
                    {job.position} @ {job.company}
                  </h4>
                  <span className="text-sm text-foreground-500">{job.period}</span>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-foreground-600">
                  {job.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            
            <Divider className="my-6" />
            
            <h3 className="text-xl font-semibold mb-4">
              <LetterSwapForward 
                label="Education" 
                className="inline-flex text-xl font-semibold"
              />
            </h3>
            
            {education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                  <h4 className="text-lg font-medium">{edu.degree}</h4>
                  <span className="text-sm text-foreground-500">{edu.period}</span>
                </div>
                <p className="text-foreground-600">{edu.description}</p>
              </div>
            ))}
            
            <Divider className="my-6" />
            
            <h3 className="text-xl font-semibold mb-4">
              <LetterSwapForward 
                label="Skills" 
                className="inline-flex text-xl font-semibold"
              />
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 h-64">
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col h-full">
                  <div className="flex justify-center mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                  
                  <div className="relative flex-grow flex items-end">
                    <div className="absolute bottom-0 w-full bg-content2 h-full rounded-t-md">
                      <motion.div 
                        className="absolute bottom-0 w-full bg-primary rounded-t-md"
                        initial={{ height: 0 }}
                        animate={{ height: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                  
                  <div className="mt-2 text-center">
                    <span className="text-xs text-foreground-500">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
            
            <Divider className="my-6" />
            
            <h3 className="text-xl font-semibold mb-4">
              <LetterSwapForward 
                label="Personal Interests" 
                className="inline-flex text-xl font-semibold"
              />
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {interests.map((interest, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-md bg-content2"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="p-2 rounded-full bg-primary bg-opacity-10">
                    <Icon icon={interest.icon} className="text-primary text-lg" />
                  </div>
                  <span className="text-foreground-700">{interest.name}</span>
                </motion.div>
              ))}
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
};

export default AboutPage;