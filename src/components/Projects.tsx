import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Daily Mood Tracker",
    description:
      "A react app which tracks moods (happy, sad, neutral etc.) with a note for the day and reports of the month",
    tech: ["React", "Node.js", "Express", "SQL"],
    github: "https://github.com/bharatkumar-git/react-mini-ccbp",
  },
  {
    name: "NxtWatch",
    description:
      "Video Sharing Platform (Youtube Clone)",
    tech: ["React", "JavaScript", "CSS", "API Integration"],
    github: "https://github.com/bharatkumar-git/nxtwatch-app-ccbp",
  },
  {
    name: "RestoCafe",
    description:
      "A restaurant app to show available food items and place an order",
    tech: ["React", "JavaScript", "CSS", "API Integration"],
    github: "https://github.com/bharatkumar-git/resto-cafe-ccbp",
  },
  {
    name: "Twitter Clone (backend)",
    description:
      "Backend logic for twitter like app with user authentication and authorization",
    tech: ["Node.js", "Express", "SQL"],
    github: "https://github.com/bharatkumar-git/twitter-node-ccbp",
  },
  {
    name: "Todo App",
    description:
      "Backend logic for todo app for simple queries",
    tech: ["Node.js", "Express", "SQL"],
    github: "https://github.com/bharatkumar-git/todo-node-ccbp",
  },
  {
    name: "NxtTrendz",
    description:
      "e-commerce web app (Flipcart clone)",
    tech: ["React", "JavaScript", "CSS", "API Integration"],
    github: "https://github.com/bharatkumar-git/nxt-trendz-ccbp",
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

              {/* Project info 
              <div className="text-sm text-muted-foreground mb-4">
                <div className="flex justify-between">
                  <span className="font-medium">{project.role}</span>
                  <span>{project.duration}</span>
                </div>
              </div>*/}

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
