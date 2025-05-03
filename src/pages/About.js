import { motion } from "framer-motion";

function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-8 transition-colors duration-300">
      
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About <span className="text-blue-600 dark:text-blue-400">Me</span>
      </motion.h1>

      {/* About Content */}
      <motion.div
        className="max-w-4xl text-center space-y-8 text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <p>
          I'm <span className="font-semibold text-gray-800 dark:text-gray-100">Sri Krishnan</span>, an aspiring <span className="font-semibold text-gray-800 dark:text-gray-100">Data Analyst</span> 
          based in <span className="text-blue-600 dark:text-blue-400 font-semibold">Chennai, India</span>. I specialize in <span className="font-semibold text-gray-800 dark:text-gray-100">Data Visualization</span>, 
          <span className="font-semibold text-gray-800 dark:text-gray-100"> Predictive Modeling</span>, and <span className="font-semibold text-gray-800 dark:text-gray-100">Statistical Analysis</span> — 
          transforming raw numbers into real impact.
        </p>

        <p>
          Armed with <span className="font-semibold">Python (Pandas, NumPy, Scikit-learn)</span>, <span className="font-semibold">SQL</span>, 
          and <span className="font-semibold">Power BI</span>, I’ve built intelligent systems in 
          <span className="text-blue-600 dark:text-blue-400 font-semibold"> HR analytics</span>, 
          <span className="text-blue-600 dark:text-blue-400 font-semibold"> healthcare AI</span>, and 
          <span className="text-blue-600 dark:text-blue-400 font-semibold"> security tech</span> — always aiming for clarity and precision.
        </p>

        <p className="italic text-gray-600 dark:text-gray-400">
          “Data isn’t just about insight — it’s about making better decisions, faster. That’s the mission.”
        </p>

        <p>
          Outside the analytics world, I enjoy <span className="font-semibold">cricket 🏏</span>, 
          <span className="font-semibold"> strategy games 🎯</span>, and anything that tests decision-making under pressure.
        </p>
      </motion.div>

    </div>
  );
}

export default About;
