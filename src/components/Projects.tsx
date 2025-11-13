import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "TaskFlow",
    description:
      "A Kanban-style task manager built with React, Node.js, and MongoDB for seamless project management.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/bharatkumar-git/taskflow",
    role: "Full Stack Developer",
    duration: "3 months",
  },
  {
    name: "E-Commerce Platform",
    description:
      "Modern e-commerce solution with payment integration, user authentication, and real-time inventory management.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/bharatkumar-git",
    role: "Lead Developer",
    duration: "4 months",
  },
  {
    name: "Weather Dashboard",
    description:
      "Real-time weather application with interactive maps and detailed forecasts using external APIs.",
    tech: ["React", "JavaScript", "CSS", "API Integration"],
    github: "https://github.com/bharatkumar-git",
    role: "Frontend Developer",
    duration: "1 month",
  },
  {
    name: "Blog CMS",
    description:
      "Content management system with rich text editor, media management, and user role permissions.",
    tech: ["React", "Node.js", "Express", "SQL"],
    github: "https://github.com/bharatkumar-git",
    role: "Full Stack Developer",
    duration: "2 months",
  },
  {
    name: "Chat Application",
    description:
      "Real-time messaging app with WebSocket support, group chats, and file sharing capabilities.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/bharatkumar-git",
    role: "Full Stack Developer",
    duration: "2 months",
  },
  {
    name: "Portfolio Generator",
    description:
      "SaaS platform for creating professional portfolios with customizable themes and templates.",
    tech: ["React", "Python", "SQL", "CSS"],
    github: "https://github.com/bharatkumar-git",
    role: "Lead Developer",
    duration: "3 months",
  },
];

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="section-padding bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-2xl p-6 flex flex-col h-full hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {project.name}
              </h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project info */}
              <div className="text-sm text-muted-foreground mb-4">
                <div className="flex justify-between">
                  <span className="font-medium">{project.role}</span>
                  <span>{project.duration}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
