function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center">
        Get <span className="text-blue-600">In Touch</span>
      </h1>

      {/* Contact Info Card */}
      <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-8 max-w-2xl w-full space-y-8 text-gray-700 text-center">

        {/* Email */}
        <div>
          <p className="text-xl font-semibold mb-2">Email</p>
          <a href="mailto:srikrish2705guru@gmail.com" className="text-blue-600 hover:underline text-lg">
            srikrish2705guru@gmail.com
          </a>
        </div>

        {/* LinkedIn */}
        <div>
          <p className="text-xl font-semibold mb-2">LinkedIn</p>
          <a 
            href="https://www.linkedin.com/in/sri-krishnan-g-a9b1b1273" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:underline text-lg"
          >
            Connect on LinkedIn →
          </a>
        </div>

        {/* GitHub */}
        <div>
          <p className="text-xl font-semibold mb-2">GitHub</p>
          <a 
            href="https://github.com/Sri-Krishnan007" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:underline text-lg"
          >
            View Projects →
          </a>
        </div>

        {/* Phone */}
        <div>
          <p className="text-xl font-semibold mb-2">Phone</p>
          <p className="text-lg text-gray-800">+91 63825 71863</p>
        </div>

      </div>

    </div>
  );
}

export default Contact;
