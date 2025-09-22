"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Phone, Clock, Linkedin, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Header from "@/components/header"

export default function ContactPage() {
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
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto text-pretty"
            >
              Ready to build AI solutions that make a difference? Let's collaborate to create technology that truly impacts communities and drives positive change.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-card p-8 rounded-xl border border-border h-full">
                  <h3 className="font-heading text-2xl font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-8">
                    {/* Nepal Office */}
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-lg mb-2">Nepal Office</div>
                        <div className="text-muted-foreground mb-1">283 Bhiunti Marg</div>
                        <div className="text-muted-foreground mb-1">Jhamsikhel, Lalitpur</div>
                        <div className="text-muted-foreground">Nepal</div>
                      </div>
                    </div>

                    {/* USA Office */}
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-lg mb-2">USA Office</div>
                        <div className="text-muted-foreground mb-1">24 Parkview Rd</div>
                        <div className="text-muted-foreground mb-1">Randolph, NJ 07869</div>
                        <div className="text-muted-foreground">United States</div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-4">
                      <Mail className="h-6 w-6 text-primary" />
                      <div>
                        <div className="font-semibold text-lg mb-1">Email</div>
                        <a 
                          href="mailto:team@rumsan.com"
                          className="text-primary hover:underline"
                        >
                          team@rumsan.com
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-4">
                      <Phone className="h-6 w-6 text-primary" />
                      <div>
                        <div className="font-semibold text-lg mb-1">Phone</div>
                        <a 
                          href="tel:+9779851069368"
                          className="text-primary hover:underline"
                        >
                          +977 9851069368
                        </a>
                      </div>
                    </div>

                    {/* Business Hours */}
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-lg mb-2">Business Hours</div>
                        <div className="text-muted-foreground mb-1">Monday - Friday: 9:00 AM - 6:00 PM (NPT)</div>
                        <div className="text-muted-foreground mb-1">Saturday: 9:00 AM - 2:00 PM (NPT)</div>
                        <div className="text-muted-foreground">Sunday: Closed</div>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="mt-12 pt-8 border-t border-border">
                    <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
                    <div className="flex gap-4">
                      <a 
                        href="#" 
                        className="p-3 bg-muted/30 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a 
                        href="#" 
                        className="p-3 bg-muted/30 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a 
                        href="#" 
                        className="p-3 bg-muted/30 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-card p-8 rounded-xl border border-border h-full">
                  <h3 className="font-heading text-2xl font-bold mb-6">Send us a Message</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="Enter your first name"
                          className="bg-muted/50 border-border focus:border-primary"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Enter your last name"
                          className="bg-muted/50 border-border focus:border-primary"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="bg-muted/50 border-border focus:border-primary"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="Enter your company name"
                        className="bg-muted/50 border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="bg-muted/50 border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <select
                        id="subject"
                        className="w-full px-4 py-2 bg-muted/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="ai-consultation">AI Consultation</option>
                        <option value="blockchain-development">Blockchain Development</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-development">Mobile Development</option>
                        <option value="data-analytics">Data Analytics</option>
                        <option value="consulting">Technology Consulting</option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="career">Career Opportunities</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Project Budget Range</Label>
                      <select
                        id="budget"
                        className="w-full px-4 py-2 bg-muted/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-plus">$100,000+</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeline">Project Timeline</Label>
                      <select
                        id="timeline"
                        className="w-full px-4 py-2 bg-muted/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-3-months">1-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-months-plus">6+ months</option>
                        <option value="planning-phase">Still in planning phase</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Tell us about your project, challenges, and goals..."
                        className="w-full px-4 py-2 bg-muted/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        required
                      ></textarea>
                    </div>

                    <div className="flex items-start gap-3">
                      <input 
                        type="checkbox" 
                        id="newsletter" 
                        className="mt-1 h-4 w-4 text-primary border-border rounded focus:ring-primary"
                      />
                      <Label htmlFor="newsletter" className="text-sm leading-relaxed">
                        I would like to receive updates about Rumsan's latest projects, insights, and technology innovations.
                      </Label>
                    </div>

                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3">
                      Send Message
                    </Button>

                    <p className="text-xs text-muted-foreground">
                      * Required fields. We typically respond within 24 hours during business days.
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative overflow-hidden bg-muted/20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Quick answers to common questions about our services and process
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
              >
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-heading text-lg font-bold mb-3">What types of AI solutions do you build?</h3>
                  <p className="text-muted-foreground text-sm">
                    We specialize in LLM-powered applications, document processing automation, chatbots, data analytics, and custom AI solutions tailored to your specific needs.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-heading text-lg font-bold mb-3">How long does a typical project take?</h3>
                  <p className="text-muted-foreground text-sm">
                    Project timelines vary based on complexity. Simple AI applications take 2-4 weeks, while comprehensive platforms may take 3-6 months.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-heading text-lg font-bold mb-3">Do you work with international clients?</h3>
                  <p className="text-muted-foreground text-sm">
                    Yes! We have offices in Nepal and the USA, and we've successfully delivered projects across 15+ countries.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-heading text-lg font-bold mb-3">What is your pricing model?</h3>
                  <p className="text-muted-foreground text-sm">
                    We offer flexible pricing including fixed-price projects, time & materials, and dedicated team models based on your requirements.
                  </p>
                </div>
              </motion.div>
            </div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              Join hundreds of organizations that have transformed their operations with our technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4">
                Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4">
                View Our Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}