
import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-maxscale-darker pt-16 pb-8">
      <div className="maxscale-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <a href="#" className="inline-block mb-4">
              <span className="text-2xl font-bold text-gradient">MaxScale</span>
            </a>
            <p className="text-gray-400 mb-6">
              AI-driven agency dedicated to helping businesses scale efficiently and affordably.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-maxscale-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-maxscale-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-maxscale-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-maxscale-accent transition-colors">
                  AI-Powered Website
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-maxscale-accent transition-colors">
                  Customer Service Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-maxscale-accent transition-colors">
                  Business Process Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-maxscale-accent transition-colors">
                  Scalable AI Solutions
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-maxscale-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-maxscale-accent transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-maxscale-accent transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-maxscale-accent transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-maxscale-accent mr-3 mt-1" />
                <span className="text-gray-400">
                  123 Innovation Street, Tech City, TC 10111
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-maxscale-accent mr-3" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-maxscale-accent mr-3" />
                <span className="text-gray-400">info@maxscale.ai</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-maxscale-muted mt-12 pt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} MaxScale. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
