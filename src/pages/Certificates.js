function Certificates() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center">
        My <span className="text-blue-600">Certifications</span>
      </h1>

      {/* Certificates Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto w-full">

        {/* Certificate 1 */}
        <div className="bg-white border border-gray-200 hover:shadow-lg transition rounded-xl p-6 text-center space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Data Analytics with Python</h2>
          <p className="text-gray-500 text-sm">(NPTEL - IIT Roorkee)</p>
          <a 
            href="https://drive.google.com/file/d/1lm4uq0lYV_o7EBgWFTDJlxRQUi8U4Vrm/view" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 hover:underline font-medium"
          >
            View Certificate →
          </a>
        </div>

        {/* Certificate 2 */}
        <div className="bg-white border border-gray-200 hover:shadow-lg transition rounded-xl p-6 text-center space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Career Essentials in Generative AI</h2>
          <p className="text-gray-500 text-sm">(Microsoft & LinkedIn)</p>
          <a 
            href="https://drive.google.com/file/d/1IeNScGMv69wAI7OuOy-1zK4wOigtB9ui/view" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 hover:underline font-medium"
          >
            View Certificate →
          </a>
        </div>

        {/* Certificate 3 */}
        <div className="bg-white border border-gray-200 hover:shadow-lg transition rounded-xl p-6 text-center space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Digital Marketing</h2>
          <p className="text-gray-500 text-sm">(MyCaptain)</p>
          <a 
            href="https://drive.google.com/drive/folders/1WEz15jvdLg386zLw3BbPsCCPGr09plTI?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 hover:underline font-medium"
          >
            View Certificate →
          </a>
        </div>

      </div>

    </div>
  );
}

export default Certificates;
