import React, { useEffect } from "react";
import { DollarSign, Zap, LineChart } from "lucide-react";
import MaxScaleButton from "../ui/MaxScaleButton";
import { Link } from "react-router-dom";

const WhyAISection = () => {
  useEffect(() => {
    console.log("--- CSP Diagnostic: WhyAISection useEffect starting ---");

    // Check for existing CSP meta tags or headers
    const head = document.head;
    const existingCspMeta = document.querySelector(
      'meta[http-equiv="Content-Security-Policy"]'
    );

    // Log all existing CSP meta tags in the document
    const allMetaTags = document.querySelectorAll("meta");
    console.log(
      "All meta tags before our modifications:",
      Array.from(allMetaTags).map((tag) => ({
        httpEquiv: tag.httpEquiv,
        content: tag.content,
      }))
    );

    console.log("Existing CSP meta tag found:", existingCspMeta ? "Yes" : "No");
    if (existingCspMeta) {
      console.log(
        "Existing CSP content:",
        existingCspMeta.getAttribute("content")
      );
    }

    // Try to detect CSP from headers if possible
    if (performance && performance.getEntriesByType) {
      const resources = performance.getEntriesByType("resource");
      console.log("Resource entries that might contain CSP info:", resources);
    }

    if (!existingCspMeta) {
      console.log("Creating new CSP meta tag");
      const cspMeta = document.createElement("meta");
      cspMeta.httpEquiv = "Content-Security-Policy";
      // Updated CSP to properly allow YouTube iframes and related resources
      cspMeta.content =
        "default-src 'self'; frame-src https://www.youtube.com https://www.youtube-nocookie.com; connect-src 'self'; img-src 'self' https: data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' https://www.youtube.com https://www.youtube-nocookie.com; font-src 'self';";
      head.appendChild(cspMeta);
      console.log("New CSP meta tag added to document head");
    }

    // Update Permissions-Policy header with current supported features
    const permissionsPolicyMeta = document.querySelector(
      'meta[http-equiv="Permissions-Policy"]'
    );

    console.log(
      "Existing Permissions-Policy meta tag found:",
      permissionsPolicyMeta ? "Yes" : "No"
    );
    if (permissionsPolicyMeta) {
      console.log(
        "Existing Permissions-Policy content:",
        permissionsPolicyMeta.getAttribute("content")
      );
    }

    if (!permissionsPolicyMeta) {
      console.log("Creating new Permissions-Policy meta tag");
      const newPermissionsPolicyMeta = document.createElement("meta");
      newPermissionsPolicyMeta.httpEquiv = "Permissions-Policy";
      // Use currently supported features instead of deprecated interest-cohort
      newPermissionsPolicyMeta.content =
        "camera=(), microphone=(), geolocation=()";
      head.appendChild(newPermissionsPolicyMeta);
      console.log("New Permissions-Policy meta tag added to document head");
    }

    // Log CSP meta tags
    const updatedCspMeta = document.querySelector(
      'meta[http-equiv="Content-Security-Policy"]'
    );
    console.log(
      "Updated CSP Meta Tag:",
      updatedCspMeta?.getAttribute("content")
    );

    // Log all meta tags after our modifications
    const allMetaTagsAfter = document.querySelectorAll("meta");
    console.log(
      "All meta tags after our modifications:",
      Array.from(allMetaTagsAfter).map((tag) => ({
        httpEquiv: tag.httpEquiv,
        content: tag.content,
      }))
    );

    // Check iframe feature support
    const iframe = document.createElement("iframe");
    console.log("Supported iframe features:", {
      webShare: "share" in navigator,
      allowFullscreen: "allowFullscreen" in iframe,
      allow: "allow" in iframe,
    });

    // Test iframe loading
    const testIframeLoad = () => {
      // Record the time before looking for the iframe
      const startTime = performance.now();
      console.log("Starting testIframeLoad at:", startTime);

      // Wait for iframe to be in the DOM
      setTimeout(() => {
        const iframe = document.querySelector("iframe");
        const timeElapsed = performance.now() - startTime;
        console.log(`Looking for iframe after ${timeElapsed}ms delay`);
        console.log("Iframe found in DOM:", iframe ? "Yes" : "No");

        if (iframe) {
          console.log("Iframe src:", iframe.src);
          console.log("Iframe allow attribute:", iframe.allow);
          console.log("Iframe allowFullscreen:", iframe.allowFullscreen);

          iframe.addEventListener("load", () => {
            const loadTime = performance.now() - startTime;
            console.log(
              `YouTube iframe loaded successfully after ${loadTime}ms`
            );
          });

          iframe.addEventListener("error", (error) => {
            const errorTime = performance.now() - startTime;
            console.error(
              `YouTube iframe failed to load after ${errorTime}ms:`,
              error
            );
          });
        }
      }, 1000);
    };
    testIframeLoad();

    // Return cleanup function
    return () => {
      console.log("--- CSP Diagnostic: WhyAISection useEffect cleanup ---");
    };
  }, []);

  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Savings",
      description:
        "Businesses can cut costs significantly by automating workflows and reducing manual labor.",
      color: "from-blue-400 to-cyan-600",
    },
    {
      icon: Zap,
      title: "Efficiency Boost",
      description:
        "AI reduces manual errors and enhances productivity across all business operations.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: LineChart,
      title: "Market Demand",
      description:
        "Companies are actively seeking AI solutions to stay competitive in the digital landscape.",
      color: "from-cyan-400 to-blue-600",
    },
  ];

  return (
    <section id="why-ai" className="py-20 relative">
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>

      <div className="maxscale-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <span className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-maxscale-muted text-maxscale-accent mb-4 animate-fade-in opacity-0">
              The AI Advantage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in opacity-0 [animation-delay:200ms]">
              <span className="text-gradient">Why AI? </span>
              <span className="text-white">Why Now?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 animate-fade-in opacity-0 [animation-delay:400ms]">
              Artificial Intelligence has transformed from a futuristic concept
              to a practical business necessity. Today's AI tools offer
              unprecedented opportunities to optimize operations, reduce costs,
              and gain competitive advantages.
            </p>

            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="glass-panel p-6 animate-fade-in opacity-0"
                  style={{ animationDelay: `${600 + index * 150}ms` }}
                >
                  <div className="flex items-start">
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${benefit.color} mr-4`}
                    >
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-300">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/services">
              <MaxScaleButton className="animate-fade-in opacity-0 [animation-delay:1050ms]">
                Explore AI Solutions
              </MaxScaleButton>
            </Link>
          </div>

          <div className="lg:w-1/2 animate-fade-in opacity-0 [animation-delay:600ms]">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent-gradient rounded-2xl opacity-20 blur-xl animate-pulse-slow"></div>
              <div className="glass-panel p-6 relative">


                <h3 className="text-2xl font-bold mb-4 text-white">
                  See AI in Action
                </h3>
                <p className="text-gray-300 mb-6">
                  Watch how our AI solutions transform business operations and
                  drive measurable results for companies of all sizes. From
                  startups to enterprises, AI is changing the game.
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "AI Automation",
                    "Process Efficiency",
                    "Cost Reduction",
                    "ROI",
                  ].map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-maxscale-muted text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAISection;
