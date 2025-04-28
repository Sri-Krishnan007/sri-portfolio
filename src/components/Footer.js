function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-12">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <p className="text-gray-500 text-sm text-center">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-gray-700">Sri Krishnan</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
