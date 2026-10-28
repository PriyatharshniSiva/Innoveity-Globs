"use client";

import React from "react";
import Link from "next/link";
import GlobsLogo, { TechSolutionsLogo } from "./GlobsLogo";
import { ArrowRight } from "lucide-react";

export default function GlobsFooter() {
  const quickLinksCol1 = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "What We Do", href: "/services" },
    { name: "Institutions", href: "/services#institution" },
  ];

  const quickLinksCol2 = [
    { name: "Industries", href: "/industries" },
    { name: "Our Work", href: "/case-studies" },
    { name: "Insights", href: "/knowledge-hub" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-[#07182C] text-white pt-12 pb-8 border-t border-slate-800">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 space-y-10">
        {/* Main 4-Column Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-3">
            <GlobsLogo variant="dark" />
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-5 gap-y-2.5 text-sm">
              <div className="space-y-2.5">
                {quickLinksCol1.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-slate-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="space-y-2.5">
                {quickLinksCol2.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-slate-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Technology Partner */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
              Technology Partner
            </h4>
            <div className="space-y-2.5">
              <TechSolutionsLogo variant="dark" />
              <p className="text-xs sm:text-sm text-slate-300">
                Software • AI • Automation • Digital Transformation
              </p>
              <div className="pt-1.5">
                <Link
                  href="https://innoveity.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-100 text-[#07182C] text-xs sm:text-sm font-bold px-4 py-2 rounded-full transition-all group"
                >
                  <span>Visit Tech Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Column 4: Connect With Us */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
              Connect With Us
            </h4>
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#0D9488] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28M7.86 18.5V10.13H5.07V18.5h2.79Z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="m10 15 5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73Z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                </svg>
              </a>
              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-sky-500 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-400 gap-3">
          <p>© 2025 Innoveity Globs Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
