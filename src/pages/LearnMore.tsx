
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MaxScaleButton from '@/components/ui/MaxScaleButton';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const LearnMore = () => {
  return (
    <div className="min-h-screen flex flex-col bg-maxscale-dark">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="maxscale-container py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold mb-6">
              <span className="text-white">Learn More About </span>
              <span className="text-gradient">MaxScale</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Discover how our AI solutions can transform your business operations, enhance customer experiences, and drive sustainable growth.
            </p>
          </div>
          
          <div className="glass-panel p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Our AI-Powered Approach</h2>
            <p className="text-gray-300 mb-6">
              At MaxScale, we leverage cutting-edge artificial intelligence to create solutions tailored to your specific business needs. Our unique approach combines advanced machine learning algorithms, natural language processing, and automation to deliver measurable results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <CheckCircle className="text-blue-400 mr-3 mt-1" size={20} />
                <div>
                  <h3 className="text-white font-medium mb-2">Data-Driven Solutions</h3>
                  <p className="text-gray-300">We analyze your business data to create AI models that provide actionable insights and drive informed decision-making.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-blue-400 mr-3 mt-1" size={20} />
                <div>
                  <h3 className="text-white font-medium mb-2">Customized Implementation</h3>
                  <p className="text-gray-300">Our solutions are tailored to your specific industry, business size, and unique challenges.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-blue-400 mr-3 mt-1" size={20} />
                <div>
                  <h3 className="text-white font-medium mb-2">Continuous Optimization</h3>
                  <p className="text-gray-300">Our AI systems learn and improve over time, ensuring your business stays ahead of the competition.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-blue-400 mr-3 mt-1" size={20} />
                <div>
                  <h3 className="text-white font-medium mb-2">Seamless Integration</h3>
                  <p className="text-gray-300">We integrate our AI solutions with your existing systems and workflows to minimize disruption.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-panel p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">How We Work With You</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-maxscale-darker rounded-lg">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-400 font-bold text-xl">1</span>
                </div>
                <h3 className="text-white font-medium mb-2">Discovery</h3>
                <p className="text-gray-300">We start by understanding your business, challenges, and goals through in-depth consultation.</p>
              </div>
              
              <div className="text-center p-6 bg-maxscale-darker rounded-lg">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-400 font-bold text-xl">2</span>
                </div>
                <h3 className="text-white font-medium mb-2">Strategy</h3>
                <p className="text-gray-300">Our experts develop a customized AI implementation strategy aligned with your business objectives.</p>
              </div>
              
              <div className="text-center p-6 bg-maxscale-darker rounded-lg">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-400 font-bold text-xl">3</span>
                </div>
                <h3 className="text-white font-medium mb-2">Implementation</h3>
                <p className="text-gray-300">We deploy our AI solutions with minimal disruption and provide comprehensive training.</p>
              </div>
            </div>
          </div>
          
          <div className="glass-panel p-8 md:p-12 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="md:w-3/5">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to transform your business with AI?</h2>
                <p className="text-gray-300">
                  Get in touch with our team to discuss how our AI solutions can address your 
                  specific business challenges and help you achieve your goals.
                </p>
              </div>
              <div className="md:w-2/5 flex justify-center md:justify-end">
                <Link to="/contact">
                  <MaxScaleButton size="lg">Schedule a Free Consultation</MaxScaleButton>
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

export default LearnMore;
