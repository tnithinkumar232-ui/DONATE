import React from 'react';
import { Link } from 'react-router-dom';
import { Gift } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Gift className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold text-white">DOCARE</span>
            </Link>
            <p className="text-sm text-gray-400">
              Fostering community through giving.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/post" className="hover:text-white">Donate</Link></li>
              <li><Link to="/requests" className="hover:text-white">Request</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white tracking-wider uppercase mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white tracking-wider uppercase mb-4">Follow Us</h3>
            <p className="text-sm text-gray-400">Social media links coming soon.</p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} DOCARE. All rights reserved. A project by Dualite Alpha.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
