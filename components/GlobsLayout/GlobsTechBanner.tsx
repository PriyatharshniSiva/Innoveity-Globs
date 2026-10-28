"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TechSolutionsLogo } from "./GlobsLogo";

interface GlobsTechBannerProps {
  data?: {
    tag?: string;
    heading?: string;
    brandTitle?: string;
    stackList?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
  };
}

export default function GlobsTechBanner({ data }: GlobsTechBannerProps) {
  const tag = data?.tag || "A TECHNOLOGY COMPANY BY THE INNOVEITY GROUP";
  const heading =
    data?.heading || "Need Technology to Power Your Institution?";
  const brandTitle = data?.brandTitle || "Meet INNOVEITY TECH SOLUTIONS";
  const stackList =
    data?.stackList ||
    "Software • AI • Automation • Portals • CRM • Dashboards • Digital Platforms";
  const description =
    data?.description ||
    "From advisory to implementation — we can help you transform the system and build the technology behind it.";
  const buttonText =
    data?.buttonText || "Explore Innoveity Tech Solutions";
  const buttonLink = data?.buttonLink || "https://innoveity.com";

  return (
    <section className="py-6 px-4 sm:px-8 lg:px-12 xl:px-16 w-full">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#071F36] via-[#0A2744] to-[#0A2E4D] border border-cyan-950/60 p-6 sm:p-8 lg:p-9 text-white shadow-lg">
        {/* Subtle grid background overlay */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #38BDF8 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-3">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#38BDF8]">
              {tag}
            </span>
            <div className="space-y-1.5">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-snug">
                {heading}
              </h3>
              <p className="text-lg sm:text-2xl font-bold text-[#34D399]">
                {brandTitle}
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-medium tracking-wide">
              {stackList}
            </p>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 lg:pl-8 lg:border-l border-white/10">
            <div className="space-y-3.5 max-w-sm">
              <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed font-normal">
                {description}
              </p>
              <Link
                href={buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#34D399] hover:bg-[#10B981] text-[#0A2342] text-sm font-bold px-6 py-3 rounded-full transition-all shadow hover:shadow-md group"
              >
                <span>{buttonText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Tech Logo */}
            <div className="shrink-0 pt-2 sm:pt-0">
              <TechSolutionsLogo variant="dark" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
