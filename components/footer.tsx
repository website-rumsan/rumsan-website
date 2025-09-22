"use client";

import { Facebook, Linkedin, Twitter } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = !mounted
    ? "https://assets.rumsan.net/rahat/rumsan-logo.png"
    : theme === "dark"
    ? "https://assets.rumsan.net/rumsan-group/footer-logo-600.png"
    : "https://assets.rumsan.net/rahat/rumsan-logo.png";
  const logoHeightClass = !mounted
    ? "h-16"
    : theme === "dark"
    ? "h-20"
    : "h-32";

  return (
    <footer className="py-16 border-t border-border relative overflow-hidden bg-background dark:bg-slate-900">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img
                src={logoSrc}
                alt="Rumsan Logo"
                className={`${logoHeightClass} w-auto`}
              />
            </div>
            <p className="text-foreground/80 dark:text-muted-foreground mb-6">
              Rumsan is a frontier technology focused on social impact.
            </p>

            <h6 className="font-heading font-bold text-lg mb-4 text-foreground dark:text-white">
              Our Products
            </h6>
            <div className="flex gap-4 mb-6">
              <a href="https://rahat.io/" target="_blank" rel="noreferrer">
                <img
                  src="https://assets.rumsan.net/rumsan-group/rumsan-footer-rahat.png"
                  alt="rahat logo"
                  className="w-16 h-auto hover:opacity-80 transition-opacity"
                />
              </a>
              <a href="https://esatya.io/" target="_blank" rel="noreferrer">
                <img
                  src="https://assets.rumsan.net/rumsan-group/vertical-esatya-footer-white-colorful-rumsan.png"
                  alt="esatya logo"
                  className="w-16 h-auto hover:opacity-80 transition-opacity"
                />
              </a>
              <a
                href="https://hamrolifebank.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://assets.rumsan.net/rumsan-group/hlb-blk-rumsan.png"
                  alt="hamro lifebank logo"
                  className="w-24 h-auto hover:opacity-80 transition-opacity"
                />
              </a>
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-foreground/70 dark:text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-foreground/70 dark:text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-foreground/70 dark:text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-foreground dark:text-white">
              POLICIES
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-foreground/80 dark:text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policies{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/80 dark:text-muted-foreground hover:text-foreground transition-colors"
                >
                  Modern Slavery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/80 dark:text-muted-foreground hover:text-foreground transition-colors"
                >
                  Environmental Sustainability Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/80 dark:text-muted-foreground hover:text-foreground transition-colors"
                >
                  Bribery Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/80 dark:text-muted-foreground hover:text-foreground transition-colors"
                >
                  Child Protection and Vulnerable Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/80 dark:text-muted-foreground hover:text-foreground transition-colors"
                >
                  Whistleblowing and Incident Reporting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/80 dark:text-muted-foreground hover:text-foreground transition-colors"
                >
                  Guidelines
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-foreground dark:text-white">
              SDG COMPLIANCES
            </h4>
            <div
              className="insta-gallary"
              style={{ display: "flex", gap: "20px" }}
            >
              <img
                src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/sdc-compliances-rahat-01.jpg"
                alt="sdc-compliances-1.jpg"
                style={{ width: "100px" }}
                className="mt-2"
              />

              <img
                src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/sdc-compliances-rahat-05.jpg"
                alt="sdc-compliances-5.jpg"
                style={{ width: "100px" }}
                className="mt-2"
              />

              <img
                src="https://assets.rumsan.net/rumsan-group/sdg-9-rahat.jpg"
                alt="sdc-compliances-9.jpg"
                style={{ width: "100px" }}
                className="mt-2"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/80 dark:text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Rumsan Associates Pvt Ltd. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-foreground/80 dark:text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-foreground/80 dark:text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
