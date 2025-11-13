import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "HTML", "CSS", "JavaScript"],
    color: "from-primary to-cyan-400",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python"],
    color: "from-secondary to-yellow-400",
  },
  {
    title: "Database",
    skills: ["MongoDB", "SQL"],
    color: "from-purple-500 to-pink-500",
  },
];

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="skills" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Stacks
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + categoryIndex * 0.15 }}
              className="glass-card rounded-2xl p-8"
            >
              <h3
                className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + categoryIndex * 0.15 + skillIndex * 0.1,
                    }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="bg-muted/50 rounded-lg px-4 py-3 text-foreground font-medium hover:bg-primary/10 transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/30"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
