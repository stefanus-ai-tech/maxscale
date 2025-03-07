import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MaxScaleButton from "@/components/ui/MaxScaleButton";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: "ecommerce-optimization",
      title: "E-commerce Conversion Rate Optimization",
      client: "GlobalShop",
      industry: "Retail",
      challenge: "Facing declining conversion rates and high cart abandonment",
      solution:
        "Implemented AI-powered recommendation engine and chatbot assistance",
      results: "43% increase in conversions, 27% reduction in cart abandonment",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?fit=crop&w=800&h=500",
    },
    {
      id: "customer-service-automation",
      title: "Customer Service Automation",
      client: "TechSupport Inc",
      industry: "SaaS",
      challenge: "Long response times and escalating customer service costs",
      solution:
        "Deployed AI chatbot with natural language processing capabilities",
      results: "90% of queries resolved automatically, 62% cost reduction",
      image:
        "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?fit=crop&w=800&h=500",
    },
    {
      id: "healthcare-automation",
      title: "Process Automation for Healthcare",
      client: "MediCare Solutions",
      industry: "Healthcare",
      challenge:
        "Manual data entry causing delays and errors in patient records",
      solution: "AI-powered document processing and automated workflow system",
      results: "85% reduction in processing time, 95% accuracy improvement",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?fit=crop&w=800&h=500",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-maxscale-dark">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="maxscale-container py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold mb-6">
              <span className="text-white">Client </span>
              <span className="text-gradient">Success Stories</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Explore how our AI solutions have transformed businesses across
              industries, driving measurable results and sustainable growth.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="glass-panel overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="h-64 lg:h-auto">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className="text-sm font-medium px-3 py-1 rounded-full bg-maxscale-muted text-maxscale-accent">
                            {study.industry}
                          </span>
                        </div>
                        <span className="text-gray-400">
                          Client: {study.client}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-4">
                        {study.title}
                      </h2>

                      <div className="mb-6">
                        <h3 className="text-maxscale-accent font-semibold mb-1">
                          Challenge:
                        </h3>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-maxscale-accent font-semibold mb-1">
                          Solution:
                        </h3>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-maxscale-accent font-semibold mb-1">
                          Results:
                        </h3>
                        <p className="text-gray-300">{study.results}</p>
                      </div>
                    </div>

                    <Link to={`/case-studies/${study.id}`}>
                      <MaxScaleButton>Read Full Case Study</MaxScaleButton>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/contact">
              <MaxScaleButton size="lg">Schedule a Consultation</MaxScaleButton>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
