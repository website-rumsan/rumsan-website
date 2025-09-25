"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import PortfolioJson from "@/data/sections/portfolio-page.json";

interface ProjectDetailProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const { slug } = params;

  // Find the project by slug
  const project = PortfolioJson.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/portfolio">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="font-heading text-3xl font-bold mb-6">
                  About This Project
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {project.subdescription || project.description}
                  </p>
                </div>

                {/* Challenges */}
                {project.challenges && (
                  <div className="mb-12">
                    <h3 className="font-heading text-2xl font-bold mb-6">
                      Challenges
                    </h3>
                    <div className="bg-red-50 rounded-lg p-6">
                      <p className="text-muted-foreground">
                        {project.challenges}
                      </p>
                    </div>
                  </div>
                )}

                {/* Solutions */}
                {project.solutions && (
                  <div className="mb-12">
                    <h3 className="font-heading text-2xl font-bold mb-6">
                      Solutions
                    </h3>
                    <div className="bg-green-50 rounded-lg p-6">
                      <div
                        className="text-muted-foreground"
                        dangerouslySetInnerHTML={{ __html: project.solutions }}
                      />
                    </div>
                  </div>
                )}

                {/* Additional Images */}
                <div className="grid md:grid-cols-2 gap-6 mt-12">
                  {project.image1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="rounded-xl overflow-hidden"
                    >
                      <img
                        src={project.image1}
                        alt={`${project.title} - Image 1`}
                        className="w-full h-64 object-cover"
                      />
                    </motion.div>
                  )}
                  {project.image2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="rounded-xl overflow-hidden"
                    >
                      <img
                        src={project.image2}
                        alt={`${project.title} - Image 2`}
                        className="w-full h-64 object-cover"
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-muted/30 rounded-2xl p-6 sticky top-8"
              >
                {/* Project Info */}
                <div className="mb-8">
                  <h3 className="font-heading text-xl font-bold mb-4">
                    Project Info
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">
                        Project ID
                      </span>
                      <p className="text-sm">
                        #{project.id.toString().padStart(3, "0")}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">
                        Title
                      </span>
                      <p className="text-sm">{project.title}</p>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                {project.technology && project.technology.length > 0 && (
                  <div className="mb-8">
                    <h3 className="font-heading text-xl font-bold mb-4">
                      Technologies Used
                    </h3>
                    <div className="space-y-2">
                      {project.technology.map((tech, index) => (
                        <div
                          key={index}
                          className="text-sm bg-primary/5 text-primary px-3 py-2 rounded-lg border border-primary/10"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Image Title */}
                {project.imagetitle && (
                  <div className="mt-6">
                    <img
                      src={project.imagetitle}
                      alt={`${project.title} - Title Image`}
                      className="w-full rounded-lg"
                    />
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <h2 className="font-heading text-3xl font-bold mb-4">
              Interested in a Similar Project?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with our
              expertise and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">Get In Touch</Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg">
                  View More Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
