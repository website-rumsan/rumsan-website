"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  Brain,
  Database,
  Zap,
  Menu,
  X,
  Award,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Facebook,
  Twitter,
} from "lucide-react"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dotted-dialog"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function RumsanLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const isVerySmall = useMediaQuery("(max-width: 500px)")

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const headerClass =
    scrollY > 50 ? "py-4 bg-background/80 backdrop-blur-md border-b border-border" : "py-6 bg-transparent"

  const heroSlides = [
    {
      headline: "AI That Thinks, Learns & Solves—For Real-World Impact",
      description:
        "We develop domain-specific AI solutions powered by Large Language Models (LLMs) and Generative AI to tackle complex challenges across diverse industries.",
      buttonText: "Talk to our AI Team",
    },
    {
      headline: "Making Data Actionable Through Cleanup & Visualization",
      description:
        "Transform raw, messy data into crystal-clear insights that drive meaningful social impact. Our AI-powered platform cleans, visualizes, and predicts to help organizations make data-driven decisions that matter.",
      buttonText: "Unlock the Power of Your Data",
    },
    {
      headline: "AI Automation: Reducing Manual Work, Enhancing Efficiency",
      description:
        "Rumsan AI streamlines processes like document handling, approvals, and HR workflows with scalable, secure automation that integrates seamlessly with your existing tools.",
      buttonText: "Let AI Handle the Grunt Work",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">R</span>
            </div>
            <span className="font-heading font-bold text-xl">Rumsan</span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { name: "About Us", href: "#about" },
              { name: "Portfolio", href: "#portfolio" },
              { name: "Career", href: "#career" },
              { name: "Services", href: "#services" },
              { name: "Contact Us", href: "#contact" },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button
              className="hidden md:flex bg-secondary text-secondary-foreground hover:bg-secondary/90"
              onClick={() => setIsModalOpen(true)}
            >
              Book AI Consultation
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-background border-b border-border md:hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
              {[
                { name: "About Us", href: "#about" },
                { name: "Portfolio", href: "#portfolio" },
                { name: "Career", href: "#career" },
                { name: "Services", href: "#services" },
                { name: "Contact Us", href: "#contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full"
                onClick={() => {
                  setIsMenuOpen(false)
                  setIsModalOpen(true)
                }}
              >
                Book AI Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background" />
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/5 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h1
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight"
            >
              {heroSlides[currentSlide].headline}
            </motion.h1>
            <motion.p
              key={`desc-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto text-pretty"
            >
              {heroSlides[currentSlide].description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 sm:px-8 py-4 sm:py-6 rounded-full text-sm sm:text-lg font-medium shadow-lg transition-all duration-300"
              >
                {heroSlides[currentSlide].buttonText}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </motion.div>

            {/* Slide indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="services" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">What We Do</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Three core services designed to amplify your organization's impact through intelligent automation
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Brain className="h-12 w-12 text-primary" />,
                title: "AI-Powered Applications",
                description:
                  "Context-aware chatbots and intelligent assistants trained on your data, powered by LLMs and built for impact.",
                features: [
                  "Natural Language Processing",
                  "Multi-lingual Support",
                  "Real-time Search",
                  "Semantic Understanding",
                ],
              },
              {
                icon: <Zap className="h-12 w-12 text-secondary" />,
                title: "AI Automation",
                description:
                  "Automation tools that reduce repetitive work, boost speed, and help your teams focus on what matters most.",
                features: [
                  "Document Processing",
                  "Workflow Automation",
                  "Human-in-the-Loop",
                  "Third-party Integration",
                ],
              },
              {
                icon: <Database className="h-12 w-12 text-accent" />,
                title: "AI Data Analytics",
                description:
                  "Turn messy data into smart decisions with cleanup, deduplication, and predictive analytics.",
                features: ["Interactive Dashboards", "Data Cleaning", "Duplicate Detection", "Predictive Analytics"],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-full bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors">
                  <div className="mb-6 p-3 bg-muted/30 rounded-lg inline-block">{service.icon}</div>
                  <h3 className="font-heading text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Web & Mobile Development",
                description: "Responsive, user-centric platforms using React, Angular, React Native, and Ionic",
              },
              {
                title: "Web3 & Blockchain Development",
                description: "Decentralized applications, smart contracts, and token-based systems",
              },
              {
                title: "Innovation & Tech Consulting",
                description: "Technology roadmapping, system architecture design, and digital strategy",
              },
              {
                title: "Staff Augmentation",
                description: "Access to skilled developers on dedicated or flexible basis",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/30 transition-colors h-full">
                  <h4 className="font-heading font-semibold mb-3 text-sm">{service.title}</h4>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Impact Section */}
      <section id="portfolio" className="py-24 relative overflow-hidden bg-muted/20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Real-World Impact</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                See how our AI solutions are making a difference across various sectors
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "EdTech Assistant",
                description:
                  "AI-powered educational assistant for low-bandwidth schools, providing personalized learning support.",
                impact: "Deployed in 50+ schools",
                category: "Education",
              },
              {
                title: "Document AI for KYC",
                description: "Automated document processing for onboarding and KYC compliance.",
                impact: "80% reduction in processing time",
                category: "Finance",
              },
              {
                title: "HR Policy Automation",
                description: "Extracts key information from HR documents and sends automated Slack updates.",
                impact: "95% accuracy rate",
                category: "HR & Operations",
              },
              {
                title: "Impact Dashboard",
                description: "Real-time tracking and visualization of humanitarian aid distribution.",
                impact: "Measuring reach across communities",
                category: "Humanitarian",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors h-full">
                  <div className="mb-4">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="text-secondary font-semibold text-sm">{project.impact}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Our Flagship Products</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Innovative solutions that empower communities and transform industries
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Rahat */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-card p-8 rounded-xl border border-border">
                <h3 className="font-heading text-2xl font-bold mb-4">Rahat</h3>
                <p className="text-muted-foreground mb-6">
                  Blockchain-powered financial access platform for vulnerable populations, offering immediate financial
                  aid, resiliency tools (micro-insurance, loans, savings), and financial literacy programs.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Immediate Financial Aid",
                    "Parametric Micro Insurance",
                    "Micro Loans & Savings",
                    "Financial Literacy Programs",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Learn More</Button>
                  <Button variant="outline">Visit rahat.io</Button>
                </div>
              </div>
            </motion.div>

            {/* AgriClear */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-card p-8 rounded-xl border border-border">
                <h3 className="font-heading text-2xl font-bold mb-4">AgriClear</h3>
                <p className="text-muted-foreground mb-6">
                  Decentralized supply chain tracking platform for agricultural products, providing end-to-end
                  traceability, tamper-proof data, and counterfeit prevention via QR codes.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "End-to-End Traceability",
                    "Tamper-Proof Data",
                    "Counterfeit Prevention",
                    "Supply Chain Efficiency",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Learn More</Button>
                  <Button variant="outline">Visit agriclear.io</Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden bg-muted/20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">About Rumsan</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Rumsan is a digital innovation company with expertise in frontier technology such as Blockchain, AI and
                FinTech. We offer digital solutions for various sectors including agriculture, education, finance,
                humanitarian and development sectors.
              </p>
              <p className="text-muted-foreground mb-8 text-lg">
                With more than ten years in business, we have provided customized solutions and consultation work for
                private and public clients globally. We support businesses that are focused on building solutions that
                bring societal impact.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">55+</div>
                  <div className="text-sm text-muted-foreground">
                    Team Members
                    <br />
                    (50% Female Staff)
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">70+</div>
                  <div className="text-sm text-muted-foreground">
                    Clients Served
                    <br />
                    Globally
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">
                    Years in
                    <br />
                    Business
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">8</div>
                  <div className="text-sm text-muted-foreground">
                    Countries
                    <br />
                    Served
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-card p-8 rounded-xl border border-border">
                <h3 className="font-heading text-xl font-bold mb-6">Awards & Recognition</h3>
                <div className="space-y-4">
                  {[
                    "UNICEF Innovation Fund equity-free investment",
                    "MIT SOLVE official solver & community award",
                    "GSMA Innovation Fund grant",
                    "Stellar Community Fund Build Award ($150K)",
                    "Circle's Unlocking Impact grand prize",
                    "Agritech Challenge Winner (UNCDF)",
                    "Crescent Enterprises COP28 award",
                  ].map((award, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{award}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted by Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Trusted by Change-Makers</h2>
            <p className="text-muted-foreground mb-8">
              Partnering with leading organizations to create meaningful impact
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {["UNICEF", "MIT", "GSMA", "Mercy Corps", "OneSight", "CARE Nepal"].map((org, index) => (
                <div key={index} className="text-lg font-semibold">
                  {org}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
                Ready to Build AI Solutions That Make a Difference?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Let's collaborate to create AI solutions that truly impact communities and drive positive change.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-card p-8 rounded-xl border border-border">
                  <h3 className="font-heading text-2xl font-bold mb-6">Get in Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Nepal Office</div>
                        <div className="text-muted-foreground text-sm">283 Bhiunti Marg Jhamsikhel, Lalitpur</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">USA Office</div>
                        <div className="text-muted-foreground text-sm">24 Parkview Rd Randolph, NJ 07869</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-semibold">team@rumsan.com</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-semibold">+977 9851069368</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="flex gap-4">
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-card p-8 rounded-xl border border-border">
                  <h3 className="font-heading text-2xl font-bold mb-6">Send us a Message</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your name"
                          className="bg-muted/50 border-border focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="bg-muted/50 border-border focus:border-primary"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="Enter subject"
                        className="bg-muted/50 border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Enter your message"
                        className="w-full px-4 py-2 bg-muted/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Send Message
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">R</span>
                </div>
                <span className="font-heading font-bold text-xl">Rumsan</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Building frontier AI tools for social good. Transforming communities through digital innovation and
                frontier technologies.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-6">Services</h4>
              <ul className="space-y-4">
                {[
                  "AI Applications",
                  "AI Automation",
                  "Data Analytics",
                  "Web Development",
                  "Blockchain",
                  "Consulting",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-6">Products</h4>
              <ul className="space-y-4">
                {["Rahat", "AgriClear", "Portfolio", "Case Studies"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-4">
                {["About Us", "Leadership", "Awards", "Privacy Policy", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Rumsan Associates Pvt Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={(open) => !open && setIsModalOpen(false)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">Book AI Consultation</DialogTitle>
            <DialogDescription>
              Ready to transform how your organization handles information? Our AI experts are here to help you build
              solutions that make a real difference.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="modal-email">Email</Label>
              <Input
                id="modal-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-muted/50 border-border focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="modal-name">Full Name</Label>
              <Input
                id="modal-name"
                type="text"
                placeholder="Enter your full name"
                className="bg-muted/50 border-border focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="modal-organization">Organization</Label>
              <Input
                id="modal-organization"
                type="text"
                placeholder="Enter your organization name"
                className="bg-muted/50 border-border focus:border-primary"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => {
                alert("Thank you for your interest! We'll be in touch soon to schedule your AI consultation.")
                setIsModalOpen(false)
              }}
            >
              Book Consultation
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
