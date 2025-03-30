import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Globe,
  MessageSquare,
  Settings,
  LineChart,
  ArrowRight,
  Check,
} from "lucide-react";
import MaxScaleButton from "@/components/ui/MaxScaleButton";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const services = [
    {
      id: "website",
      icon: Globe,
      title: "AI-Powered Website Development",
      subtitle: "Intelligent websites that convert visitors into customers",
      description:
        "Our AI-powered website development service combines cutting-edge design with intelligent functionality to create websites that not only look beautiful but actively work to convert visitors into customers.",
      benefits: [
        "AI-driven content generation and optimization",
        "Intelligent user behavior analysis",
        "Automated A/B testing for constant improvement",
        "Personalized user experiences based on visitor data",
        "SEO optimization with AI-powered recommendations",
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?fit=crop&w=800&h=500",
    },
    {
      id: "customer-service",
      icon: MessageSquare,
      title: "AI Customer Service Solutions",
      subtitle: "Enhance customer interactions while reducing costs",
      description:
        "Transform your customer service operations with AI-powered solutions that provide instant, accurate responses to customer queries while significantly reducing operational costs.",
      benefits: [
        "24/7 customer support through intelligent chatbots",
        "Natural language processing for human-like interactions",
        "Seamless escalation to human agents when needed",
        "Multilingual support capabilities",
        "Continuous learning from customer interactions",
      ],
      image:
        "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?fit=crop&w=800&h=500",
    },
    {
      id: "automation",
      icon: Settings,
      title: "Business Process Automation",
      subtitle: "Streamline operations with intelligent automation",
      description:
        "Identify and automate repetitive, time-consuming business processes to increase efficiency, reduce errors, and free up your team to focus on high-value strategic tasks.",
      benefits: [
        "Workflow analysis to identify automation opportunities",
        "Custom automation solutions for your specific needs",
        "Integration with existing business systems",
        "Real-time monitoring and reporting",
        "Scalable solutions that grow with your business",
      ],
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fit=crop&w=800&h=500",
    },
    {
      id: "scalable",
      icon: LineChart,
      title: "AI-Driven Marketing Solutions",
      subtitle: "Scale your marketing efforts with AI",
      description:
        "MaxScale's AI-driven marketing solutions are designed to help startups and high-growth businesses scale their marketing efforts efficiently and effectively. Our customizable AI implementations allow you to leverage the power of artificial intelligence to optimize your marketing strategies and drive better results.",
      benefits: [
        "Use AI tools for fast, precise, and scalable go-to-market strategies.",
        "Streamline marketing for startups—from targeting to analytics.",
        "Customizable solutions that adapt to your evolving needs",
        "Integration with existing marketing platforms and tools",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=800&h=500",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-maxscale-dark">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="maxscale-container py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold mb-6">
              <span className="text-white">Our </span>
              <span className="text-gradient">Services</span>
            </h1>
            <p className="text-gray-300 text-lg">
              MaxScale offers comprehensive AI solutions designed to optimize
              your business operations, enhance customer experiences, and drive
              sustainable growth.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div id={service.id} key={index} className="scroll-mt-32">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-accent-gradient flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-semibold px-3 py-1 rounded-full bg-maxscale-muted text-blue-400">
                        Service
                      </span>
                    </div>

                    <h2 className="text-3xl font-bold text-white mb-3">
                      {service.title}
                    </h2>
                    <p className="text-xl text-blue-400 mb-6">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-300 mb-8">{service.description}</p>

                    <div className="space-y-3 mb-8">
                      <h3 className="text-white font-semibold mb-2">
                        Key Benefits:
                      </h3>
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start">
                          <Check
                            className="text-blue-400 mr-3 mt-1"
                            size={18}
                          />
                          <span className="text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/learn-more">
                      <MaxScaleButton className="group">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </MaxScaleButton>
                    </Link>
                  </div>

                  <div
                    className={`relative ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="absolute -inset-4 bg-blue-500/20 rounded-2xl opacity-20 blur-xl"></div>
                    <div className="glass-panel p-4 relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-panel p-8 md:p-12 mt-24">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="md:w-3/5">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to transform your business with AI?
                </h2>
                <p className="text-gray-300">
                  Get in touch with our team to discuss how our AI solutions can
                  address your specific business challenges and help you achieve
                  your goals.
                </p>
              </div>
              <div className="md:w-2/5 flex justify-center md:justify-end">
                <Link to="/contact">
                  <MaxScaleButton size="lg">
                    Schedule a Free Consultation
                  </MaxScaleButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
