import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Lightbulb, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    label: "Experience",
    value: "1+ years",
  },
  {
    icon: Code2,
    label: "Projects",
    value: "6+",
  },
  {
    icon: Lightbulb,
    label: "Always Learning",
    value: "New tech",
  },
];

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
            I'm a highly enthusiastic web developer focused on the MERN stack
            (React, Node, Express, MongoDB) and backend technologies like Python
            and SQL. I enjoy building clean, maintainable, and scalable
            applications while continuously learning and growing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
              className="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
