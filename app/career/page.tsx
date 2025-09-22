"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Briefcase, GraduationCap, Users, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"

export default function CareerPage() {
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
              Join Our Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto text-pretty"
            >
              Be part of a mission-driven team building AI solutions that create real impact for communities around the world.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Why Join Rumsan?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Work on cutting-edge technology while making a meaningful difference in the world
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
              <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors h-full text-center">
                <div className="mb-6 p-3 bg-muted/30 rounded-lg inline-block">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">Global Impact</h3>
                <p className="text-muted-foreground">
                  Work on projects that directly improve lives in communities across 15+ countries.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors h-full text-center">
                <div className="mb-6 p-3 bg-muted/30 rounded-lg inline-block">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">Continuous Learning</h3>
                <p className="text-muted-foreground">
                  Access to latest technologies, training programs, and conferences to advance your skills.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors h-full text-center">
                <div className="mb-6 p-3 bg-muted/30 rounded-lg inline-block">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">Collaborative Culture</h3>
                <p className="text-muted-foreground">
                  Work with passionate, diverse team members who value innovation and social impact.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors h-full text-center">
                <div className="mb-6 p-3 bg-muted/30 rounded-lg inline-block">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">Work-Life Balance</h3>
                <p className="text-muted-foreground">
                  Flexible working hours, remote work options, and emphasis on personal well-being.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors h-full text-center">
                <div className="mb-6 p-3 bg-muted/30 rounded-lg inline-block">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">Career Growth</h3>
                <p className="text-muted-foreground">
                  Clear career progression paths with mentorship and leadership opportunities.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors h-full text-center">
                <div className="mb-6 p-3 bg-muted/30 rounded-lg inline-block">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">Cutting-Edge Tech</h3>
                <p className="text-muted-foreground">
                  Work with latest AI, blockchain, and web technologies in real-world applications.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-24 relative overflow-hidden bg-muted/20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Current Openings</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Join our team and help build the future of AI for social good
              </p>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold mb-2">Senior AI Engineer</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        Kathmandu, Nepal / Remote
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Full-time
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        5+ years experience
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Lead the development of LLM-powered applications and AI automation tools. Work on cutting-edge projects that impact communities globally.
                    </p>
                  </div>
                  <Button className="md:ml-4">Apply Now</Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold mb-2">Full Stack Developer</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        Kathmandu, Nepal / Remote
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Full-time
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        3+ years experience
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Build scalable web applications using React, Node.js, and modern frameworks. Experience with AI integration is a plus.
                    </p>
                  </div>
                  <Button className="md:ml-4">Apply Now</Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold mb-2">Blockchain Developer</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        Remote / Global
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Full-time
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        4+ years experience
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Develop smart contracts and decentralized applications for social impact projects. Experience with Ethereum, Solidity required.
                    </p>
                  </div>
                  <Button className="md:ml-4">Apply Now</Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold mb-2">Product Manager</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        Kathmandu, Nepal / USA
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Full-time
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        6+ years experience
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Lead product strategy for our AI and blockchain solutions. Drive product vision from conception to deployment.
                    </p>
                  </div>
                  <Button className="md:ml-4">Apply Now</Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold mb-2">UX/UI Designer</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        Remote / Global
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Full-time
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        4+ years experience
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Design intuitive user experiences for complex AI and blockchain applications. Focus on accessibility and user-centered design.
                    </p>
                  </div>
                  <Button className="md:ml-4">Apply Now</Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Benefits & Perks</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                We believe in taking care of our team members
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
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-heading text-lg font-bold mb-3">Health & Wellness</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Comprehensive health insurance</li>
                  <li>• Mental health support</li>
                  <li>• Wellness stipend</li>
                  <li>• Gym membership</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-heading text-lg font-bold mb-3">Time Off</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 25+ vacation days</li>
                  <li>• Sick leave</li>
                  <li>• Festival holidays</li>
                  <li>• Sabbatical options</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-heading text-lg font-bold mb-3">Growth & Learning</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Learning & development budget</li>
                  <li>• Conference attendance</li>
                  <li>• Online course subscriptions</li>
                  <li>• Mentorship programs</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-heading text-lg font-bold mb-3">Work Setup</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Laptop & equipment</li>
                  <li>• Home office stipend</li>
                  <li>• Flexible working hours</li>
                  <li>• Remote work options</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 relative overflow-hidden bg-muted/20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Application Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Our hiring process is designed to be transparent and efficient
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
              <h3 className="font-heading text-lg font-bold mb-3">Apply Online</h3>
              <p className="text-muted-foreground text-sm">
                Submit your application with resume and cover letter through our portal.
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
              <h3 className="font-heading text-lg font-bold mb-3">Initial Screening</h3>
              <p className="text-muted-foreground text-sm">
                Our HR team reviews your application and conducts an initial phone screening.
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
              <h3 className="font-heading text-lg font-bold mb-3">Technical Interview</h3>
              <p className="text-muted-foreground text-sm">
                Technical assessment and interview with team members and hiring manager.
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
              <h3 className="font-heading text-lg font-bold mb-3">Final Interview</h3>
              <p className="text-muted-foreground text-sm">
                Culture fit interview with leadership team and offer discussion.
              </p>
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
              Don't See a Perfect Match?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about using technology for social good. Send us your resume!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4">
                Send Your Resume
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4">
                Learn About Our Culture
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}