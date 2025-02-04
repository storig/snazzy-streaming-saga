import { useState, useEffect } from "react";
import { Bell, Search, User } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-netflix-black" : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <div className="px-4 md:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
            className="h-5 md:h-7"
          />
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-white hover:text-gray-300 transition">Home</a>
            <a href="#" className="text-white hover:text-gray-300 transition">TV Shows</a>
            <a href="#" className="text-white hover:text-gray-300 transition">Movies</a>
            <a href="#" className="text-white hover:text-gray-300 transition">New & Popular</a>
            <a href="#" className="text-white hover:text-gray-300 transition">My List</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Search className="w-6 h-6 text-white cursor-pointer hover:text-gray-300 transition" />
          <Bell className="w-6 h-6 text-white cursor-pointer hover:text-gray-300 transition" />
          <User className="w-6 h-6 text-white cursor-pointer hover:text-gray-300 transition" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;