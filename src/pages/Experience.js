function Experience() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center">
        Experience & <span className="text-blue-600">Achievements</span>
      </h1>

      {/* Main Content */}
      <div className="max-w-5xl w-full space-y-16">

        {/* Professional Experience Section */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Professional Experience
          </h2>

          <div className="grid gap-8 md:grid-cols-2">

            {/* Prodigy InfoTech */}
            <div className="bg-white border border-gray-200 hover:shadow-lg transition rounded-2xl p-6 space-y-4">
              <h3 className="text-2xl font-bold text-gray-700">Data Science Intern</h3>
              <p className="text-sm text-gray-500">Prodigy InfoTech | Jan 2024 – Feb 2024</p>
              <p className="text-gray-600 text-base">
                1-month internship focusing on real-world Data Science tasks and model deployment.
              </p>
              <a 
                href="https://drive.google.com/drive/folders/1kWShp4Fn39z_9b_5WFxVjV5zbccKLaBU" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-600 hover:underline font-medium"
              >
                View Certificate →
              </a>
            </div>

            {/* Bolt IoT */}
            <div className="bg-white border border-gray-200 hover:shadow-lg transition rounded-2xl p-6 space-y-4">
              <h3 className="text-2xl font-bold text-gray-700">IoT & ML Promotion Intern</h3>
              <p className="text-sm text-gray-500">Bolt IoT | Jul 2023 – Sep 2023</p>
              <p className="text-gray-600 text-base">
                Worked on promoting IoT and Machine Learning applications with hands-on exposure to hardware integration.
              </p>
              <a 
                href="https://drive.google.com/file/d/1GEANIuCj316BEt-uC5HuCCpcAzVuXtNi/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-600 hover:underline font-medium"
              >
                View Certificate →
              </a>
            </div>

          </div>
        </section>

        {/* Hackathons & Competitions Section */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Hackathons & Competitions
          </h2>

          <div className="grid gap-8 md:grid-cols-2">

            {/* Melinia Hackathon */}
            <div className="bg-white border border-gray-200 hover:shadow-lg transition rounded-2xl p-6 space-y-4">
              <h3 className="text-2xl font-bold text-gray-700">Melinia Hackathon - Meant For Men</h3>
              <p className="text-gray-600 text-base">
                Built a digital space to combat loneliness through AI-driven engagement using HTML, CSS, JavaScript, MongoDB, Git & Render.
              </p>
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm mt-4">
                Hackathon Runner
              </span>
            </div>

            {/* Smart India Hackathon */}
            <div className="bg-white border border-gray-200 hover:shadow-lg transition rounded-2xl p-6 space-y-4">
              <h3 className="text-2xl font-bold text-gray-700">Smart India Hackathon - FitWell Project</h3>
              <p className="text-gray-600 text-base">
                Proposed a personalized gym app using sensors and NLP models to encourage fitness habits through smart tracking.
              </p>
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm mt-4">
                Internal College Runner
              </span>
            </div>

            {/* Computing Research Day */}
            <div className="bg-white border border-gray-200 hover:shadow-lg transition rounded-2xl p-6 space-y-4 md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-700">Computing Research Day'24 - Poster Presentation</h3>
              <p className="text-gray-600 text-base">
                Designed a research poster showcasing the "Marunthagam" medical chatbot project for academic exhibition and innovation day.
              </p>
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm mt-4">
                Poster Presentation Runner
              </span>
            </div>

          </div>
        </section>

      </div>

    </div>
  );
}

export default Experience;
