import { motion } from "framer-motion";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8 transition-colors duration-300">

<motion.img
  src="/profile.jpg"
  alt="Sri Krishnan"
  className="w-48 h-48 rounded-full mb-6 shadow-lg object-cover"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
/>

      

      {/* Main Title */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-6 text-center leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi, I'm <span className="text-blue-600 dark:text-blue-400">Sri Krishnan</span> 👋
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center max-w-2xl leading-relaxed mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Data Analyst in the making — decoding patterns, predicting outcomes, and powering decisions with data.
        Skilled in <span className="font-semibold text-gray-800 dark:text-gray-200">Python</span>, 
        <span className="font-semibold text-gray-800 dark:text-gray-200"> SQL</span>, 
        <span className="font-semibold text-gray-800 dark:text-gray-200"> Power BI</span>, and 
        <span className="font-semibold text-gray-800 dark:text-gray-200"> Machine Learning</span>. 
        I build intelligent systems that solve real-world problems — 
        <span className="text-blue-600 dark:text-blue-400 font-semibold"> faster, smarter, better</span>.
        
      </motion.p>

      {/* Call to Action Buttons */}
      <motion.div
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <a
          href="/projects"
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="View Projects"
        >
          View Projects
        </a>
        <a
          href="/contact"
          className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full hover:bg-blue-100 dark:hover:bg-gray-800 transition text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Contact Me"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Optional Tagline */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
        Building smarter decisions, one dataset at a time.
      </p>
    </div>
  );
}

export default Home;
