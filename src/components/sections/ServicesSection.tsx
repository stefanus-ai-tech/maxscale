
import React from 'react';
import ServiceCard from '../ui/ServiceCard';
import { Globe, MessageSquare, Settings, LineChart } from 'lucide-react';
import MaxScaleButton from '../ui/MaxScaleButton';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "AI-Powered Website Development",
      link: "/services#website",
      description: [
        "Create stunning, high-converting websites using AI-driven design tools.",
        "Enable businesses to establish a strong digital presence with minimal effort."
      ]
    },
    {
      icon: MessageSquare,
      title: "AI Customer Service Solutions",
      link: "/services#customer-service",
      description: [
        "Implement chatbots and virtual assistants to enhance customer interactions.",
        "Reduce operational costs by automating repetitive customer service tasks."
      ]
    },
    {
      icon: Settings,
      title: "Business Process Automation",
      link: "/services#automation",
      description: [
        "Automate invoicing, scheduling, and data management to increase efficiency.",
        "Use AI analytics to provide actionable insights for better decision-making."
      ]
    },
    {
      icon: LineChart,
      title: "Scalable AI Solutions",
      link: "/services#scalable",
      description: [
        "Offer flexible AI-powered service packages tailored to each business's needs.",
        "Provide continuous support and training for seamless AI adoption."
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-maxscale-darker relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-maxscale-dark to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-maxscale-dark to-transparent"></div>
      
      <div className="maxscale-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-maxscale-muted text-maxscale-accent mb-4 animate-fade-in opacity-0">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in opacity-0 [animation-delay:200ms]">
            <span className="text-white">Core </span>
            <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-300 text-lg animate-fade-in opacity-0 [animation-delay:400ms]">
            We provide comprehensive AI solutions that help businesses streamline operations,
            enhance customer experiences, and drive sustainable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Link 
              key={index} 
              to={service.link}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                className="[--delay:calc(600ms+100ms*var(--index))] h-full cursor-pointer transition-transform hover:scale-105"
                style={{ "--index": index } as React.CSSProperties}
              />
            </Link>
          ))}
        </div>
        
        <div className="text-center animate-fade-in opacity-0 [animation-delay:1000ms]">
          <Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <MaxScaleButton variant="outline" size="lg">
              View All Services
            </MaxScaleButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
