import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MaxScaleButton from "@/components/ui/MaxScaleButton";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  const [message, setMessage] = useState("");
  const [selectedService, setSelectedService] = useState("");

  // Check if user came from the consultation button on pricing page
  useEffect(() => {
    if (location.state && location.state.consultationRequest) {
      setSelectedService("other");
      setMessage(
        "I would like to schedule a free consultation about a custom AI solution for my business."
      );
    }
  }, [location.state]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the form data to a backend
    alert("Thanks for reaching out! We'll contact you soon.");
  };

  return (
    <div className="min-h-screen flex flex-col bg-maxscale-dark">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="maxscale-container py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold mb-6">
              <span className="text-gradient">Get in </span>
              <span className="text-white">Touch</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Have questions about our AI solutions? Ready to start scaling your
              business? Our team is here to help you find the right solutions
              for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass-panel p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-accent-gradient flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Office Location
                    </h3>
                    <p className="text-gray-300">
                      123 Innovation Street, Tech City, TC 10111
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-accent-gradient flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Email Address
                    </h3>
                    <p className="text-gray-300">info@maxscale.ai</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-accent-gradient flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Phone Number
                    </h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-accent-gradient flex items-center justify-center mr-4">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-300">
                      Monday - Friday: 9am - 6pm EST
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-maxscale-muted p-6 rounded-lg">
                <h3 className="text-white font-semibold mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-maxscale-light flex items-center justify-center text-white hover:bg-maxscale-accent transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-maxscale-light flex items-center justify-center text-white hover:bg-maxscale-accent transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-maxscale-light flex items-center justify-center text-white hover:bg-maxscale-accent transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-panel p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-maxscale-light border border-maxscale-muted rounded-lg text-white focus:border-maxscale-accent focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-maxscale-light border border-maxscale-muted rounded-lg text-white focus:border-maxscale-accent focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 bg-maxscale-light border border-maxscale-muted rounded-lg text-white focus:border-maxscale-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-gray-300 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 bg-maxscale-light border border-maxscale-muted rounded-lg text-white focus:border-maxscale-accent focus:outline-none"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                  >
                    <option value="">Select a service</option>
                    <option value="website">
                      AI-Powered Website Development
                    </option>
                    <option value="customer-service">
                      AI Customer Service Solutions
                    </option>
                    <option value="automation">
                      Business Process Automation
                    </option>
                    <option value="scalable">Scalable AI Solutions</option>
                    <option value="other">Custom Solution</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 bg-maxscale-light border border-maxscale-muted rounded-lg text-white focus:border-maxscale-accent focus:outline-none"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <MaxScaleButton type="submit" size="lg" className="w-full">
                  Send Message
                </MaxScaleButton>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
