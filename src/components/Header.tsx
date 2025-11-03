import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gift, Bell, User, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/post', label: 'Post' },
    { href: '/history', label: 'History' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Gift className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-gray-800">DOCARE</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-gray-600 hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="relative text-gray-600 hover:text-primary transition-colors">
              <Bell className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </button>
            <Link to="/profile" className="text-gray-600 hover:text-primary transition-colors">
              <User className="h-6 w-6" />
            </Link>
            <Link
              to="/login"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-all duration-300 font-semibold"
            >
              Login
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-primary py-2"
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t pt-4 flex flex-col space-y-4">
              <Link to="/profile" className="flex items-center space-x-2 text-gray-600">
                <User size={20} />
                <span>Profile</span>
              </Link>
              <Link to="/notifications" className="flex items-center space-x-2 text-gray-600">
                <Bell size={20} />
                <span>Notifications</span>
              </Link>
              <Link
                to="/login"
                className="bg-primary text-white text-center px-4 py-2 rounded-md hover:bg-primary-dark transition-all duration-300 font-semibold"
              >
                Login
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
