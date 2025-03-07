import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MaxScaleButton from "@/components/ui/MaxScaleButton";
import { ArrowLeft } from "lucide-react";

const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const caseStudies = {
    "ecommerce-optimization": {
      title: "E-commerce Conversion Rate Optimization",
      client: "GlobalShop",
      industry: "Retail",
      challenge: "Facing declining conversion rates and high cart abandonment",
      solution:
        "Implemented AI-powered recommendation engine and chatbot assistance",
      results: "43% increase in conversions, 27% reduction in cart abandonment",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?fit=crop&w=800&h=500",
      fullDescription: `GlobalShop, a leading online retailer, was experiencing significant challenges with their e-commerce platform. 
      Their conversion rates were steadily declining, and cart abandonment rates had reached concerning levels. This was directly 
      impacting their revenue and growth potential.

      Our team conducted a thorough analysis of their customer journey and identified key pain points in the shopping experience. 
      We implemented a comprehensive AI solution that included:

      1. Personalized Product Recommendations
      - AI-powered algorithm analyzing browsing and purchase history
      - Real-time adjustment of recommendations based on user behavior
      - Cross-selling and upselling suggestions based on cart contents

      2. Intelligent Chatbot Integration
      - 24/7 customer support availability
      - Natural language processing for understanding customer queries
      - Automated responses to common questions
      - Seamless handoff to human agents for complex issues

      3. Cart Abandonment Prevention
      - Predictive analytics to identify at-risk carts
      - Targeted interventions with personalized offers
      - Smart reminder system with optimal timing

      The implementation process took 8 weeks, including:
      - Initial assessment and strategy development
      - Custom AI model training
      - Integration with existing systems
      - Staff training and optimization

      Key Results:
      - 43% increase in conversion rates within 3 months
      - 27% reduction in cart abandonment
      - 35% increase in average order value
      - 92% positive customer feedback on AI recommendations
      - 60% reduction in customer service response time

      The success of this implementation has made GlobalShop a model case for AI-driven e-commerce optimization, demonstrating 
      the powerful impact of intelligent automation in modern retail.`,
    },
    "customer-service-automation": {
      title: "Customer Service Automation",
      client: "TechSupport Inc",
      industry: "SaaS",
      challenge: "Long response times and escalating customer service costs",
      solution:
        "Deployed AI chatbot with natural language processing capabilities",
      results: "90% of queries resolved automatically, 62% cost reduction",
      image:
        "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?fit=crop&w=800&h=500",
      fullDescription: `TechSupport Inc, a rapidly growing SaaS company, was struggling to maintain quality customer service as their 
      user base expanded. Response times were increasing, and the cost of scaling their support team was becoming unsustainable.

      Our solution involved implementing an advanced AI-powered customer service system that included:

      1. Intelligent Chatbot System
      - Advanced natural language processing
      - Context-aware responses
      - Multi-language support
      - Learning capabilities from customer interactions

      2. Automated Ticket Management
      - Smart ticket routing and prioritization
      - Automatic categorization of issues
      - Predictive response suggestions for human agents

      3. Self-Service Knowledge Base
      - AI-powered search functionality
      - Dynamic FAQ updates based on common queries
      - Interactive troubleshooting guides

      Implementation Timeline:
      - Week 1-2: System analysis and customization
      - Week 3-4: AI model training with historical data
      - Week 5-6: Integration and testing
      - Week 7-8: Staff training and soft launch

      Achieved Results:
      - 90% of customer queries resolved automatically
      - 62% reduction in customer service costs
      - Average response time reduced from 4 hours to 2 minutes
      - Customer satisfaction increased by 45%
      - Support team efficiency improved by 75%

      The success of this implementation has transformed TechSupport Inc's customer service operations, allowing them to scale 
      their business while maintaining high-quality support standards.`,
    },
    "healthcare-automation": {
      title: "Process Automation for Healthcare",
      client: "MediCare Solutions",
      industry: "Healthcare",
      challenge:
        "Manual data entry causing delays and errors in patient records",
      solution: "AI-powered document processing and automated workflow system",
      results: "85% reduction in processing time, 95% accuracy improvement",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?fit=crop&w=800&h=500",
      fullDescription: `MediCare Solutions, a leading healthcare provider, was facing significant challenges with their patient record 
      management system. Manual data entry was leading to delays, errors, and inefficiencies in patient care delivery.

      We implemented a comprehensive AI-powered automation solution that included:

      1. Intelligent Document Processing
      - OCR with medical terminology recognition
      - Automated form filling and verification
      - Real-time error detection and correction
      - Integration with existing EMR systems

      2. Workflow Automation
      - Smart routing of patient documents
      - Automated appointment scheduling
      - Intelligent prioritization of urgent cases
      - Automated follow-up reminders

      3. Quality Assurance System
      - AI-powered data validation
      - Compliance checking
      - Audit trail generation
      - Automated reporting

      Implementation Process:
      - Weeks 1-2: System assessment and compliance review
      - Weeks 3-4: Custom AI model development
      - Weeks 5-6: Integration and security testing
      - Weeks 7-8: Staff training and phased rollout

      Key Achievements:
      - 85% reduction in document processing time
      - 95% improvement in data accuracy
      - 70% reduction in administrative workload
      - Zero HIPAA compliance issues
      - 50% faster patient onboarding

      The implementation has revolutionized MediCare Solutions' operations, allowing them to focus more on patient care while 
      maintaining the highest standards of accuracy and compliance in their documentation.`,
    },
  };

  const caseStudy = caseStudies[id as keyof typeof caseStudies];

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex flex-col bg-maxscale-dark">
        <Navbar />
        <main className="flex-grow pt-24">
          <div className="maxscale-container py-16 text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              Case Study Not Found
            </h1>
            <p className="text-gray-300 mb-8">
              The case study you're looking for doesn't exist.
            </p>
            <Link to="/case-studies">
              <MaxScaleButton>View All Case Studies</MaxScaleButton>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-maxscale-dark">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="maxscale-container py-16">
          <button
            onClick={() => navigate("/case-studies")}
            className="flex items-center text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </button>

          <div className="glass-panel overflow-hidden mb-16">
            <div className="h-[400px] relative">
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maxscale-dark to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-maxscale-muted text-maxscale-accent">
                    {caseStudy.industry}
                  </span>
                  <span className="text-gray-400">
                    Client: {caseStudy.client}
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-white">
                  {caseStudy.title}
                </h1>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="glass-panel p-6">
                  <h3 className="text-maxscale-accent font-semibold mb-2">
                    Challenge:
                  </h3>
                  <p className="text-gray-300">{caseStudy.challenge}</p>
                </div>
                <div className="glass-panel p-6">
                  <h3 className="text-maxscale-accent font-semibold mb-2">
                    Solution:
                  </h3>
                  <p className="text-gray-300">{caseStudy.solution}</p>
                </div>
                <div className="glass-panel p-6">
                  <h3 className="text-maxscale-accent font-semibold mb-2">
                    Results:
                  </h3>
                  <p className="text-gray-300">{caseStudy.results}</p>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                {caseStudy.fullDescription
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index} className="text-gray-300 mb-6">
                      {paragraph.trim()}
                    </p>
                  ))}
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="md:w-3/5">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to achieve similar results?
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

export default CaseStudyDetail;
