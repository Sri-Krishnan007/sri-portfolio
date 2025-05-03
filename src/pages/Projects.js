import { motion } from "framer-motion";

const projectData = [
  {
    title: "VisionStay",
    description: `Full-stack Face Recognition–Based Attendance and Behavior Analysis System. Built with Python (Flask), Go (MongoDB), and YOLO. Achieved 50%+ improvement in student security tracking.`,
    link: "https://github.com/Sri-Krishnan007/VisionStay",
  },
  {
    title: "Marunthagam",
    description: `Medical Chatbot using ML, NLP, Flask, and MongoDB. Reduced prescription errors by 20%, enabling smarter decision-making in healthcare via personalized AI-driven symptom analysis.`,
    link: "https://github.com/Sri-Krishnan007/Marunthagam/tree/master",
  },
  {
    title: "HR WorkForce Analysis",
    description: `Data-driven analysis of employee attrition and demographics using Power BI. Interactive dashboards led to a 15% improvement in HR retention strategies and business decision-making.`,
    link: "https://github.com/Sri-Krishnan007/HR-WorkForce-Analysis-BI",
  },
];

function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-8 transition-colors duration-300">
      
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-blue-600 dark:text-blue-400">Projects</span>
      </motion.h1>

      {/* Project Grid */}
      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition rounded-2xl p-6 flex flex-col justify-between"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 text-base mb-6">{project.description}</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              aria-label={`View ${project.title} on GitHub`}
            >
              View on GitHub →
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
