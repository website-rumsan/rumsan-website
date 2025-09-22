"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Award, Users, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight"
            >
              Our Portfolio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto text-pretty"
            >
              Discover how our AI solutions are making a real difference across various sectors and communities worldwide.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Real-World Impact Cases */}
      <section className="py-24 relative overflow-hidden">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors h-full">
                <div className="mb-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    Education
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold mb-3">EdTech Assistant</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  AI-powered educational assistant for low-bandwidth schools, providing personalized learning support.
                </p>
                <div className="text-secondary font-semibold text-sm mb-4">Deployed in 50+ schools</div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    View
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors h-full">
                <div className="mb-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    Finance
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold mb-3">Document AI for KYC</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Automated document processing for onboarding and KYC compliance.
                </p>
                <div className="text-secondary font-semibold text-sm mb-4">80% reduction in processing time</div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    View
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors h-full">
                <div className="mb-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    HR & Operations
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold mb-3">HR Policy Automation</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Extracts key information from HR documents and sends automated Slack updates.
                </p>
                <div className="text-secondary font-semibold text-sm mb-4">95% accuracy rate</div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    View
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors h-full">
                <div className="mb-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    Humanitarian
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold mb-3">Impact Dashboard</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Real-time tracking and visualization of humanitarian aid distribution.
                </p>
                <div className="text-secondary font-semibold text-sm mb-4">Measuring reach across communities</div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    View
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Flagship Products */}
      <section className="py-24 relative overflow-hidden bg-muted/20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Flagship Products</h2>
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
                  <li className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>100,000+ beneficiaries served globally</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>$2M+ in aid distributed transparently</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Award className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Winner of multiple innovation awards</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Active in 8 countries across Asia and Africa</span>
                  </li>
                </ul>
                <div className="flex gap-4">
                  <Button variant="outline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Website
                  </Button>
                  <Button variant="outline">
                    <Github className="h-4 w-4 mr-2" />
                    View on GitHub
                  </Button>
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
                  <li className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>500+ farmers onboarded</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>10,000+ products traced successfully</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Award className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Zero counterfeit incidents reported</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Supporting sustainable agriculture</span>
                  </li>
                </ul>
                <div className="flex gap-4">
                  <Button variant="outline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Website
                  </Button>
                  <Button variant="outline">
                    <Github className="h-4 w-4 mr-2" />
                    View on GitHub
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Project Categories</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Our diverse portfolio spans multiple industries and use cases
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <h3 className="font-heading text-lg font-bold mb-3">AI Applications</h3>
                <p className="text-muted-foreground text-sm">
                  Intelligent chatbots, document processing, and automation tools
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors text-center">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <h3 className="font-heading text-lg font-bold mb-3">Blockchain Projects</h3>
                <p className="text-muted-foreground text-sm">
                  DeFi platforms, supply chain solutions, and digital identity systems
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors text-center">
                <div className="text-3xl font-bold text-primary mb-2">30+</div>
                <h3 className="font-heading text-lg font-bold mb-3">Web Applications</h3>
                <p className="text-muted-foreground text-sm">
                  Enterprise platforms, e-commerce solutions, and custom web apps
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors text-center">
                <div className="text-3xl font-bold text-primary mb-2">12+</div>
                <h3 className="font-heading text-lg font-bold mb-3">Mobile Apps</h3>
                <p className="text-muted-foreground text-sm">
                  Cross-platform mobile solutions for iOS and Android
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors text-center">
                <div className="text-3xl font-bold text-primary mb-2">8+</div>
                <h3 className="font-heading text-lg font-bold mb-3">Data Analytics</h3>
                <p className="text-muted-foreground text-sm">
                  Business intelligence dashboards and predictive analytics
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <h3 className="font-heading text-lg font-bold mb-3">Consulting Projects</h3>
                <p className="text-muted-foreground text-sm">
                  Strategic technology consulting and digital transformation
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24 relative overflow-hidden bg-muted/20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Impact by Numbers</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Measuring the real-world impact of our technology solutions
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">1M+</div>
              <div className="text-lg font-semibold mb-1">Lives Impacted</div>
              <div className="text-sm text-muted-foreground">
                Through our humanitarian and social impact projects
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-lg font-semibold mb-1">Client Satisfaction</div>
              <div className="text-sm text-muted-foreground">
                Average satisfaction score across all projects
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">80%</div>
              <div className="text-lg font-semibold mb-1">Efficiency Gains</div>
              <div className="text-sm text-muted-foreground">
                Average improvement in operational efficiency
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-lg font-semibold mb-1">Countries</div>
              <div className="text-sm text-muted-foreground">
                Global reach across multiple continents
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              Join the organizations that have transformed their operations with our technology solutions.
            </p>
            <Button size="lg" className="px-8 py-4">
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}