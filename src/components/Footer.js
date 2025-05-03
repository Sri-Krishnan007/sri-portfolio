function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 mt-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">

        {/* Text */}
        <p className="text-gray-500 dark:text-gray-400 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-gray-700 dark:text-gray-200">Sri Krishnan</span>. All rights reserved.
        </p>

        {/* Social Links (Optional, Comment if Not Needed) */}
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
            <i className="fab fa-linkedin text-lg"></i>
          </a>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
            <i className="fab fa-github text-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
