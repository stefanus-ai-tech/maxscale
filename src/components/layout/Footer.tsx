import React from "react";
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetPath: string,
    hash?: string
  ) => {
    // If we're already on the target page and there's a hash, smooth scroll to it
    if (location.pathname === targetPath && hash) {
      e.preventDefault();
      const targetId = hash.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100, // Adjust for navbar height
          behavior: "smooth",
        });
      }
    } else if (location.pathname === targetPath) {
      // If we're on the same page but no hash, scroll to top
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // For different pages, we'll scroll to top in the useEffect of each page component
  };

  return (
    <footer className="bg-maxscale-darker pt-16 pb-8">
      <div className="maxscale-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link
              to="/"
              className="inline-block mb-4"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span className="text-2xl font-bold text-gradient">MaxScale</span>
            </Link>
            <p className="text-gray-400 mb-6">
              AI-driven agency dedicated to helping businesses scale efficiently
              and affordably.
            </p>
            {/* <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div> */}
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services#website"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  onClick={(e) => handleLinkClick(e, "/services", "#website")}
                >
                  AI-Powered Website
                </Link>
              </li>
              <li>
                <Link
                  to="/services#customer-service"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  onClick={(e) =>
                    handleLinkClick(e, "/services", "#customer-service")
                  }
                >
                  Customer Service Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services#automation"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  onClick={(e) =>
                    handleLinkClick(e, "/services", "#automation")
                  }
                >
                  Business Process Automation
                </Link>
              </li>
              <li>
                <Link
                  to="/services#scalable"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  onClick={(e) => handleLinkClick(e, "/services", "#scalable")}
                >
                  Scalable AI Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/learn-more"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Learn More
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-blue-400 mr-3 mt-1" />
                <span className="text-gray-400">
                  123 Innovation Street, Tech City, TC 10111
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-blue-400 mr-3" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-blue-400 mr-3" />
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
