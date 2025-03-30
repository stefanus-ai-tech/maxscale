import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MaxScaleButton from "@/components/ui/MaxScaleButton";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  // Function to handle "Get Started" button click
  const handleGetStarted = () => {
    navigate("/contact");
  };

  // Function to handle "Schedule a Free Consultation" button click
  const handleScheduleConsultation = () => {
    navigate("/contact", { state: { consultationRequest: true } });
  };

  const plans = [
    {
      name: "Starter",
      price: "$499",
      description:
        "Perfect for small businesses taking their first steps with AI",
      features: [
        "AI-powered chatbot with basic responses",
        "Website optimization recommendations",
        "Basic analytics dashboard",
        "Email support",
        "Monthly performance report",
      ],
    },
    {
      name: "Business",
      price: "$999",
      description: "Comprehensive AI solutions for growing businesses",
      features: [
        "Advanced AI chatbot with custom training",
        "Full website AI optimization",
        "Process automation for 2 workflows",
        "Real-time analytics dashboard",
        "Priority email and chat support",
        "Weekly performance reports",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored AI solutions for large organizations",
      features: [
        "Custom AI solution development",
        "End-to-end business process automation",
        "Integration with existing systems",
        "Advanced analytics with predictive insights",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom reporting and insights",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-maxscale-dark">
      <Navbar />
      <main className="flex-grow pt-24 flex items-center justify-center">
        <div className="maxscale-container py-16">
          <div className="glass-panel p-8 md:p-12 text-center max-w-lg mx-auto">
            <h1 className="text-3xl font-bold text-white mb-4">Pricing Information</h1>
            <p className="text-gray-300 text-lg mb-6">
              Please contact us to get detailed pricing information tailored to your specific needs.
            </p>
            <MaxScaleButton onClick={handleGetStarted}>
              Contact Us
            </MaxScaleButton>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
