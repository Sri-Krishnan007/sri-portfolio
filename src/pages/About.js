function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center">
        About <span className="text-blue-600">Me</span>
      </h1>

      {/* About Content */}
      <div className="max-w-4xl text-center space-y-8 text-gray-700 text-lg leading-relaxed">
        
        <p>
          I'm <span className="font-semibold text-gray-800">Sri Krishnan</span>, an aspiring <span className="font-semibold text-gray-800">Data Analyst</span> 
          based in <span className="text-blue-600 font-semibold">Chennai, India</span>. I specialize in <span className="font-semibold text-gray-800">Data Visualization</span>, 
          <span className="font-semibold text-gray-800"> Predictive Modeling</span>, and <span className="font-semibold text-gray-800">Statistical Analysis</span> — 
          turning complex datasets into actionable strategies.
        </p>

        <p>
          With skills in <span className="font-semibold text-gray-800">Python (Pandas, NumPy, Scikit-learn)</span>, <span className="font-semibold text-gray-800">SQL</span>, 
          and <span className="font-semibold text-gray-800">Power BI</span>, I've built full-stack solutions across 
          <span className="text-blue-600 font-semibold"> HR analytics</span>, <span className="text-blue-600 font-semibold">healthcare AI</span>, and 
          <span className="text-blue-600 font-semibold"> security systems</span>.
        </p>

        <p className="italic text-gray-600">
          "I believe that data is only powerful when it leads to better decisions — that's what I strive to deliver."
        </p>

        <p>
          Beyond analytics, I'm passionate about <span className="font-semibold text-gray-800">cricket 🏏</span>, 
          <span className="font-semibold text-gray-800"> strategy games 🎯</span>, and constantly challenging my 
          problem-solving abilities under pressure.
        </p>

      </div>

    </div>
  );
}

export default About;
