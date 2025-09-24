"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Briefcase, ArrowLeft, Users, DollarSign, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Link from "next/link"
import { notFound } from "next/navigation"

// Job data
const jobData = {
  "senior-ai-engineer": {
    title: "Senior AI Engineer",
    location: "Kathmandu, Nepal / Remote",
    type: "Full-time",
    experience: "5+ years experience",
    salary: "$60,000 - $90,000",
    posted: "2 days ago",
    description:
      "Lead the development of LLM-powered applications and AI automation tools. Work on cutting-edge projects that impact communities globally.",
    responsibilities: [
      "Design and develop AI-powered applications using LLMs and machine learning frameworks",
      "Lead technical architecture decisions for AI projects",
      "Collaborate with cross-functional teams to integrate AI solutions",
      "Mentor junior developers and contribute to technical documentation",
      "Research and implement cutting-edge AI technologies",
      "Optimize AI models for production deployment",
      "Work on social impact projects affecting communities worldwide",
    ],
    requirements: [
      "5+ years of experience in AI/ML development",
      "Strong proficiency in Python, TensorFlow/PyTorch",
      "Experience with LLMs, NLP, and computer vision",
      "Knowledge of cloud platforms (AWS, GCP, Azure)",
      "Experience with MLOps and model deployment",
      "Strong problem-solving and communication skills",
      "Passion for using technology for social good",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health insurance",
      "Learning and development budget",
      "Flexible working hours and remote work options",
      "Conference attendance and training opportunities",
      "Work on meaningful projects with global impact",
    ],
  },
  "ai-engineer": {
    title: "AI Engineer",
    location: "Kathmandu, Nepal / Remote",
    type: "Full-time",
    experience: "3+ years experience",
    salary: "$45,000 - $70,000",
    posted: "1 day ago",
    description:
      "Develop and implement AI solutions for social impact projects. Work with modern AI frameworks and contribute to innovative applications.",
    responsibilities: [
      "Develop AI models and algorithms for various applications",
      "Implement machine learning pipelines and data processing workflows",
      "Collaborate with product teams to integrate AI features",
      "Optimize model performance and scalability",
      "Contribute to AI research and development initiatives",
      "Participate in code reviews and technical discussions",
      "Support deployment and monitoring of AI systems",
    ],
    requirements: [
      "3+ years of experience in AI/ML development",
      "Proficiency in Python and ML frameworks (TensorFlow, PyTorch, scikit-learn)",
      "Experience with data preprocessing and feature engineering",
      "Knowledge of deep learning and neural networks",
      "Familiarity with cloud services and containerization",
      "Strong analytical and problem-solving skills",
      "Interest in social impact and humanitarian technology",
    ],
    benefits: [
      "Competitive salary package",
      "Health and wellness benefits",
      "Professional development opportunities",
      "Flexible work arrangements",
      "Collaborative and inclusive work environment",
      "Opportunity to work on impactful projects",
    ],
  },
  "full-stack-developer": {
    title: "Full Stack Developer",
    location: "Kathmandu, Nepal / Remote",
    type: "Full-time",
    experience: "3+ years experience",
    salary: "$40,000 - $65,000",
    posted: "3 days ago",
    description:
      "Build scalable web applications using React, Node.js, and modern frameworks. Experience with AI integration is a plus.",
    responsibilities: [
      "Develop and maintain web applications using React and Node.js",
      "Design and implement RESTful APIs and database schemas",
      "Collaborate with designers to implement user interfaces",
      "Integrate third-party services and APIs",
      "Write clean, maintainable, and well-tested code",
      "Participate in agile development processes",
      "Contribute to technical architecture decisions",
    ],
    requirements: [
      "3+ years of full-stack development experience",
      "Proficiency in React, Node.js, and TypeScript",
      "Experience with databases (PostgreSQL, MongoDB)",
      "Knowledge of modern web technologies and frameworks",
      "Understanding of software development best practices",
      "Experience with version control (Git) and CI/CD",
      "Strong communication and teamwork skills",
    ],
    benefits: [
      "Competitive compensation package",
      "Health insurance coverage",
      "Learning and development budget",
      "Flexible working hours",
      "Remote work opportunities",
      "Career growth and advancement opportunities",
    ],
  },
  "blockchain-developer": {
    title: "Blockchain Developer",
    location: "Remote / Global",
    type: "Full-time",
    experience: "4+ years experience",
    salary: "$55,000 - $85,000",
    posted: "1 week ago",
    description:
      "Develop smart contracts and decentralized applications for social impact projects. Experience with Ethereum, Solidity required.",
    responsibilities: [
      "Design and develop smart contracts using Solidity",
      "Build decentralized applications (dApps) for social impact",
      "Implement blockchain integration for existing systems",
      "Conduct security audits and testing of smart contracts",
      "Research and evaluate new blockchain technologies",
      "Collaborate with cross-functional teams on blockchain solutions",
      "Contribute to blockchain architecture and technical decisions",
    ],
    requirements: [
      "4+ years of blockchain development experience",
      "Strong proficiency in Solidity and Ethereum ecosystem",
      "Experience with Web3.js, ethers.js, and blockchain tools",
      "Knowledge of DeFi protocols and smart contract security",
      "Understanding of cryptography and consensus mechanisms",
      "Experience with testing frameworks and deployment tools",
      "Passion for decentralized technologies and social impact",
    ],
    benefits: [
      "Competitive salary and token incentives",
      "Comprehensive benefits package",
      "Professional development opportunities",
      "Global remote work flexibility",
      "Conference and event attendance",
      "Work on cutting-edge blockchain projects",
    ],
  },
  "product-manager": {
    title: "Product Manager",
    location: "Kathmandu, Nepal / USA",
    type: "Full-time",
    experience: "6+ years experience",
    salary: "$70,000 - $110,000",
    posted: "5 days ago",
    description:
      "Lead product strategy for our AI and blockchain solutions. Drive product vision from conception to deployment.",
    responsibilities: [
      "Define product strategy and roadmap for AI/blockchain solutions",
      "Conduct market research and competitive analysis",
      "Collaborate with engineering teams on product development",
      "Gather and prioritize product requirements from stakeholders",
      "Lead product launches and go-to-market strategies",
      "Analyze product metrics and user feedback",
      "Work with design teams to create user-centered experiences",
    ],
    requirements: [
      "6+ years of product management experience",
      "Experience with AI/ML or blockchain products",
      "Strong analytical and strategic thinking skills",
      "Excellent communication and leadership abilities",
      "Experience with agile development methodologies",
      "Understanding of technical concepts and constraints",
      "Passion for social impact and humanitarian technology",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health and wellness benefits",
      "Leadership development programs",
      "Flexible work arrangements",
      "International travel opportunities",
      "Strategic decision-making authority",
    ],
  },
  "ux-ui-designer": {
    title: "UX/UI Designer",
    location: "Remote / Global",
    type: "Full-time",
    experience: "4+ years experience",
    salary: "$45,000 - $75,000",
    posted: "4 days ago",
    description:
      "Design intuitive user experiences for complex AI and blockchain applications. Focus on accessibility and user-centered design.",
    responsibilities: [
      "Design user interfaces for web and mobile applications",
      "Conduct user research and usability testing",
      "Create wireframes, prototypes, and design systems",
      "Collaborate with product and engineering teams",
      "Ensure accessibility and inclusive design practices",
      "Maintain and evolve design systems and guidelines",
      "Present design concepts to stakeholders",
    ],
    requirements: [
      "4+ years of UX/UI design experience",
      "Proficiency in design tools (Figma, Sketch, Adobe Creative Suite)",
      "Strong portfolio demonstrating design process and outcomes",
      "Experience with user research and testing methodologies",
      "Knowledge of accessibility standards and best practices",
      "Understanding of front-end development constraints",
      "Excellent visual design and communication skills",
    ],
    benefits: [
      "Competitive design industry salary",
      "Health and wellness benefits",
      "Design tools and software licenses",
      "Creative freedom and autonomy",
      "Professional development opportunities",
      "Work on meaningful social impact projects",
    ],
  },
}

