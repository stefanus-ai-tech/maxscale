
import React from 'react';
import StatCard from '../ui/StatCard';
import { Zap, TrendingUp, DollarSign } from 'lucide-react';
import MaxScaleButton from '../ui/MaxScaleButton';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
      
      <div className="maxscale-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-maxscale-muted text-maxscale-accent mb-4 animate-fade-in opacity-0">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in opacity-0 [animation-delay:200ms]">
            <span className="text-gradient">What is </span>
            <span className="text-white">MaxScale?</span>
          </h2>
          <p className="text-gray-300 text-lg animate-fade-in opacity-0 [animation-delay:400ms]">
            MaxScale is an AI-driven agency dedicated to helping businesses scale efficiently and affordably.
            We leverage cutting-edge AI tools to optimize key business functions, from website development to
            customer service and automation. Our goal is to empower businesses with intelligent, cost-effective
            solutions that drive growth and enhance productivity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <StatCard 
            percentage={38} 
            title="Average Cost Reduction" 
            description="Our clients achieve significant cost savings by implementing our AI solutions"
            color="from-red-400 to-pink-600"
            className="md:col-span-1"
          />
          <StatCard 
            percentage={23} 
            title="Efficiency Increase" 
            description="Businesses experience measurable productivity improvements across operations"
            color="from-blue-400 to-indigo-600"
            className="md:col-span-1"
          />
          <StatCard 
            percentage={19} 
            title="Revenue Growth" 
            description="Average revenue boost within 6 months of implementing MaxScale solutions"
            color="from-green-400 to-teal-600"
            className="md:col-span-1"
          />
        </div>
        
        <div className="glass-panel p-8 md:p-12 animate-fade-in opacity-0 [animation-delay:600ms]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Your business is scaling, but your systems aren't</h3>
              <p className="text-gray-300 mb-6">
                Many businesses struggle with legacy systems and manual processes that
                don't scale with their growth. This creates bottlenecks, reduces efficiency,
                and ultimately limits your potential.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: Zap, text: "Replace manual processes with intelligent automation" },
                  { icon: TrendingUp, text: "Scale operations without proportionally increasing costs" },
                  { icon: DollarSign, text: "Maximize ROI through precision-targeted AI implementation" }
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-maxscale-accent/20 mr-3 mt-1">
                      <item.icon className="w-3.5 h-3.5 text-maxscale-accent" />
                    </span>
                    <span className="text-gray-300">{item.text}</span>
                  </li>
                ))}
              </ul>
              <MaxScaleButton>Learn More</MaxScaleButton>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-accent-gradient rounded-xl opacity-30 blur-sm"></div>
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=600"
                  alt="Team collaboration"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
