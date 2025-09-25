"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Brain,
  Zap,
  Target,
  Users,
  TrendingUp,
  ArrowRight,
  Bot,
  Cpu,
  Lightbulb,
  Rocket,
  Globe,
  Baseline as ChartSpline,
  ChartLine,
} from "lucide-react";

import Link from "next/link";
import Header from "@/components/header";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

export default function AISolutions() {
  const solutions = [
    {
      icon: <Bot className="h-8 w-8 text-green-500" />,
      title: "AI-Powered Applications",
      description:
        "Context-aware chatbots and intelligent assistants trained on your data, powered by LLMs and built for impact.",
    },
    {
      icon: <Brain className="h-8 w-8 text-red-500" />,
      title: "AI Automation",
      description:
        "Automation tools that reduce repetitive work, boost speed, and help your teams focus on what matters most.",
    },
    {
      icon: <ChartLine className="h-8 w-8 text-yellow-500" />,
      title: "AI Data Analytics",
      description:
        "Turn messy data into smart decisions with cleanup, deduplication, and predictive analytics.",
    },
  ];

  const partners = [
    {
      id: "gsma",
      title: "GSMA",
      logo: "https://assets.rumsan.net/rahat/gsma-rahat-funder.png",
    },
    {
      id: "crescent",
      title: "Crescent Enterprises",
      logo: "https://assets.rumsan.net/rumsan-group/cresent-enterprises-award.png",
    },
    {
      id: "stellar",
      title: "Stellar",
      logo: "https://assets.rumsan.net/rumsan-group/stellar-logo.png",
    },
    {
      id: "circle",
      title: "Circle Impact",
      logo: "https://assets.rumsan.net/rumsan-group/circle-rahat-partner.png",
    },
    {
      id: "gsr",
      title: "GSR Foundation",
      logo: "https://assets.rumsan.net/rumsan-group/partners-gsr-foundation.png",
    },
    {
      id: "google",
      title: "Google Startups for Sustainable Development",
      logo: "https://assets.rumsan.net/rumsan-group/partners-google-startup-png.png",
    },
    {
      id: "red-cross",
      title: "Danish Red Cross",
      logo: "https://assets.rumsan.net/rumsan-group/danish-redcross-logo-removebg-preview.png",
    },
    {
      id: "mercy-corps",
      title: "Mercy Corps",
      logo: "https://assets.rumsan.net/rahat/mercy-corps-partners-rahat.png",
    },
    {
      id: "unicef",
      title: "UNICEF",
      logo: "https://rumsan.nyc3.cdn.digitaloceanspaces.com/esatya/unicef-fec-final.jpg",
    },
    {
      id: "villagecapital",
      title: "Village Capital",
      logo: "https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/village-capital-collab-logo.png",
    },
    {
      id: "mit-solve",
      title: "MIT Solve",
      logo: "https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/mit-solve-logo-home-page.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C7F7FF]/20 via-background to-[#3EC4EE]/20 dark:from-[#253E93]/20 dark:via-background dark:to-[#3EC4EE]/20" />

        <Card className="absolute inset-0 !bg-transparent overflow-hidden !border-none backdrop-blur-sm">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            // fill="white"
          />

          <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
            <div className="flex flex-col lg:flex-row h-full min-h-[600px] w-full">
              {/* Left content */}
              <div className="flex-1 p-8 lg:p-12 relative z-10 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Zap className="h-4 w-4" />
                    AI-Powered Innovation
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#C7F7FF] via-[#3EC4EE] to-[#253E93] bg-clip-text text-transparent">
                    Building Frontier AI Tools for Social Good{" "}
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
                    We develop intelligent solutions that empower organizations
                    in humanitarian aid, education, finance, and governance to
                    create meaningful impact at scale.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-[#3EC4EE] to-[#253E93] hover:from-[#C7F7FF] hover:to-[#3EC4EE]"
                    >
                      Explore Our Services
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                    {/* <Button size="lg" variant="outline">
                      Schedule Demo
                    </Button> */}
                  </div>
                </motion.div>
              </div>

              {/* Right content */}
              <motion.div
                className="flex-1 relative min-h-[400px] lg:min-h-[600px]"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </Card>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight"
              >
                What we do
              </motion.h1>
            </div>{" "}
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three core services designed to amplify your organization's impact
              through intelligent automation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="bg-background rounded-2xl border border-border p-8 hover:shadow-xl transition-all duration-300 group cursor-pointer h-full flex flex-col"
              >
                <div className="flex-1 text-center flex flex-col">
                  <motion.div
                    className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-muted/80 transition-colors duration-300"
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    {solution.icon}
                  </motion.div>
                  <h3 className="font-heading text-xl font-bold mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-1">
                    {solution.description}
                  </p>
                </div>
                <div className="flex justify-center mt-auto">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-[#3EC4EE] to-[#253E93] hover:from-[#C7F7FF] hover:to-[#3EC4EE] transition-all duration-300"
                    >
                      Explore
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 4, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold mb-4">
              Trusted by Change-Makers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Partnering with leading organizations to create meaningful impact
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <InfiniteSlider
              gap={40}
              duration={30}
              durationOnHover={50}
              className="py-8"
            >
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="flex items-center justify-center p-6 bg-background rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer min-w-[200px] h-[150px]"
                >
                  <img
                    src={partner.logo}
                    alt={partner.title}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
              ))}
            </InfiniteSlider>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mt-12"
          >
            <p className="text-sm text-muted-foreground">
              Join these innovative organizations in transforming the future
              with AI
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      {/* <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI solutions span across various industries, delivering
              transformative results for businesses of all sizes.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300 flex items-start gap-4"
              >
                <div className="flex-shrink-0">{industry.icon}</div>
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Process Section */}
      {/* <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold mb-4">
              Our AI Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to delivering robust, scalable, and ethical
              AI solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description:
                  "Understanding your business challenges and identifying AI opportunities",
              },
              {
                step: "02",
                title: "Data Preparation",
                description:
                  "Collecting, cleaning, and structuring data for optimal AI model performance",
              },
              {
                step: "03",
                title: "Model Development",
                description:
                  "Building and training custom AI models tailored to your specific requirements",
              },
              {
                step: "04",
                title: "Deployment & Support",
                description:
                  "Implementing solutions and providing ongoing maintenance and optimization",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-background p-6 rounded-2xl border border-border"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#3EC4EE] to-[#253E93] rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                  {process.step}
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">
                  {process.title}
                </h3>
                <p className="text-muted-foreground">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-primary/5">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready to Build AI Solutions That Make a Difference?{" "}
            </h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              Let's collaborate to create AI solutions that truly impact
              communities and drive positive change.
            </p>
            <div className="flex justify-center mt-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-[#3EC4EE] to-[#253E93] hover:from-[#C7F7FF] hover:to-[#3EC4EE] transition-all duration-300"
                  >
                    Schedule a Demo
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
