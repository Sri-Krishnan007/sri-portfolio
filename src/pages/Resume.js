import { motion } from "framer-motion";

function Resume() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-8 transition-colors duration-300">
      
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-blue-600 dark:text-blue-400">Resume</span>
      </motion.h1>

      {/* Resume Viewer */}
      <motion.div
        className="w-full max-w-4xl rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md mb-8 bg-white dark:bg-gray-800"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <iframe
          src="https://drive.google.com/file/d/1c6P57a_4lZVLvT8y0IECPexEhx51Hvz0/preview"
          width="100%"
          height="800px"
          allow="autoplay"
          title="Sri Krishnan Resume"
          className="border-0"
        ></iframe>
      </motion.div>

      {/* Download Button */}
      <motion.a
        href="https://drive.google.com/uc?export=download&id=1c6P57a_4lZVLvT8y0IECPexEhx51Hvz0"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Sri Krishnan's Resume"
        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition text-lg font-semibold shadow-md"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        Download Resume
      </motion.a>
    </div>
  );
}

export default Resume;
