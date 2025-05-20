import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold text-blue-400">SeleniumPro</h2>
            <p className="mt-2 text-gray-400 text-sm">
              The premier platform for learning Selenium automation testing and advancing your QA career.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-medium text-white">Courses</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Selenium Basics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Web Automation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">API Testing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Framework Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Advanced Topics</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-medium text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Partners</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-medium text-white">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} SeleniumPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;