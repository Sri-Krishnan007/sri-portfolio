import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-8 transition-colors duration-300">
      
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get <span className="text-blue-600 dark:text-blue-400">In Touch</span>
      </motion.h1>

      {/* Contact Info Card */}
      <motion.div
        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md rounded-2xl p-8 max-w-2xl w-full space-y-8 text-gray-700 dark:text-gray-300 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >

        {/* Email */}
        <div>
          <p className="text-xl font-semibold mb-2 flex justify-center items-center gap-2">
            <FaEnvelope /> Email
          </p>
          <a
            href="mailto:srikrish2705guru@gmail.com"
            className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
            aria-label="Send email to Sri Krishnan"
          >
            srikrish2705guru@gmail.com
          </a>
        </div>

        {/* LinkedIn */}
        <div>
          <p className="text-xl font-semibold mb-2 flex justify-center items-center gap-2">
            <FaLinkedin /> LinkedIn
          </p>
          <a
            href="https://www.linkedin.com/in/sri-krishnan-g-a9b1b1273"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
            aria-label="Connect on LinkedIn"
          >
            Connect on LinkedIn →
          </a>
        </div>

        {/* GitHub */}
        <div>
          <p className="text-xl font-semibold mb-2 flex justify-center items-center gap-2">
            <FaGithub /> GitHub
          </p>
          <a
            href="https://github.com/Sri-Krishnan007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
            aria-label="View GitHub Projects"
          >
            View Projects →
          </a>
        </div>

        {/* Phone */}
        <div>
          <p className="text-xl font-semibold mb-2 flex justify-center items-center gap-2">
            <FaPhoneAlt /> Phone
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-200">+91 63825 71863</p>
        </div>

      </motion.div>
    </div>
  );
}

export default Contact;
