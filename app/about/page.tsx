"use client";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Lightbulb,
  Heart,
  Globe,
  Award,
  ChevronLeft,
  ChevronRight,
  Linkedin,
} from "lucide-react";
import Header from "@/components/header";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      id: 1,
      image: "https://assets.rumsan.net/rumsan-group/rumee-singh-exec-team.jpg",
      name: "Rumee Singh",
      title: "CEO and Co-Founder",
      linkedin: "https://www.linkedin.com/in/rumee-singh-6713339/",
    },
    {
      id: 2,
      image:
        "https://assets.rumsan.net/rumsan-group/santosh-shrestha-exec-team.jpg",
      name: "Santosh Shrestha",
      title: "CTO and Co-Founder",
      linkedin: "https://www.linkedin.com/in/rumsan/",
    },
    {
      id: 3,
      image:
        "https://assets.rumsan.net/rumsan-group/ruchin-singh-exec-team.jpg",
      name: "Ruchin Singh ",
      title: "COO and Co-founder",
      linkedin: "https://www.linkedin.com/in/ruchinsingh/",
    },
    {
      id: 4,
      image:
        "https://assets.rumsan.net/rumsan-group/shristi-piya-exec-team.jpg",
      name: "Shristi Piya",
      title: "Chief Development Officer",
      linkedin: "https://www.linkedin.com/in/shristi-piya-27052210a/",
    },
    {
      id: 5,
      image:
        "https://assets.rumsan.net/rumsan-group/raktim-shrestha-exec-team.jpg",
      name: "Raktim Shrestha",
      title: " Chief Solutions Architect",
      linkedin: "https://www.linkedin.com/in/raktim-shrestha-63a780109/",
    },
    {
      id: 6,
      image:
        "https://assets.rumsan.net/rumsan-group/manjik-shrestha-exce-team.jpg",
      name: "Manjik Shrestha",
      title: "Chief Blockchain Officer",
      linkedin: "https://www.linkedin.com/in/manjik/",
    },
    {
      id: 7,
      image: "https://assets.rumsan.net/rumsan-group/raman-k.c.-exec-team.jpg",
      name: "Raman K.C.",
      title: "Chief Finance Officer",
      linkedin: "https://www.linkedin.com/in/raman-kc/",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(teamMembers.length / 3));
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, [teamMembers.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(teamMembers.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(teamMembers.length / 3)) %
        Math.ceil(teamMembers.length / 3)
    );
  };

  const getVisibleMembers = () => {
    const membersPerSlide = 3;
    const startIndex = currentSlide * membersPerSlide;
    return teamMembers.slice(startIndex, startIndex + membersPerSlide);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://assets.rumsan.net/rahat/17973908.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-white/60" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-5xl md:text-7xl font-bold mb-6 text-balance text-black"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-black/80 mb-8 leading-relaxed"
            >
              We are a digital innovation firm dedicated to empowering
              businesses committed to creating impactful solutions for society.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
                  Who We Are
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                  Empowering Digital{" "}
                  <span className="bg-gradient-to-l from-[#253E93] via-[#3EC4EE] to-[#C7F7FF] bg-clip-text text-transparent">
                    Innovation
                  </span>
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-relaxed mb-12">
                <p className="text-muted-foreground">
                  We are a digital innovation firm dedicated to empowering
                  businesses committed to creating impactful solutions for
                  society. Our mission is to revolutionize the potential of
                  frontier technology to build resilient communities.
                </p>
              </div>

              <div className="relative">
                {/* Mission Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ y: -8, rotateY: 5 }}
                  className="relative mb-8 group perspective-1000"
                >
                  <div className="absolute inset-0 bg-gradient-to-l from-[#253E93]/20 via-[#3EC4EE]/20 to-[#C7F7FF]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gradient-to-l from-[#253E93]/50 via-[#3EC4EE]/50 to-[#C7F7FF]/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-start gap-6">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold text-2xl">
                            1
                          </span>
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                          Our Mission
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          To revolutionize the potential of frontier technology
                          to build resilient communities and empower vulnerable
                          populations through innovative digital solutions.
                        </p>
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-100/50 to-cyan-100/50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-full blur-2xl"></div>
                  </div>
                </motion.div>

                {/* Vision Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30, rotateX: 15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ y: -8, rotateY: -5 }}
                  className="relative group perspective-1000"
                >
                  <div className="absolute inset-0 bg-gradient-to-l from-[#253E93]/20 via-[#3EC4EE]/20 to-[#C7F7FF]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gradient-to-l from-[#253E93]/50 via-[#3EC4EE]/50 to-[#C7F7FF]/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-start gap-6">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold text-2xl">
                            2
                          </span>
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-400 rounded-full animate-pulse"></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                          Our Vision
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          A world where technology serves humanity's greatest
                          challenges, creating transparent, decentralized
                          solutions that empower the last billion people on
                          Earth.
                        </p>
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-100/50 to-pink-100/50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-2xl"></div>
                  </div>
                </motion.div>

                {/* Connecting line animation */}
                <div className="absolute left-8 top-1/2 w-0.5 h-16 bg-gradient-to-b from-blue-400 to-purple-400 opacity-30"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                {/* Organic background shapes */}
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-2xl opacity-60"></div>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-xl opacity-60"></div>

                <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-2 shadow-2xl">
                  <img
                    src="https://assets.rumsan.net/rahat/m1qcktwlld7659virbq.jpg"
                    alt="Team collaboration"
                    className="w-full h-98 object-cover rounded-2xl"
                  />

                  {/* Floating stats cards */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-border"
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        10+
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Years Building
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-border"
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        109K+
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Lives Impacted
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive approach to digital transformation and social
              impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Rahat */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="font-bold text-xl">1</span>
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">
                  Rahat: Financial Access for the Vulnerable
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Through our flagship solution, Rahat, we envision to support
                  vulnerable communities and build resilience against the impact
                  of climate shocks. By providing decentralized and transparent
                  financial access, Rahat is dedicated to supporting the last
                  billion.
                </p>
              </div>
            </motion.div>

            {/* Blockchain Community */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group"
            >
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="font-bold text-xl">2</span>
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">
                  Blockchain Community Building
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We are at the forefront of blockchain education and awareness.
                  From meetups and 101 sessions to fellowship sessions, we
                  actively cultivate a community that understands and harnesses
                  the potential of blockchain technology.
                </p>
              </div>
            </motion.div>

            {/* Supporting Organizations */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group"
            >
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="font-bold text-xl">3</span>
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">
                  Supporting Impact Organizations
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  As a blockchain-centric organization, we take pride in more
                  than just technology; we prioritize making a positive social
                  impact. We support impact-focused organizations through their
                  web 3 transformation journey.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section - Clean Slideshow */}
      <section className="py-20 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              className="font-heading text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              OUR TEAM
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              The passionate innovators driving technology for social impact
            </motion.p>
          </motion.div>

          {/* Slideshow Container */}
          <div className="relative max-w-7xl mx-auto">
            {/* Navigation Buttons */}
            <motion.button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-slate-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#C7F7FF]/50 hover:bg-[#C7F7FF]/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="h-5 w-5 text-gray-700 dark:text-gray-200" />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-slate-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#C7F7FF]/50 hover:bg-[#C7F7FF]/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="h-5 w-5 text-gray-700 dark:text-gray-200" />
            </motion.button>

            {/* Team Cards Slideshow */}
            <div className="relative overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 300, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -300, scale: 0.8 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.23, 1, 0.32, 1],
                    scale: { duration: 0.6 },
                  }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8"
                >
                  {getVisibleMembers().map((member, index) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 50, rotateY: -30 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        rotateY: 0,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.2,
                        ease: [0.23, 1, 0.32, 1],
                      }}
                      className="group perspective-1000"
                      whileHover={{ y: -10, scale: 1.02 }}
                    >
                      <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#C7F7FF]/30 dark:border-slate-700 hover:border-[#C7F7FF]/60">
                        <div className="p-6">
                          {/* Profile Image - Perfect Circle Fit! */}
                          <div className="relative mb-8 mx-auto w-72 h-72">
                            <img
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              className="w-full h-full object-cover object-center rounded-full border-8 border-[#C7F7FF]/50 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                              style={{
                                aspectRatio: "1/1",
                                objectPosition: "center center",
                              }}
                            />
                          </div>{" "}
                          {/* Content */}
                          <div className="text-center space-y-4">
                            <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white">
                              {member.name}
                            </h3>

                            <p className="text-muted-foreground text-sm">
                              {member.title}
                            </p>

                            {/* LinkedIn Button - Simple Design */}
                            <motion.a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-[#C7F7FF] hover:bg-[#C7F7FF]/80 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300"
                              whileHover={{ y: -1 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Linkedin className="h-4 w-4" />
                              Connect
                            </motion.a>
                          </div>
                          {/* Decorative elements */}
                          <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                          <div className="absolute bottom-4 left-4 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {Array.from({ length: Math.ceil(teamMembers.length / 3) }).map(
                (_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "bg-[#C7F7FF] shadow-md scale-125 border-2 border-gray-400"
                        : "bg-gray-300 dark:bg-gray-600 hover:bg-[#C7F7FF]/50"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                )
              )}
            </div>

            {/* Progress Bar */}
            <div className="mt-6 mx-auto max-w-md">
              <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#C7F7FF]"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${
                      ((currentSlide + 1) / Math.ceil(teamMembers.length / 3)) *
                      100
                    }%`,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              OUR PRODUCTS
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Innovative solutions that transform communities and create lasting
              impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Rahat Product */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border h-full flex flex-col">
                <div className="mb-6 h-20 flex items-center justify-center">
                  <img
                    src="https://assets.rumsan.net/rumsan-group/rahat-logo-standard.png"
                    alt="Rahat logo"
                    className="h-11 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    An open-source blockchain-based financial access platform
                    which monitors the flow of transactions in token
                    distribution projects.
                  </p>
                  <div className="flex justify-center mt-auto">
                    <Button
                      variant="outline"
                      className="inline-flex items-center gap-1 bg-[#C7F7FF] hover:bg-[#C7F7FF]/80 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-medium shadow-sm hover:shadow-md transition-all duration-300"
                      onClick={() => window.open("https://rahat.io", "_blank")}
                    >
                      Visit site
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* eSatya Product */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group"
            >
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border h-full flex flex-col">
                <div className="mb-6 h-20 flex items-center justify-center">
                  <img
                    src="https://assets.rumsan.net/rumsan-group/esatya-main-banner-01.png"
                    alt="eSatya logo"
                    className="h-16 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    A blockchain initiative which has been at the forefront of
                    promoting awareness and education about the technology in
                    Nepal.
                  </p>
                  <div className="flex justify-center mt-auto">
                    <Button
                      variant="outline"
                      className="inline-flex items-center gap-1 bg-[#C7F7FF] hover:bg-[#C7F7FF]/80 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-medium shadow-sm hover:shadow-md transition-all duration-300"
                      onClick={() => window.open("https://esatya.io", "_blank")}
                    >
                      Visit site
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hamro LifeBank Product */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group"
            >
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border h-full flex flex-col">
                <div className="mb-6 h-20 flex items-center justify-center">
                  <img
                    src="https://assets.rumsan.net/rumsan-group/hlb-blk-rumsan.png"
                    alt="Hamro LifeBank logo"
                    className="max-h-full w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    A social initiative which is taking a data-centric approach
                    for a smart, transparent and holistic blood management
                    service from collection to supply.
                  </p>
                  <div className="flex justify-center mt-auto">
                    <Button
                      variant="outline"
                      className="inline-flex items-center gap-1 bg-[#C7F7FF] hover:bg-[#C7F7FF]/80 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-medium shadow-sm hover:shadow-md transition-all duration-300"
                      onClick={() =>
                        window.open("https://hamrolifebank.com", "_blank")
                      }
                    >
                      Visit site
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
