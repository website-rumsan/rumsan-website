"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { CheckCircle, Zap, Rocket, Heart } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Header from "@/components/header";
import Carousel from "@/components/ui/carousel";

// Animated counter that counts up when it comes into view
function AnimatedCounter({
  end,
  duration = 2000,
  decimals = 0,
  postfix = "",
}: {
  end: number;
  duration?: number; // ms
  decimals?: number;
  postfix?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let frameId: number;
    const start = performance.now();
    const startValue = 0;
    const change = end - startValue;
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(progress);
      setValue(startValue + change * eased);
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, end, duration]);

  const formatted =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

  return (
    <span ref={ref}>
      {formatted}
      {postfix ? ` ${postfix}` : ""}
    </span>
  );
}

export default function RumsanLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 hero-gradient" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background z-10" />

        <div className="container mx-auto px-4 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-balance leading-tight"
              >
                Innovating with purpose. Empowering through technology.
                Impacting lives.{" "}
              </motion.h1>
            </motion.div>

            {/* Right Side - Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <Carousel>
                <div className="h-full flex flex-col justify-center">
                  <h2 className="text-5xl font-semibold tracking-wide text-foreground/70 mb-2">
                    Discover our solutions
                  </h2>
                  <h3
                    className="text-2xl lg:text-3xl font-bold mb-3"
                    style={{ color: "#2B7EC1" }}
                  >
                    Professional Services
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mb-6">
                    Expert consulting and product development across Web2.0,
                    Web3.0, mobile applications, web platforms, and AI —
                    tailored to your mission and scale.
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://rumsan.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <img
                        src="https://assets.rumsan.net/rumsan-group/rumsan-logo-homepage.png"
                        alt="Rumsan logo"
                        className="h-28 w-auto"
                      />
                    </a>
                  </div>
                </div>

                <div className="h-full flex flex-col justify-center">
                  <h2 className="text-5xl font-semibold tracking-wide text-foreground/70 mb-2">
                    Discover our solutions
                  </h2>
                  <h3
                    className="text-2xl lg:text-3xl font-bold mb-3"
                    style={{ color: "#2B7EC1" }}
                  >
                    Rahat
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mb-6">
                    An open source blockchain based financial access platform to
                    support vulnerable communities from the impact of climate
                    shocks.
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://rahat.io/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <img
                        src="https://assets.rumsan.net/rumsan-group/rahat-logo-standard.png"
                        alt="Rahat logo"
                        className="h-12 w-auto"
                      />
                    </a>
                  </div>
                </div>

                <div className="h-full flex flex-col justify-center">
                  <h2 className="text-5xl font-semibold tracking-wide text-foreground/70 mb-2">
                    Discover our solutions
                  </h2>
                  <h3
                    className="text-2xl lg:text-3xl font-bold mb-3"
                    style={{ color: "#a8116a" }}
                  >
                    eSatya
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mb-6">
                    Leading blockchain education in Nepal, fostering awareness
                    and empowerment, driving innovation and inclusion for a
                    digitally empowered society.
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://esatya.io/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <img
                        src="https://assets.rumsan.net/rumsan-group/esatya-main-banner-01.png"
                        alt="eSatya logo"
                        className="h-24 w-auto"
                      />
                    </a>
                  </div>
                </div>

                <div className="h-full flex flex-col justify-center">
                  <h2 className="text-5xl font-semibold tracking-wide text-foreground/70 mb-2">
                    Discover our solutions
                  </h2>
                  <h3
                    className="text-2xl lg:text-3xl font-bold mb-3"
                    style={{ color: "#cf3d3c" }}
                  >
                    <i>Hamro</i> LifeBank
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mb-6">
                    Revolutionizing blood management with data for transparency
                    and efficiency, from collection to distribution, ensuring
                    holistic and smart services.
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://hamrolifebank.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <img
                        src="https://assets.rumsan.net/rumsan-group/hlb-blk-rumsan.png"
                        alt="Hamro LifeBank logo"
                        className=" w-auto h-28"
                      />
                    </a>
                  </div>
                </div>
              </Carousel>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className="py-24 relative overflow-hidden bg-background"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
                Our Flagship Products
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Innovative solutions that empower communities and transform
                industries
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
              <div className="bg-card p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <h3 className="font-heading text-2xl font-bold mb-4">Rahat</h3>
                <p className="text-muted-foreground mb-6">
                  Blockchain-powered financial access platform for vulnerable
                  populations, offering immediate financial aid, resiliency
                  tools (micro-insurance, loans, savings), and financial
                  literacy programs.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Immediate Financial Aid</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Parametric Micro Insurance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Micro Loans & Savings</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Financial Literacy Programs</span>
                  </li>
                </ul>
                <div className="flex gap-4">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                    Learn More
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary/20 bg-transparent"
                  >
                    Visit rahat.io
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
              <div className="bg-card p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <h3 className="font-heading text-2xl font-bold mb-4">
                  AgriClear
                </h3>
                <p className="text-muted-foreground mb-6">
                  Decentralized supply chain tracking platform for agricultural
                  products, providing end-to-end traceability, tamper-proof
                  data, and counterfeit prevention via QR codes.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>End-to-End Traceability</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Tamper-Proof Data</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Counterfeit Prevention</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Supply Chain Efficiency</span>
                  </li>
                </ul>
                <div className="flex gap-4">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                    Learn More
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary/20 bg-transparent"
                  >
                    Visit agriclear.io
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - Fixed contrast issues and improved readability */}
      <section
        id="about"
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://assets.rumsan.net/rumsan-group/about-us-1.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[0.5px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Two images stacked, clean layout (no overlap) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full max-w-xl">
                <motion.img
                  src="https://assets.rumsan.net/rumsan-group/about-us-image.jpg"
                  alt="About Rumsan"
                  className=" h-80 md:h-[26rem] object-cover rounded-2xl shadow-2xl border border-white/20"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  whileHover={{ scale: 1.02, rotate: 1 }}
                />
                <motion.img
                  src="https://assets.rumsan.net/rumsan-group/about-us-3.jpg"
                  alt="About Rumsan secondary"
                  className="mt-6 ml-14  h-50 sm:h-48 object-cover rounded-xl shadow-xl border border-white/20"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  whileHover={{ scale: 1.05, rotate: -1 }}
                />
              </div>
            </motion.div>
            {/* Right: Text in white for better contrast */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="font-heading text-6xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                About Us
              </motion.h2>
              <motion.h2
                className="font-heading text-3xl md:text-5xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                We are a digital innovation
                <br className="hidden sm:block" />
                firm.
              </motion.h2>
              <motion.p
                className="mb-8 text-lg text-white/90 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Our mission is to revolutionize the potential of frontier
                technology, reshaping its role to contribute to a positive and
                sustainable future.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principles Section - Complete redesign with custom graphics and sophisticated animations */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h2
              className="font-heading text-5xl md:text-6xl font-bold mb-6 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Core Principles
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Simplify Processes */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-gray-200/50 hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-lg hover:shadow-2xl">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Custom icon design */}
                <motion.div
                  className="relative w-20 h-20 mb-8 mx-auto"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center">
                    <motion.div
                      className="relative"
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      <Zap className="h-10 w-10 text-white" />
                    </motion.div>
                  </div>
                </motion.div>

                <motion.h3
                  className="font-heading text-2xl font-bold mb-6 text-gray-900 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  SIMPLIFY PROCESSES
                </motion.h3>

                {/* Animated progress bar */}
                <motion.div
                  className="h-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mx-auto"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.6 }}
                />
              </div>
            </motion.div>

            {/* Frontier Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative"
            >
              <div className="relative bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-gray-200/50 hover:border-purple-400/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-lg hover:shadow-2xl">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Custom icon design */}
                <motion.div
                  className="relative w-20 h-20 mb-8 mx-auto"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl -rotate-6 group-hover:-rotate-12 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <Rocket className="h-10 w-10 text-white" />
                    </motion.div>
                  </div>
                </motion.div>

                <motion.h3
                  className="font-heading text-2xl font-bold mb-6 text-gray-900 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  FRONTIER TECHNOLOGIES
                </motion.h3>

                {/* Animated progress bar */}
                <motion.div
                  className="h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.7 }}
                />
              </div>
            </motion.div>

            {/* Societal Impact */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group relative"
            >
              <div className="relative bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-gray-200/50 hover:border-green-400/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-lg hover:shadow-2xl">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Custom icon design */}
                <motion.div
                  className="relative w-20 h-20 mb-8 mx-auto"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <Heart className="h-10 w-10 text-white" />
                    </motion.div>
                  </div>
                </motion.div>

                <motion.h3
                  className="font-heading text-2xl font-bold mb-6 text-gray-900 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  SOCIETAL IMPACT
                </motion.h3>

                {/* Animated progress bar */}
                <motion.div
                  className="h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mx-auto"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Lives Impacted", value: 109000, display: "109.0K +" },
              {
                label: "Digital Financial Literacy",
                value: 8000,
                display: "8.0K +",
              },
              { label: "Impact Projects", value: 10, display: "10 +" },
              {
                label: "National & International Clients",
                value: 70,
                display: "70 +",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + idx * 0.1 }}
                className="relative bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-2">
                  {item.label === "Lives Impacted" && (
                    <>
                      <AnimatedCounter
                        end={109.0}
                        duration={1800}
                        decimals={1}
                      />{" "}
                      K +
                    </>
                  )}
                  {item.label === "Digital Financial Literacy" && (
                    <>
                      <AnimatedCounter end={8.0} duration={1600} decimals={1} />{" "}
                      K +
                    </>
                  )}
                  {item.label === "Impact Projects" && (
                    <>
                      <AnimatedCounter end={10} duration={1200} /> +
                    </>
                  )}
                  {item.label === "National & International Clients" && (
                    <>
                      <AnimatedCounter end={70} duration={1400} /> +
                    </>
                  )}
                </div>
                <div className="text-sm text-black/70">{item.label}</div>
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-black/5 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50/20">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Partners
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* UNICEF Nepal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="group"
            >
              <a
                href="https://www.unicef.org/nepal/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 hover:border-blue-300/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg group">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Logo container */}
                  <div className="relative mb-6">
                    <div className="flex items-center justify-center h-24">
                      <img
                        src="https://assets.rumsan.net/rahat/united-nations-childrens-fund-unicef-logo.png"
                        alt="Unicef Nepal"
                        className="max-h-16 max-w-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative text-center">
                    <p className="text-sm font-medium text-blue-600 mb-2 uppercase tracking-wide">
                      Funder
                    </p>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                      Unicef Nepal
                    </h3>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
            </motion.div>

            {/* MIT Solve */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <a
                href="https://solve.mit.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 hover:border-blue-300/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg group">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Logo container */}
                  <div className="relative mb-6">
                    <div className="flex items-center justify-center h-24">
                      <img
                        src="https://assets.rumsan.net/rumsan-group/mit-solve-logo-home-page.png"
                        alt="MIT Solve"
                        className="max-h-28 max-w-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative text-center">
                    <p className="text-sm font-medium text-blue-600 mb-2 uppercase tracking-wide">
                      Supporter
                    </p>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                      MIT Solve
                    </h3>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
            </motion.div>

            {/* GSMA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <a
                href="https://www.gsma.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 hover:border-blue-300/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg group">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Logo container */}
                  <div className="relative mb-6">
                    <div className="flex items-center justify-center h-24">
                      <img
                        src="https://assets.rumsan.net/rahat/seal-sq-logo-partenairegsma-1.webp"
                        alt="GSMA"
                        className="max-h-28 max-w-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative text-center">
                    <p className="text-sm font-medium text-blue-600 mb-2 uppercase tracking-wide">
                      Funder
                    </p>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                      GSMA
                    </h3>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer removed; now provided by global layout */}
    </div>
  );
}
