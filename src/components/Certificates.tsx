import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import certificateImage from "@/assets/irc-certificate.jpg";

export const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certificates" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Certificates
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ y: -8 }}
            className="glass-card rounded-2xl p-6 max-w-4xl w-full hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
          >
            <img
              src={certificateImage}
              alt="CCBP 4.0 Industry-Ready Certificate - Full Stack Development with MERN Specialization"
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-6 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                Full Stack Development with MERN Specialization
              </h3>
              <p className="text-muted-foreground">
                CCBP 4.0 Industry-Ready Certificate
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
