"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
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
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
                className="h-12 sm:h-14 md:h-16 w-auto"
              />
            </Link>
          </motion.div>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link
                href="/about"
                className="text-gray-700 dark:text-muted-foreground hover:text-black dark:hover:text-foreground transition-colors text-sm font-medium whitespace-nowrap"
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
                className="text-gray-700 dark:text-muted-foreground hover:text-black dark:hover:text-foreground transition-colors text-sm font-medium whitespace-nowrap"
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
                className="text-gray-700 dark:text-muted-foreground hover:text-black dark:hover:text-foreground transition-colors text-sm font-medium whitespace-nowrap"
              >
                Career
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
              ref={servicesDropdownRef}
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-gray-700 dark:text-muted-foreground hover:text-black dark:hover:text-foreground transition-colors text-sm font-medium"
                onClick={() =>
                  setIsServicesDropdownOpen(!isServicesDropdownOpen)
                }
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isServicesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg z-50"
                  >
                    <div className="py-2">
                      <Link
                        href="/services"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-muted-foreground hover:bg-muted hover:text-black dark:hover:text-foreground transition-colors"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        <div className="font-medium">Rumsan Services</div>
                      </Link>
                      <Link
                        href="/ai-solutions"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-muted-foreground hover:bg-muted hover:text-black dark:hover:text-foreground transition-colors"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        <div className="font-medium">AI Solutions</div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                href="/contact"
                className="text-gray-700 dark:text-muted-foreground hover:text-black dark:hover:text-foreground transition-colors text-sm font-medium whitespace-nowrap"
              >
                Contact Us
              </Link>
            </motion.div>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-2 sm:gap-3"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="hidden lg:flex"
            >
              {mounted && theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              className="hidden lg:flex bg-gradient-to-r from-[#3EC4EE] to-[#253E93] hover:from-[#C7F7FF] hover:to-[#3EC4EE] transition-all duration-300 text-xs xl:text-sm px-3 xl:px-4"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="hidden xl:inline">Book AI Consultation</span>
              <span className="xl:hidden">Book Demo</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
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
            className="fixed top-[72px] left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border lg:hidden"
          >
            <div className="container mx-auto px-4 py-4 sm:py-6">
              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-col sm:gap-6">
                  <Link
                    href="/about"
                    className="text-gray-700 dark:text-muted-foreground hover:text-black dark:hover:text-foreground transition-colors text-base sm:text-lg font-medium py-2 px-3 rounded-lg hover:bg-muted/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/portfolio"
                    className="text-gray-700 dark:text-muted-foreground hover:text-black dark:hover:text-foreground transition-colors text-base sm:text-lg font-medium py-2 px-3 rounded-lg hover:bg-muted/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="/career"
                    className="text-gray-700 dark:text-muted-foreground hover:text-black dark:hover:text-foreground transition-colors text-base sm:text-lg font-medium py-2 px-3 rounded-lg hover:bg-muted/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Career
                  </Link>
                  <Link
                    href="/contact"
                    className="text-gray-700 dark:text-muted-foreground hover:text-black dark:hover:text-foreground transition-colors text-base sm:text-lg font-medium py-2 px-3 rounded-lg hover:bg-muted/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>

                <div className="space-y-3 border-t border-border pt-4">
                  <div className="text-gray-700 dark:text-muted-foreground text-base sm:text-lg font-medium px-3">
                    Services
                  </div>
                  <div className="grid grid-cols-1 gap-2 pl-3">
                    <Link
                      href="/services"
                      className="block text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-foreground transition-colors text-sm sm:text-base py-2 px-3 rounded-lg hover:bg-muted/50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="font-medium">Rumsan Services</div>
                    </Link>
                    <Link
                      href="/ai-solutions"
                      className="block text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-foreground transition-colors text-sm sm:text-base py-2 px-3 rounded-lg hover:bg-muted/50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="font-medium">AI Solutions</div>
                    </Link>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 border-t border-border pt-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      setTheme(theme === "light" ? "dark" : "light")
                    }
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
                    className="bg-gradient-to-r from-[#3EC4EE] to-[#253E93] hover:from-[#C7F7FF] hover:to-[#3EC4EE] transition-all duration-300 flex-1 text-sm"
                    onClick={() => {
                      setIsModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                  >
                    Book AI Consultation
                  </Button>
                </div>
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
              className="bg-gradient-to-r from-[#3EC4EE] to-[#253E93] hover:from-[#C7F7FF] hover:to-[#3EC4EE] transition-all duration-300"
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
