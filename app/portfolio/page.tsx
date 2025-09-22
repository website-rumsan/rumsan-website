"use client"

import { motion } from "framer-motion"
import { ExternalLink, ArrowRight } from "lucide-react"
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
              Discover how our innovative solutions are making a real difference across various sectors and communities
              worldwide.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full">
                  <img
                    src="https://assets.rumsan.net/rumsan-group/hlb.jpg"
                    alt="Hamro LifeBank"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-xs font-medium text-red-500 bg-red-500/10 px-3 py-1 rounded-full">
                      Healthcare
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4">Hamro LifeBank</h3>
                  <p className="text-muted-foreground mb-6">
                    Hamro LifeBank is a social initiative for a smart, transparent and holistic blood management service
                    from collection to supply. HLB is taking a data-centric approach to cut the stress out of the
                    process by getting information to patients easily, motivating youth to donate blood and helping
                    blood banks work efficiently to minimize wastage and make informed-decisions.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Technology Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-muted px-2 py-1 rounded">MongoDB</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">React</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">JavaScript</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">NodeJS</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button size="sm" className="bg-red-500 hover:bg-red-600">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full">
                  <img
                    src="https://assets.rumsan.net/rumsan-group/portfolio-artswap-banner.jpg"
                    alt="Artswap"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-xs font-medium text-purple-500 bg-purple-500/10 px-3 py-1 rounded-full">
                      Art & NFT
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4">Artswap</h3>
                  <p className="text-muted-foreground mb-6">
                    ArtSwap is led by tech founders, artists and lawyers coming together because of their deep love for
                    the art community. The main goal of ArtSwap is launching the platform and a marketplace to empower
                    true collaboration between galleries, artists and collectors with the result of improving personal
                    interactions between all participants.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Technology Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-muted px-2 py-1 rounded">MongoDB</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">React.js</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">Solidity</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">Polygon</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">IPFS</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button size="sm" className="bg-purple-500 hover:bg-purple-600">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full">
                  <img
                    src="https://assets.rumsan.net/rumsan-group/portfolio-the-record-banner-.jpg"
                    alt="The Record"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-xs font-medium text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full">
                      Media & Publishing
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4">The Record</h3>
                  <p className="text-muted-foreground mb-6">
                    Record Nepal is an independent digital publication based in Kathmandu, Nepal. They examine politics,
                    the economy, societal, and culture stories. They look into events both current and past, offering
                    depth, analysis, and perspective.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Technology Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-muted px-2 py-1 rounded">MongoDB</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">JavaScript</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">React Native</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">NodeJS</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">Bootstrap</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full">
                  <img
                    src="https://assets.rumsan.net/rumsan-group/portfolio-care-banner.jpg"
                    alt="Care Nepal"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-xs font-medium text-green-500 bg-green-500/10 px-3 py-1 rounded-full">
                      Agriculture
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4">Care Nepal</h3>
                  <p className="text-muted-foreground mb-6">
                    CARE is a leading humanitarian organization committed to saving lives and fighting poverty and
                    social injustice. Through community based efforts, CARE works to prevent spread of diseases,
                    increase improved health awareness and access to safe drinking water and sanitation.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Technology Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-muted px-2 py-1 rounded">MongoDB</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">JavaScript</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">React Native</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">NodeJS</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">Bootstrap</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button size="sm" className="bg-green-500 hover:bg-green-600">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full">
                  <img
                    src="https://assets.rumsan.net/rumsan-group/portfolio-rahat-banner.jpg"
                    alt="Rahat"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-xs font-medium text-cyan-500 bg-cyan-500/10 px-3 py-1 rounded-full">
                      Blockchain
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4">Rahat</h3>
                  <p className="text-muted-foreground mb-6">
                    Rahat is an open-source blockchain-based Cash and Voucher Assistance platform to support vulnerable
                    communities. Rahat manages and monitors the flow of transactions in token distribution projects
                    maintaining end-to-end transparency for humanitarian agencies.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Technology Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-muted px-2 py-1 rounded">MongoDB</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">React</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">JavaScript</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">NodeJS</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">Ethereum</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full">
                  <img
                    src="https://assets.rumsan.net/rumsan-group/portfolio-heifer-banner.jpg"
                    alt="Heifer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-xs font-medium text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full">
                      Livestock Management
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4">Heifer</h3>
                  <p className="text-muted-foreground mb-6">
                    Heifer International Nepal is an international NGO, operating in Nepal with a mission to thrive the
                    farmers and end poverty while caring for the earth by providing livestock, education and other
                    resources to help the poor families become self-reliant.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Technology Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-muted px-2 py-1 rounded">MongoDB</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">JavaScript</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">React Native</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">NodeJS</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">Blockchain</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full">
                  <img
                    src="https://assets.rumsan.net/rumsan-group/portfolio-bring-it-on-sports-banner.jpg"
                    alt="Bring it on Sports"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-xs font-medium text-yellow-600 bg-yellow-500/10 px-3 py-1 rounded-full">
                      Sports Management
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4">Bring it on Sports</h3>
                  <p className="text-muted-foreground mb-6">
                    Bring it on Sports is an Australian based company which provides a high standard of sport coaching
                    and recreational activities for all ages and ability. One of the Business activities of BIOS is to
                    rent out sports and recreational activities related equipment to the Sports coach in Australia.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Technology Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-muted px-2 py-1 rounded">MongoDB</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">JavaScript</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">React Native</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">NodeJS</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">Bootstrap</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full">
                  <img
                    src="https://assets.rumsan.net/rumsan-group/portfolio-kyc-nepal-banner.jpg"
                    alt="KYC Nepal"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-xs font-medium text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-full">
                      FinTech
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4">KYC Nepal</h3>
                  <p className="text-muted-foreground mb-6">
                    KYC Nepal is a brain child of Bit Solutions Nepal Pvt. Ltd. that was created to meet the growing
                    needs of the Nepali banking industry. BSN is a startup company founded by Nepali American bankers to
                    strengthen and elevate the stature of Nepal and its banking industry.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Technology Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-muted px-2 py-1 rounded">MongoDB</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">JavaScript</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">React Native</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">NodeJS</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">Bootstrap</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button size="sm" className="bg-indigo-500 hover:bg-indigo-600">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full">
                  <img
                    src="https://assets.rumsan.net/rumsan-group/portfolio-agriclear-banner.jpg"
                    alt="AgriClear"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-xs font-medium text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">
                      Supply Chain
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4">AgriClear</h3>
                  <p className="text-muted-foreground mb-6">
                    AgriClear is a blockchain-based system that helps in tracking good agricultural practices from its
                    production phase till it reaches the end consumers to define agro-products quality and authenticity.
                    It ensures transparency and traceability of agro-products.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Technology Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-muted px-2 py-1 rounded">MongoDB</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">React.js</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">JavaScript</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">NodeJS</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full">
                  <img
                    src="https://assets.rumsan.net/rahat/waya-energy-cover.jpg"
                    alt="Waya Energy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-xs font-medium text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full">
                      Energy Data
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4">Waya Energy</h3>
                  <p className="text-muted-foreground mb-6">
                    Waya Energy Catalog Database Platform is a cloud-based system developed to support Waya's
                    data-driven operations and strategic planning. By transforming raw data into structured, analyzable
                    formats, the platform has significantly improved how Waya organizes, interprets, and utilizes
                    critical information.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Technology Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-muted px-2 py-1 rounded">PostgreSQL</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">React.js</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">TypeScript</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">GCP</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">Mapbox</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button size="sm" className="bg-amber-500 hover:bg-amber-600">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
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
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-lg font-semibold mb-1">Projects Delivered</div>
              <div className="text-sm text-muted-foreground">Across multiple industries and sectors</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">100K+</div>
              <div className="text-lg font-semibold mb-1">Lives Impacted</div>
              <div className="text-sm text-muted-foreground">Through our humanitarian and social impact projects</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-lg font-semibold mb-1">Client Satisfaction</div>
              <div className="text-sm text-muted-foreground">Average satisfaction score across all projects</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">8+</div>
              <div className="text-lg font-semibold mb-1">Countries</div>
              <div className="text-sm text-muted-foreground">Global reach across multiple continents</div>
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Success Story?</h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              Join the organizations that have transformed their operations with our technology solutions.
            </p>
            <Button size="lg" className="px-8 py-4">
              Start Your Project
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