export default function JobDetailPage({ params }: { params: { slug: string } }) {
  const job = jobData[params.slug as keyof typeof jobData]

  if (!job) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Job Header */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link
              href="/career"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Careers
            </Link>

            <div className="max-w-4xl">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{job.title}</h1>

              <div className="flex flex-wrap gap-6 text-muted-foreground mb-6">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {job.location}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {job.type}
                </span>
                <span className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  {job.experience}
                </span>
                <span className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  {job.salary}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Posted {job.posted}
                </span>
              </div>

              <p className="text-lg text-muted-foreground mb-8">{job.description}</p>

              <Button size="lg" className="px-8 py-4">
                Apply for This Position
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              {/* Responsibilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-2xl font-bold mb-6">Key Responsibilities</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="font-heading text-2xl font-bold mb-6">Requirements</h2>
                <ul className="space-y-3">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="font-heading text-2xl font-bold mb-6">What We Offer</h2>
                <ul className="space-y-3">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Apply */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card p-6 rounded-xl border border-border"
              >
                <h3 className="font-heading text-lg font-bold mb-4">Ready to Apply?</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Join our mission-driven team and help build AI solutions that create real impact.
                </p>
                <Button className="w-full mb-4">Apply Now</Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Save Job
                </Button>
              </motion.div>

              {/* Company Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-card p-6 rounded-xl border border-border"
              >
                <h3 className="font-heading text-lg font-bold mb-4">About Rumsan</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  We're a digital innovation company specializing in AI, blockchain, and FinTech solutions for social
                  impact.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">55+ employees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Global presence</span>
                  </div>
                </div>
              </motion.div>

              {/* Share */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card p-6 rounded-xl border border-border"
              >
                <h3 className="font-heading text-lg font-bold mb-4">Share This Job</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    Copy Link
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Jobs */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-2xl font-bold mb-8">Other Open Positions</h2>
              <div className="grid gap-4">
                {Object.entries(jobData)
                  .filter(([slug]) => slug !== params.slug)
                  .slice(0, 3)
                  .map(([slug, jobInfo]) => (
                    <Link key={slug} href={`/career/${slug}`}>
                      <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors">
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <h3 className="font-heading text-lg font-bold mb-2">{jobInfo.title}</h3>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {jobInfo.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {jobInfo.type}
                              </span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
