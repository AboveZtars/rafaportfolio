import React from "react";
import {Card, CardBody, CardFooter, Button, Chip} from "@heroui/react";
import {motion, Reorder} from "framer-motion";
import {Icon} from "@iconify/react";
import ScrambleIn, {
  ScrambleInHandle,
} from "../../components/typography/scramble-in";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  githubLink?: string;
  demoLink?: string;
}

const ProjectsPage: React.FC = () => {
  // Convert static projects to state
  const [projects, setProjects] = React.useState<Project[]>([
    {
      id: 1,
      title: "WinkGPT",
      description:
        "A Chatbot to order any kind of products from any store, made in Whatsapp.",
      image: "/projects/winkgpt2.png",
      technologies: [
        "BunJS",
        "Whatsapp",
        "Postgres",
        "Redis",
        "Langchain",
        "OpenAI",
        "DigitalOcean",
      ],
      link: "https://www.instagram.com/wink.vzla/",
    },
    {
      id: 2,
      title: "Yuri AI",
      description:
        "A simple chatbot to help you request a ride from Yummy Rides in Venezuela and ask questions about yummy rides. Build specifically to be used in Whatsapp.",
      image: "/projects/yummyyuri.png",
      technologies: ["NodeJS", "MomentoCache", "Whatsapp", "StackAi", "OpenAI"],
      link: "https://api.whatsapp.com/send?phone=584241905742",
    },
    {
      id: 3,
      title: "RutasVe",
      description:
        "An App to help you find the best routes to travel in Venezuela using the public transport system.",
      image: "/projects/map.png",
      technologies: ["NodeJS", "React", "TailwindCSS", "NestJS", "Postgres"],
      link: "https://routefinder-venezuela.lovable.app/services",
    },
  ]);

  // Create refs for each project description animation
  const descriptionRefs = React.useRef<(ScrambleInHandle | null)[]>([]);

  // Create ref for the container
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Track which project IDs have already had animations played
  const animatedProjectIds = React.useRef<Set<number>>(new Set());

  // Set up intersection observer to trigger animations when cards come into view
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index") || 0);
            const projectId = Number(
              entry.target.getAttribute("data-project-id") || 0
            );

            // Only animate if this project ID hasn't been animated before
            if (!animatedProjectIds.current.has(projectId)) {
              setTimeout(() => {
                descriptionRefs.current[index]?.start();
                // Mark this project as animated
                animatedProjectIds.current.add(projectId);
              }, 300 + index * 200);
            }
          }
        });
      },
      {threshold: 0.3}
    );

    // Observe all project cards
    document.querySelectorAll(".project-card").forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 md:px-8 lg:px-16 max-w-6xl">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
      >
        My Projects
        <span className="block text-sm font-normal text-foreground-500 mt-2">
          Drag projects to reorder them
        </span>
      </motion.h1>

      <Reorder.Group
        axis="x"
        values={projects}
        onReorder={setProjects}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        ref={containerRef}
        style={{display: "grid"}}
      >
        {projects.map((project, index) => (
          <Reorder.Item
            key={project.id}
            value={project}
            className="project-card cursor-grab active:cursor-grabbing"
            data-index={index}
            data-project-id={project.id} // Add project ID as data attribute
            drag
            dragConstraints={containerRef}
            dragElastic={0.05} // Reduced from 0.1 for faster response
            dragTransition={{
              bounceStiffness: 800, // Increased from 600 for faster settling
              bounceDamping: 35, // Increased from 20 for less bounce
              power: 0.8, // Added power parameter for more responsive movement
            }}
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -30}}
            transition={{
              duration: 0.3, // Reduced from 0.5 for faster animations
              delay: index * 0.05 + 0.1, // Reduced delay for faster initial appearance
              type: "spring", // Using spring for more natural but snappy motion
              stiffness: 300, // Higher stiffness for faster response
              damping: 25, // Balanced damping for minimal oscillation
            }}
            whileDrag={{
              scale: 1.02, // Slightly reduced scale for faster movement
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              zIndex: 50,
              cursor: "grabbing",
            }}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <Card className="bg-content1 h-full">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Icon icon="lucide:move" className="text-white text-2xl" />
                </div>
              </div>
              <CardBody className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <div className="text-foreground-600 mb-4 min-h-[80px]">
                  <ScrambleIn
                    ref={(el) => {
                      if (descriptionRefs.current.length > index) {
                        descriptionRefs.current[index] = el;
                      } else {
                        descriptionRefs.current[index] = el;
                      }
                    }}
                    text={project.description}
                    scrambleSpeed={30}
                    scrambledLetterCount={4}
                    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"
                    className="text-foreground-600"
                    scrambledClassName="text-primary-400"
                    autoStart={false}
                    // Add key to ensure component identity is preserved across reorders
                    key={`scramble-${project.id}`}
                  />
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Chip key={tech} size="sm" variant="flat" color="primary">
                      {tech}
                    </Chip>
                  ))}
                </div>
              </CardBody>

              <CardFooter className="flex justify-between gap-2">
                {project.githubLink && (
                  <Button
                    variant="flat"
                    color="primary"
                    startContent={<Icon icon="lucide:github" />}
                    as="a"
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </Button>
                )}
                {project.link && (
                  <Button
                    variant="flat"
                    color="primary"
                    as="a"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    endContent={<Icon icon="lucide:external-link" />}
                  >
                    More Info
                  </Button>
                )}

                {project.demoLink && (
                  <Button
                    color="primary"
                    endContent={<Icon icon="lucide:external-link" />}
                    as="a"
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Button>
                )}
              </CardFooter>
            </Card>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};

export default ProjectsPage;
