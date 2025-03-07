
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MaxScaleButton from '@/components/ui/MaxScaleButton';

const BlogPost = () => {
  const { id } = useParams();
  
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  // This would normally come from an API or data store
  const getBlogPost = (postId: string) => {
    const allBlogPosts = [
      {
        id: "ai-customer-service",
        title: "How AI is Transforming Customer Service in 2023",
        excerpt: "Discover how artificial intelligence is revolutionizing customer service with faster response times, personalized interactions, and reduced operational costs.",
        date: "October 15, 2023",
        category: "AI Trends",
        image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?fit=crop&w=800&h=500",
        readTime: "5 min read",
        content: `
          <p class="mb-4">Artificial intelligence has become a game-changer in customer service, transforming how businesses interact with their customers. In 2023, we're seeing unprecedented adoption of AI-powered solutions across industries of all sizes.</p>
          
          <h2 class="text-2xl font-bold mb-4 mt-8">The Rise of AI Chatbots</h2>
          <p class="mb-4">Modern AI chatbots can handle complex customer queries with a level of sophistication that was unimaginable just a few years ago. Using natural language processing (NLP) and machine learning, these systems can understand context, detect sentiment, and provide personalized responses that closely mimic human interactions.</p>
          <p class="mb-4">The benefits are substantial:</p>
          <ul class="list-disc list-inside mb-4 ml-4">
            <li class="mb-2">24/7 availability without staffing concerns</li>
            <li class="mb-2">Consistent quality in customer interactions</li>
            <li class="mb-2">Ability to handle thousands of simultaneous conversations</li>
            <li class="mb-2">Significant cost reduction compared to traditional call centers</li>
          </ul>
          
          <h2 class="text-2xl font-bold mb-4 mt-8">Personalization at Scale</h2>
          <p class="mb-4">AI enables businesses to deliver personalized customer experiences at a scale that would be impossible with human agents alone. By analyzing customer data and past interactions, AI systems can tailor responses, recommend products, and anticipate needs before customers even express them.</p>
          <p class="mb-4">This level of personalization was once the exclusive domain of luxury brands with dedicated account managers. Now, even small businesses can provide highly personalized service to every customer.</p>
          
          <h2 class="text-2xl font-bold mb-4 mt-8">Predictive Customer Service</h2>
          <p class="mb-4">Perhaps the most revolutionary aspect of AI in customer service is the shift from reactive to predictive support. Advanced AI systems can now:</p>
          <ul class="list-disc list-inside mb-4 ml-4">
            <li class="mb-2">Identify potential issues before they impact customers</li>
            <li class="mb-2">Proactively reach out with solutions</li>
            <li class="mb-2">Detect patterns that indicate customer dissatisfaction</li>
            <li class="mb-2">Recommend interventions before customers consider leaving</li>
          </ul>
          
          <h2 class="text-2xl font-bold mb-4 mt-8">Implementation Challenges</h2>
          <p class="mb-4">Despite the clear benefits, implementing AI customer service solutions comes with challenges. Organizations must navigate concerns about data privacy, potential biases in AI systems, and the need to maintain a human touch in customer interactions.</p>
          <p class="mb-4">Successful implementations typically take a hybrid approach, using AI to handle routine queries while routing complex or sensitive issues to human agents.</p>
          
          <h2 class="text-2xl font-bold mb-4 mt-8">The Future of AI in Customer Service</h2>
          <p class="mb-4">Looking ahead, we can expect AI customer service solutions to become even more sophisticated, with improvements in emotional intelligence, multilingual support, and omnichannel integration.</p>
          <p class="mb-4">The businesses that embrace these technologies today will be well-positioned to meet the increasingly high expectations of tomorrow's customers.</p>
        `
      },
      {
        id: "small-business-ai",
        title: "5 Ways to Implement AI in Your Small Business",
        excerpt: "Small businesses can leverage AI too! Learn about affordable, easy-to-implement AI solutions that can help your small business compete with larger enterprises.",
        date: "September 28, 2023",
        category: "Small Business",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?fit=crop&w=800&h=500",
        readTime: "7 min read",
        content: `
          <p class="mb-4">Artificial intelligence isn't just for tech giants and enterprise corporations. Small businesses can harness the power of AI to streamline operations, enhance customer experiences, and gain competitive advantages—often without massive investments.</p>
          
          <h2 class="text-2xl font-bold mb-4 mt-8">1. Customer Service Automation</h2>
          <p class="mb-4">Small businesses often struggle with providing responsive customer service around the clock. AI-powered chatbots offer an affordable solution that can:</p>
          <ul class="list-disc list-inside mb-4 ml-4">
            <li class="mb-2">Answer common questions instantly</li>
            <li class="mb-2">Qualify leads before routing to sales staff</li>
            <li class="mb-2">Book appointments without human intervention</li>
            <li class="mb-2">Collect valuable customer feedback</li>
          </ul>
          <p class="mb-4">Platforms like Intercom, Drift, and even Facebook Messenger bots provide small business-friendly solutions that can be implemented with minimal technical expertise.</p>
          
          <h2 class="text-2xl font-bold mb-4 mt-8">2. Marketing Optimization</h2>
          <p class="mb-4">AI marketing tools can help small businesses compete with larger competitors by optimizing:</p>
          <ul class="list-disc list-inside mb-4 ml-4">
            <li class="mb-2">Email campaign timing and content</li>
            <li class="mb-2">Social media posting schedules</li>
            <li class="mb-2">Ad targeting and budget allocation</li>
            <li class="mb-2">Content recommendations for specific audience segments</li>
          </ul>
          <p class="mb-4">Tools like Mailchimp, HubSpot, and Hootsuite now incorporate AI features that were once available only to enterprises with large marketing departments.</p>
          
          <h2 class="text-2xl font-bold mb-4 mt-8">3. Inventory and Supply Chain Management</h2>
          <p class="mb-4">For small retailers and manufacturers, inventory management is critical. AI-powered systems can:</p>
          <ul class="list-disc list-inside mb-4 ml-4">
            <li class="mb-2">Predict seasonal demand fluctuations</li>
            <li class="mb-2">Automate reordering at optimal times</li>
            <li class="mb-2">Identify slow-moving stock</li>
            <li class="mb-2">Optimize pricing based on market conditions</li>
          </ul>
          <p class="mb-4">Even simple implementations can reduce carrying costs by 10-30% while preventing stockouts that frustrate customers.</p>
          
          <h2 class="text-2xl font-bold mb-4 mt-8">4. Administrative Task Automation</h2>
          <p class="mb-4">Small business owners and employees often wear multiple hats. AI tools can free up valuable time by automating:</p>
          <ul class="list-disc list-inside mb-4 ml-4">
            <li class="mb-2">Appointment scheduling and reminders</li>
            <li class="mb-2">Basic bookkeeping and expense categorization</li>
            <li class="mb-2">Document processing and data extraction</li>
            <li class="mb-2">Meeting transcription and summary creation</li>
          </ul>
          <p class="mb-4">Tools like Calendly, QuickBooks, and Otter.ai provide AI capabilities that can save hours of administrative work each week.</p>
          
          <h2 class="text-2xl font-bold mb-4 mt-8">5. Talent Recruitment and Management</h2>
          <p class="mb-4">Finding and retaining talent is a significant challenge for small businesses. AI-powered HR tools can help by:</p>
          <ul class="list-disc list-inside mb-4 ml-4">
            <li class="mb-2">Screening résumés to identify promising candidates</li>
            <li class="mb-2">Providing insights on competitive compensation</li>
            <li class="mb-2">Identifying employees at risk of leaving</li>
            <li class="mb-2">Suggesting personalized development opportunities</li>
          </ul>
          <p class="mb-4">Platforms like LinkedIn Recruiter and Bamboo HR are incorporating AI features accessible to businesses of all sizes.</p>
          
          <h2 class="text-2xl font-bold mb-4 mt-8">Getting Started with AI</h2>
          <p class="mb-4">The key to successful AI implementation for small businesses is starting small with focused applications that address specific pain points. Begin with a single use case where AI can deliver clear ROI, then expand as you gain experience and confidence with the technology.</p>
          <p class="mb-4">Remember that AI implementation doesn't have to be an all-or-nothing proposition. Even modest applications can deliver significant benefits to small businesses ready to embrace the future of work.</p>
        `
      },
      // Additional blog posts with content
      {
        id: "ai-roi",
        title: "The ROI of AI: Measuring Business Impact",
        excerpt: "Calculating return on investment for AI implementations can be challenging. This article breaks down how to properly measure and evaluate the business impact of your AI solutions.",
        date: "September 15, 2023",
        category: "Business Analytics",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=800&h=500",
        readTime: "9 min read",
        content: `<p class="mb-4">Calculating the ROI of AI implementations requires careful consideration of both tangible and intangible benefits. This article provides a comprehensive framework for measuring the business impact of your AI investments.</p><h2 class="text-2xl font-bold mb-4 mt-8">Understanding AI ROI Challenges</h2><p class="mb-4">Unlike traditional IT investments, AI projects often deliver value that extends beyond direct cost savings...</p>`
      },
      {
        id: "ai-ethics",
        title: "AI Ethics: Navigating the Responsible Use of AI",
        excerpt: "As AI becomes more prevalent in business, ethical considerations are increasingly important. Learn how to implement AI responsibly in your organization.",
        date: "August 30, 2023",
        category: "AI Ethics",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?fit=crop&w=800&h=500",
        readTime: "6 min read",
        content: `<p class="mb-4">As AI systems become more integrated into business operations, ethical considerations are no longer optional but essential to responsible implementation.</p><h2 class="text-2xl font-bold mb-4 mt-8">The Ethical Dimensions of AI</h2><p class="mb-4">AI ethics encompasses several key areas including privacy, transparency, fairness, and accountability...</p>`
      }
    ];
    
    return allBlogPosts.find(post => post.id === postId) || allBlogPosts[0];
  };
  
  const post = getBlogPost(id || '');
  
  return (
    <div className="min-h-screen flex flex-col bg-maxscale-dark">
      <Navbar />
      <main className="flex-grow pt-24">
        <article className="maxscale-container py-16">
          <div className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <div className="rounded-lg overflow-hidden mb-8 h-96">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Post Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-maxscale-muted text-maxscale-accent">
                  {post.category}
                </span>
                <span className="text-gray-400">{post.date}</span>
                <span className="text-gray-400">·</span>
                <span className="text-gray-400">{post.readTime}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-300">
                {post.excerpt}
              </p>
            </div>
            
            {/* Post Content */}
            <div 
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
            
            {/* Post Footer */}
            <div className="mt-12 pt-8 border-t border-maxscale-muted flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <Link to="/blog" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <MaxScaleButton variant="outline">
                    ← Back to All Posts
                  </MaxScaleButton>
                </Link>
              </div>
              
              <div className="flex space-x-4">
                <MaxScaleButton variant="ghost" size="sm">Share</MaxScaleButton>
                <MaxScaleButton variant="ghost" size="sm">Save</MaxScaleButton>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
