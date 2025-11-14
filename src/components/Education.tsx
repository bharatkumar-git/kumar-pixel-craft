import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Calendar, ExternalLink } from "lucide-react";

const educationData = [
  {
    institution: "NxtWave — CCBP",
    program: "Career Building Program",
    description: "Full Stack Development (MERN Stack)",
    link: "https://www.linkedin.com/in/bharatkumart",
    year: "2024 - 2025",
  },
  {
    institution: "Parul University",
    program: "B Tech",
    description: "Electronics and Communication",
    year: "2020-20224",
  },
];

export const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="education" className="section-padding bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className="flex-1 glass-card rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {edu.institution}
                      </h3>
                      <p className="text-primary font-semibold mb-2">
                        {edu.program}
                      </p>
                      <p className="text-muted-foreground mb-3">
                        {edu.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {edu.year}
                      </div>
                    </div>
                  </div>
                  {edu.link && (
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                    >
                      View Profile <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block flex-shrink-0 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
