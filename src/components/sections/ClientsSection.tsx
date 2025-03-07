import React from "react";
import MaxScaleButton from "../ui/MaxScaleButton";
import { Link } from "react-router-dom";

const ClientsSection = () => {
  const clients = [
    {
      name: "TechCorp",
      logo: "https://placehold.co/150x50/2A2A35/FFFFFF?text=TechCorp",
    },
    {
      name: "InnovatePro",
      logo: "https://placehold.co/150x50/2A2A35/FFFFFF?text=InnovatePro",
    },
    {
      name: "FutureWave",
      logo: "https://placehold.co/150x50/2A2A35/FFFFFF?text=FutureWave",
    },
    {
      name: "NexGen",
      logo: "https://placehold.co/150x50/2A2A35/FFFFFF?text=NexGen",
    },
    {
      name: "DigitalPlus",
      logo: "https://placehold.co/150x50/2A2A35/FFFFFF?text=DigitalPlus",
    },
  ];

  const testimonials = [
    {
      quote:
        "MaxScale transformed our customer service operations. Our response times improved by 45% while reducing costs by 30%.",
      author: "Sarah Johnson",
      position: "COO, TechCorp",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120",
    },
    {
      quote:
        "The AI-powered website development service was phenomenal. We launched in half the time and saw conversion rates increase by 28%.",
      author: "Michael Chen",
      position: "Marketing Director, InnovatePro",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120",
    },
  ];

  return (
    <section
      id="clients"
      className="section-padding bg-maxscale-darker relative"
    >
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-maxscale-dark to-transparent"></div>

      <div className="maxscale-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-maxscale-muted text-maxscale-accent mb-4 animate-fade-in opacity-0">
            Our Clients
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in opacity-0 [animation-delay:200ms]">
            <span className="text-white">Trusted by </span>
            <span className="text-gradient">World-Class Companies</span>
          </h2>
          <p className="text-gray-300 text-lg animate-fade-in opacity-0 [animation-delay:400ms]">
            We've helped businesses of all sizes leverage AI to achieve
            remarkable results. Here's what our clients have to say about
            working with MaxScale.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 mb-16 animate-fade-in opacity-0 [animation-delay:600ms]">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <img src={client.logo} alt={client.name} className="h-12" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-panel p-8 animate-fade-in opacity-0"
              style={{ animationDelay: `${800 + index * 200}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.33333 21.3333H2.66667V14.6667H9.33333C9.33333 11.7333 6.93333 9.33333 4 9.33333V2.66667C10.9333 2.66667 16 7.73333 16 14.6667V21.3333H9.33333ZM25.3333 21.3333H18.6667V14.6667H25.3333C25.3333 11.7333 22.9333 9.33333 20 9.33333V2.66667C26.9333 2.66667 32 7.73333 32 14.6667V21.3333H25.3333Z"
                      fill="#E945A3"
                    />
                  </svg>
                </div>
                <p className="text-white text-lg mb-6 flex-grow">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-panel p-8 md:p-12 animate-fade-in opacity-0 [animation-delay:1200ms]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="md:w-3/5">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Scale Your Business with AI?
              </h3>
              <p className="text-gray-300">
                Join hundreds of forward-thinking companies leveraging our AI
                solutions to drive growth, reduce costs, and gain competitive
                advantages.
              </p>
            </div>
            <div className="md:w-2/5 flex justify-center md:justify-end">
              <Link
                to="/pricing"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <MaxScaleButton size="lg">
                  Schedule a Free Consultation
                </MaxScaleButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
