import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-extrabold text-blue-700 tracking-wide hover:text-blue-800 transition">
              Sri Krishnan
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition">About</Link>
            <Link to="/projects" className="text-gray-600 hover:text-blue-600 transition">Projects</Link>
            <Link to="/experience" className="text-gray-600 hover:text-blue-600 transition">Experience</Link>
            <Link to="/resume" className="text-gray-600 hover:text-blue-600 transition">Resume</Link>
            <Link to="/certificates" className="text-gray-600 hover:text-blue-600 transition">Certificates</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</Link>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
