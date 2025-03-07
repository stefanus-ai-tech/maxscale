
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MaxScaleButton from '@/components/ui/MaxScaleButton';

const Blog = () => {
  const blogPosts = [
    {
      title: "How AI is Transforming Customer Service in 2023",
      excerpt: "Discover how artificial intelligence is revolutionizing customer service with faster response times, personalized interactions, and reduced operational costs.",
      date: "October 15, 2023",
      category: "AI Trends",
      image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?fit=crop&w=800&h=500",
      readTime: "5 min read"
    },
    {
      title: "5 Ways to Implement AI in Your Small Business",
      excerpt: "Small businesses can leverage AI too! Learn about affordable, easy-to-implement AI solutions that can help your small business compete with larger enterprises.",
      date: "September 28, 2023",
      category: "Small Business",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?fit=crop&w=800&h=500",
      readTime: "7 min read"
    },
    {
      title: "The ROI of AI: Measuring Business Impact",
      excerpt: "Calculating return on investment for AI implementations can be challenging. This article breaks down how to properly measure and evaluate the business impact of your AI solutions.",
      date: "September 15, 2023",
      category: "Business Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=800&h=500",
      readTime: "9 min read"
    },
    {
      title: "AI Ethics: Navigating the Responsible Use of AI",
      excerpt: "As AI becomes more prevalent in business, ethical considerations are increasingly important. Learn how to implement AI responsibly in your organization.",
      date: "August 30, 2023",
      category: "AI Ethics",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?fit=crop&w=800&h=500",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-maxscale-dark">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="maxscale-container py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold mb-6">
              <span className="text-white">MaxScale </span>
              <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Insights, trends, and practical advice on AI implementation, business growth, 
              and technology innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <div key={index} className="glass-panel overflow-hidden flex flex-col h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-maxscale-muted text-maxscale-accent">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.date}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-3">{post.title}</h2>
                  <p className="text-gray-300 mb-6 flex-grow">{post.excerpt}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                    <MaxScaleButton variant="ghost" className="text-maxscale-accent">
                      Read More
                    </MaxScaleButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <MaxScaleButton size="lg">View All Articles</MaxScaleButton>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
