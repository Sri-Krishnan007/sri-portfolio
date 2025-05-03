import { motion } from "framer-motion";

const certificates = [
  {
    title: "Data Analytics with Python",
    issuer: "NPTEL - IIT Roorkee",
    link: "https://drive.google.com/file/d/1lm4uq0lYV_o7EBgWFTDJlxRQUi8U4Vrm/view",
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    link: "https://drive.google.com/file/d/1IeNScGMv69wAI7OuOy-1zK4wOigtB9ui/view",
  },
  {
    title: "Digital Marketing",
    issuer: "MyCaptain",
    link: "https://drive.google.com/drive/folders/1WEz15jvdLg386zLw3BbPsCCPGr09plTI?usp=sharing",
  },
];

function Certificates() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-8 transition-colors duration-300">
      
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-blue-600 dark:text-blue-400">Certifications</span>
      </motion.h1>

      {/* Certificates Grid */}
      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto w-full"
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
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition rounded-xl p-6 text-center space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{cert.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">({cert.issuer})</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline font-medium"
              aria-label={`View certificate: ${cert.title}`}
            >
              View Certificate →
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Certificates;
