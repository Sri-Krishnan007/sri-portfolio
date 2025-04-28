function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      
      {/* Main Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 text-center leading-tight">
        Hi, I'm <span className="text-blue-600">Sri Krishnan</span> 👋
      </h1>
      
      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl leading-relaxed mb-8">
        Aspiring Data Analyst passionate about turning raw data into powerful insights. 
        Skilled in <span className="font-semibold text-gray-700">Python</span>, <span className="font-semibold text-gray-700">SQL</span>, 
        <span className="font-semibold text-gray-700"> Power BI</span>, and <span className="font-semibold text-gray-700">Machine Learning</span>. 
        I build intelligent systems that solve real-world problems — <span className="text-blue-600 font-semibold">faster, smarter, better</span>.
      </p>

      {/* Call to Action Buttons */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        <a
          href="/projects"
          className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-lg shadow-md"
        >
          View Projects
        </a>
        <a
          href="/contact"
          className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-100 transition text-lg"
        >
          Contact Me
        </a>
      </div>

    </div>
  );
}

export default Home;
