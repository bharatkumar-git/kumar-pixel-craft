import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="gradient-text">Bharat Kumar Tirumani</span>
            <br />
            <span className="text-foreground/90 text-3xl md:text-5xl">MERN + Python Developer</span>
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I design and build scalable web applications. Enthusiastic problem
          solver — always learning.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105"
            onClick={() => scrollToSection("projects")}
          >
            See Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl transition-all hover:scale-105"
            asChild
          >
            <a
              href="https://github.com/bharatkumar-git"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View GitHub
            </a>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
