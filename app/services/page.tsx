"use client"

import { motion } from "framer-motion"
import { Brain, Zap, Database, CheckCircle, Code, Smartphone, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"

export default function ServicesPage() {
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
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto text-pretty"
            >
              Comprehensive technology solutions designed to amplify your organization's impact through intelligent automation and innovation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Core AI Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Three foundational services that transform how organizations handle information and automation
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <div className="h-full bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors">
                <div className="mb-6 p-3 bg-muted/30 rounded-lg inline-block">
                  <Brain className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">AI-Powered Applications</h3>
                <p className="text-muted-foreground mb-6">
                  Context-aware chatbots and intelligent assistants trained on your data, powered by LLMs and built for impact.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Natural Language Processing</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Multi-lingual Support</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Real-time Search</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Semantic Understanding</span>
                  </li>
                </ul>
                <Button className="w-full">Learn More</Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="h-full bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors">
                <div className="mb-6 p-3 bg-muted/30 rounded-lg inline-block">
                  <Zap className="h-12 w-12 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">AI Automation</h3>
                <p className="text-muted-foreground mb-6">
                  Automation tools that reduce repetitive work, boost speed, and help your teams focus on what matters most.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Document Processing</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Workflow Automation</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Human-in-the-Loop</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Third-party Integration</span>
                  </li>
                </ul>
                <Button className="w-full">Learn More</Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="h-full bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors">
                <div className="mb-6 p-3 bg-muted/30 rounded-lg inline-block">
                  <Database className="h-12 w-12 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">AI Data Analytics</h3>
                <p className="text-muted-foreground mb-6">
                  Turn messy data into smart decisions with cleanup, deduplication, and predictive analytics.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Interactive Dashboards</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Data Cleaning</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Duplicate Detection</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Predictive Analytics</span>
                  </li>
                </ul>
                <Button className="w-full">Learn More</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 relative overflow-hidden bg-muted/20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Additional Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Comprehensive technology solutions to support your digital transformation journey
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/30 transition-colors h-full text-center">
                <div className="mb-6 p-3 bg-muted/30 rounded-lg inline-block">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-heading font-bold text-lg mb-3">Web & Mobile Development</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Responsive, user-centric platforms using React, Angular, React Native, and Ionic
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Progressive Web Apps</li>
                  <li>• Cross-platform Mobile Apps</li>
                  <li>• API Development</li>
                  <li>• Performance Optimization</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/30 transition-colors h-full text-center">
                <div className="mb-6 p-3 bg-muted/30 rounded-lg inline-block">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-heading font-bold text-lg mb-3">Web3 & Blockchain</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Decentralized applications, smart contracts, and token-based systems
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Smart Contract Development</li>
                  <li>• DeFi Solutions</li>
                  <li>• NFT Platforms</li>
                  <li>• Tokenization Systems</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/30 transition-colors h-full text-center">
                <div className="mb-6 p-3 bg-muted/30 rounded-lg inline-block">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-heading font-bold text-lg mb-3">Tech Consulting</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Technology roadmapping, system architecture design, and digital strategy
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Digital Transformation</li>
                  <li>• Architecture Design</li>
                  <li>• Technology Audits</li>
                  <li>• Strategic Planning</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/30 transition-colors h-full text-center">
                <div className="mb-6 p-3 bg-muted/30 rounded-lg inline-block">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-heading font-bold text-lg mb-3">Staff Augmentation</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Access to skilled developers on dedicated or flexible basis
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Dedicated Teams</li>
                  <li>• Project-based Support</li>
                  <li>• Technical Expertise</li>
                  <li>• Flexible Engagement</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Our Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                How we approach every project to ensure maximum impact and success
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="text-center"
            >
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-heading text-lg font-bold mb-3">Discovery</h3>
              <p className="text-muted-foreground text-sm">
                Understanding your challenges, goals, and requirements through in-depth consultation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-heading text-lg font-bold mb-3">Strategy</h3>
              <p className="text-muted-foreground text-sm">
                Developing a comprehensive plan and technical architecture for your solution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-heading text-lg font-bold mb-3">Development</h3>
              <p className="text-muted-foreground text-sm">
                Building your solution using agile methodologies with regular feedback loops.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-heading text-lg font-bold mb-3">Deployment</h3>
              <p className="text-muted-foreground text-sm">
                Launching your solution with ongoing support, training, and optimization.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

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
              Ready to Transform Your Organization?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              Let's discuss how our AI and technology solutions can drive meaningful impact for your business.
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