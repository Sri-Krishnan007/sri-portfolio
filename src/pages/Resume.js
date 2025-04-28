function Resume() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center">
        My <span className="text-blue-600">Resume</span>
      </h1>

      {/* Resume Viewer */}
      <div className="w-full max-w-4xl rounded-2xl overflow-hidden border border-gray-200 shadow-md mb-8">
        <iframe
          src="https://drive.google.com/file/d/1c6P57a_4lZVLvT8y0IECPexEhx51Hvz0/preview"
          width="100%"
          height="800px"
          allow="autoplay"
          title="Sri Krishnan Resume"
          className="border-0"
        ></iframe>
      </div>

      {/* Download Button */}
      <a
        href="https://drive.google.com/uc?export=download&id=1c6P57a_4lZVLvT8y0IECPexEhx51Hvz0"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-lg font-semibold shadow-md"
      >
        Download Resume
      </a>

    </div>
  );
}

export default Resume;
