
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-maxscale-dark">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="maxscale-container py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">
              <span className="text-white">About </span>
              <span className="text-gradient">MaxScale</span>
            </h1>
            
            <div className="glass-panel p-8 mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-white">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                At MaxScale, our mission is to democratize AI technology, making it accessible and practical for businesses of all sizes. 
                We believe that artificial intelligence should not be limited to tech giants or enterprises with massive budgets.
              </p>
              <p className="text-gray-300">
                By providing affordable, scalable AI solutions, we help companies leverage cutting-edge technology to optimize operations, 
                enhance customer experiences, and drive sustainable growth without the traditional barriers to entry.
              </p>
            </div>
            
            <div className="glass-panel p-8 mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-white">Our Team</h2>
              <p className="text-gray-300 mb-6">
                MaxScale brings together experts from diverse backgrounds including AI research, software development, 
                business consulting, and customer experience design. Our multidisciplinary team ensures that our AI solutions 
                are not just technically sound but also aligned with real business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {[
                  {name: "Alex Johnson", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"},
                  {name: "Sarah Chen", role: "CTO", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"},
                  {name: "Michael Rodriguez", role: "Head of AI Research", image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"}
                ].map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                      <img src={`${member.image}?w=200&h=200&fit=crop`} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-white font-semibold">{member.name}</h3>
                    <p className="text-gray-400">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-panel p-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {title: "Innovation", description: "We constantly push the boundaries of what AI can do for businesses"},
                  {title: "Accessibility", description: "Making advanced AI solutions affordable and understandable for all"},
                  {title: "Integrity", description: "Transparent, ethical practices in all our AI implementations"},
                  {title: "Impact", description: "Delivering measurable, meaningful business results"}
                ].map((value, index) => (
                  <div key={index} className="border border-maxscale-muted p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-maxscale-accent">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
