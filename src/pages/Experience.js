import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-8 transition-colors duration-300">
      
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience & <span className="text-blue-600 dark:text-blue-400">Achievements</span>
      </motion.h1>

      <div className="max-w-5xl w-full space-y-20">

        {/* Section: Professional Experience */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.h2
            className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Professional Experience
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Item */}
            {[{
              role: "Data Science Intern",
              org: "Prodigy InfoTech",
              date: "Jan 2024 – Feb 2024",
              desc: "1-month internship focusing on real-world Data Science tasks and model deployment.",
              link: "https://drive.google.com/drive/folders/1kWShp4Fn39z_9b_5WFxVjV5zbccKLaBU",
            }, {
              role: "IoT & ML Promotion Intern",
              org: "Bolt IoT",
              date: "Jul 2023 – Sep 2023",
              desc: "Worked on promoting IoT and ML applications with hands-on exposure to hardware integration.",
              link: "https://drive.google.com/file/d/1GEANIuCj316BEt-uC5HuCCpcAzVuXtNi/view?usp=drive_link",
            }].map((exp, i) => (
              <motion.div
                key={i}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition rounded-2xl p-6 space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-100">{exp.role}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.org} | {exp.date}</p>
                <p className="text-base text-gray-600 dark:text-gray-300">{exp.desc}</p>
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  View Certificate →
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section: Hackathons & Competitions */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.h2
            className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hackathons & Competitions
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Melinia Hackathon - Meant For Men",
                desc: "Built a digital space to combat loneliness through AI-driven engagement using HTML, CSS, JS, MongoDB, Git & Render.",
                badge: "Hackathon Runner",
              },
              {
                title: "Smart India Hackathon - FitWell Project",
                desc: "Proposed a personalized gym app using sensors and NLP models to encourage fitness habits through smart tracking.",
                badge: "Internal College Runner",
              },
              {
                title: "Computing Research Day'24 - Poster Presentation",
                desc: "Designed a research poster showcasing the 'Marunthagam' medical chatbot project for academic exhibition and innovation day.",
                badge: "Poster Presentation Runner",
                full: true,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition rounded-2xl p-6 space-y-4 ${item.full ? "md:col-span-2" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-100">{item.title}</h3>
                <p className="text-base text-gray-600 dark:text-gray-300">{item.desc}</p>
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm mt-4">
                  {item.badge}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}

export default Experience;
