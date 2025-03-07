
import React, { useEffect, useRef } from 'react';
import MaxScaleButton from '../ui/MaxScaleButton';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Simple parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const heroElements = heroRef.current.querySelectorAll('.parallax');
      heroElements.forEach((element, index) => {
        const speed = (index + 1) * 0.05;
        (element as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openRickRoll = () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20" ref={heroRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-maxscale-accent/30 rounded-full filter blur-[120px] opacity-30 parallax"></div>
        <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-maxscale-secondary/30 rounded-full filter blur-[120px] opacity-30 parallax"></div>
      </div>
      
      <div className="maxscale-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <span className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-maxscale-muted text-maxscale-accent mb-4 animate-fade-in opacity-0">
              AI-Powered Business Growth
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in opacity-0 [animation-delay:200ms]">
              <span className="text-white">We help businesses</span>
              <br />
              <span className="text-gradient">scale with AI</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in opacity-0 [animation-delay:400ms]">
              MaxScale leverages cutting-edge AI tools to optimize your business functions,
              from website development to customer service and automation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in opacity-0 [animation-delay:600ms]">
              <Link to="/services">
                <MaxScaleButton size="lg" className="group">
                  Get Started 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </MaxScaleButton>
              </Link>
              <MaxScaleButton variant="outline" size="lg" className="group" onClick={openRickRoll}>
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Demo
              </MaxScaleButton>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-fade-in opacity-0 [animation-delay:800ms]">
            <div className="relative">
              <div className="absolute inset-0 bg-hero-glow"></div>
              <div className="glass-panel p-4 sm:p-6 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?fit=crop&w=800&h=600" 
                  alt="MaxScale AI Dashboard" 
                  className="w-full h-auto rounded-lg object-cover shadow-xl"
                />
                <div className="absolute bottom-8 left-8 right-8 glass-panel p-4 text-left">
                  <h3 className="text-white font-medium mb-1">AI-Powered Dashboard</h3>
                  <p className="text-gray-300 text-sm">Real-time analytics and insights for your business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
