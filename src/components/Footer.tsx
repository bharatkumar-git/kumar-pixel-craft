import { motion } from "framer-motion";
import { Github, Linkedin, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border/50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <p className="text-muted-foreground flex items-center gap-2 justify-center md:justify-start">
              © 2025 Bharat Kumar Tirumani • Built with{" "}
              <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />{" "}
              using modern web technologies
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-6"
          >
            <a
              href="https://github.com/bharatkumar-git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/bharatkumart"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
