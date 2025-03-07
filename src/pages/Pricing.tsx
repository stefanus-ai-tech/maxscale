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
      <main className="flex-grow pt-24">
        <div className="maxscale-container py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold mb-6">
              <span className="text-white">Simple, Transparent </span>
              <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Choose the plan that fits your business needs. All plans include
              our core AI technology with different levels of customization and
              support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`glass-panel p-8 relative flex flex-col ${
                  plan.popular ? "border-2 border-maxscale-accent" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-maxscale-accent text-white px-4 py-1 text-sm font-semibold transform translate-y-[-50%]">
                    Most Popular
                  </div>
                )}

                <h2 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h2>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-gray-400 ml-1">/month</span>
                  )}
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check
                        className="text-maxscale-accent mr-2 mt-1 flex-shrink-0"
                        size={18}
                      />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <MaxScaleButton
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full"
                  onClick={handleGetStarted}
                >
                  Get Started
                </MaxScaleButton>
              </div>
            ))}
          </div>

          <div className="glass-panel p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="md:w-3/5">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Need a custom solution?
                </h2>
                <p className="text-gray-300">
                  Our team can create a tailored AI package that perfectly meets
                  your specific business requirements and challenges. Contact us
                  to discuss your needs.
                </p>
              </div>
              <div className="md:w-2/5 flex justify-center md:justify-end">
                <MaxScaleButton size="lg" onClick={handleScheduleConsultation}>
                  Schedule a Free Consultation
                </MaxScaleButton>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
