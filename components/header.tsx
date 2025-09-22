"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dotted-dialog";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClass =
    scrollY > 50
      ? "py-4 bg-background/80 backdrop-blur-md border-b border-border"
      : "py-6 bg-transparent";

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Link href="/">
              <img
                src="https://assets.rumsan.net/rahat/rumsan-logo.png"
                alt="Rumsan Logo"
                className="h-16 w-auto"
              />
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link
                href="/about"
                className="text-gray-700 dark:text-muted-foreground hover:text-black dark:hover:text-foreground transition-colors text-sm font-medium"
              >
                About Us
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/portfolio"
                className="text-gray-700 dark:text-muted-foreground hover:text-black dark:hover:text-foreground transition-colors text-sm font-medium"
              >
                Portfolio
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/career"
                className="text-gray-700 dark:text-muted-foreground hover:text-black dark:hover:text-foreground transition-colors text-sm font-medium"
              >
                Career
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/services"
                className="text-gray-700 dark:text-muted-foreground hover:text-black dark:hover:text-foreground transition-colors text-sm font-medium"
              >
                Services
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                href="/contact"
                className="text-gray-700 dark:text-muted-foreground hover:text-black dark:hover:text-foreground transition-colors text-sm font-medium"
              >
                Contact Us
              </Link>
            </motion.div>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-3"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="hidden md:flex"
            >
              {mounted && theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              className="hidden md:flex bg-secondary text-secondary-foreground hover:bg-secondary/90"
              onClick={() => setIsModalOpen(true)}
            >
              Book AI Consultation
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
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
              <Link
                href="/about"
                className="text-gray-700 dark:text-muted-foreground hover:text-black dark:hover:text-foreground transition-colors text-lg font-medium"
              >
                About Us
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-700 dark:text-muted-foreground hover:text-black dark:hover:text-foreground transition-colors text-lg font-medium"
              >
                Portfolio
              </Link>
              <Link
                href="/career"
                className="text-gray-700 dark:text-muted-foreground hover:text-black dark:hover:text-foreground transition-colors text-lg font-medium"
              >
                Career
              </Link>
              <Link
                href="/services"
                className="text-gray-700 dark:text-muted-foreground hover:text-black dark:hover:text-foreground transition-colors text-lg font-medium"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 dark:text-muted-foreground hover:text-black dark:hover:text-foreground transition-colors text-lg font-medium"
              >
                Contact Us
              </Link>
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  className="flex-shrink-0"
                >
                  {mounted && theme === "light" ? (
                    <Moon className="h-4 w-4" />
                  ) : (
                    <Sun className="h-4 w-4" />
                  )}
                  <span className="sr-only">Toggle theme</span>
                </Button>
                <Button
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 flex-1"
                  onClick={() => setIsModalOpen(true)}
                >
                  Book AI Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal */}
      <Dialog
        open={isModalOpen}
        onOpenChange={(open) => !open && setIsModalOpen(false)}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">
              Book AI Consultation
            </DialogTitle>
            <DialogDescription>
              Ready to transform how your organization handles information? Our
              AI experts are here to help you build solutions that make a real
              difference.
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
                alert(
                  "Thank you for your interest! We'll be in touch soon to schedule your AI consultation."
                );
                setIsModalOpen(false);
              }}
            >
              Book Consultation
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
