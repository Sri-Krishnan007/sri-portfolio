function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center">
        My <span className="text-blue-600">Projects</span>
      </h1>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">

        {/* VisionStay */}
        <div className="bg-white border border-gray-200 hover:shadow-lg transition rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">VisionStay</h2>
            <p className="text-gray-600 text-base mb-6">
              Full-stack Face Recognition–Based Attendance and Behavior Analysis System. 
              Built with Python (Flask), Go (MongoDB), and YOLO. Achieved 50%+ improvement in student security tracking.
            </p>
          </div>
          <a 
            href="https://github.com/Sri-Krishnan007/VisionStay" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            View on GitHub →
          </a>
        </div>

        {/* Marunthagam */}
        <div className="bg-white border border-gray-200 hover:shadow-lg transition rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Marunthagam</h2>
            <p className="text-gray-600 text-base mb-6">
              Medical Chatbot using ML, NLP, Flask, and MongoDB. Reduced prescription errors by 20%, enabling smarter decision-making in healthcare via personalized AI-driven symptom analysis.
            </p>
          </div>
          <a 
            href="https://github.com/Sri-Krishnan007/Marunthagam/tree/master" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            View on GitHub →
          </a>
        </div>

        {/* HR WorkForce Analysis */}
        <div className="bg-white border border-gray-200 hover:shadow-lg transition rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">HR WorkForce Analysis</h2>
            <p className="text-gray-600 text-base mb-6">
              Data-driven analysis of employee attrition and demographics using Power BI. 
              Interactive dashboards led to a 15% improvement in HR retention strategies and business decision-making.
            </p>
          </div>
          <a 
            href="https://github.com/Sri-Krishnan007/HR-WorkForce-Analysis-BI" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            View on GitHub →
          </a>
        </div>

      </div>

    </div>
  );
}

export default Projects;
