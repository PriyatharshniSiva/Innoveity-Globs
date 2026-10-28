"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface GlobsHeroProps {
  data?: {
    categoryTag?: string;
    title?: string;
    subTags?: string;
    description?: string;
    primaryButtonText?: string;
    primaryButtonLink?: string;
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
    taglineScript?: string;
  };
}

export default function GlobsHero({ data }: GlobsHeroProps) {
  const categoryTag =
    data?.categoryTag || "INSTITUTIONAL ADVISORY & TRANSFORMATION";
  const title =
    data?.title || "Building Institutions That Are Ready for the Future";
  const subTags =
    data?.subTags ||
    "ADVISORY • ACADEMIC EXCELLENCE • INDUSTRY CONNECT • TECHNOLOGY • GROWTH";
  const description =
    data?.description ||
    "Innoveity Globs Private Limited works with educational institutions and organisations to transform strategy into measurable outcomes through advisory, academic excellence, industry partnerships, technology enablement and sustainable growth.";
  const primaryButtonText = data?.primaryButtonText || "Partner With Us";
  const primaryButtonLink = data?.primaryButtonLink || "/contact";
  const secondaryButtonText =
    data?.secondaryButtonText || "Explore Our Institutions";
  const secondaryButtonLink = data?.secondaryButtonLink || "#services";
  const taglineScript = data?.taglineScript || "Sustainable Knowledge Partner";

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#F4FAFF] via-[#EAF4FB] to-[#D5EBF8] pt-6 pb-6 lg:pt-8 lg:pb-0 border-b border-slate-100">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-4 py-4 lg:py-8 z-10">
            {/* Top Category Tag */}
            <div>
              <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.16em] text-[#008060]">
                {categoryTag}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-extrabold text-[#002B49] tracking-tight leading-[1.12]">
              Building Institutions <br className="hidden sm:inline" />
              That Are Ready for <br className="hidden sm:inline" />
              the Future
            </h1>

            {/* Sub Tags with Bullets */}
            <div className="text-[11px] sm:text-xs md:text-[13px] font-bold tracking-[0.12em] text-[#00487C] uppercase">
              {subTags}
            </div>

            {/* Description Paragraph */}
            <p className="text-slate-700 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-2xl font-normal">
              {description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href={primaryButtonLink}
                className="inline-flex items-center gap-2 bg-[#008060] hover:bg-[#006B50] text-white text-sm sm:text-[15px] font-semibold px-6 py-3 rounded-full transition-all shadow-sm hover:shadow group"
              >
                <span>{primaryButtonText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                href={secondaryButtonLink}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#005B85] border border-[#005B85] text-sm sm:text-[15px] font-semibold px-6 py-3 rounded-full transition-all group"
              >
                <span>{secondaryButtonText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Script Tagline */}
            <div className="pt-2">
              <span className="text-[#008060] italic text-sm sm:text-base font-semibold">
                {taglineScript}
              </span>
            </div>
          </div>

          {/* Right Image Column - Exact Image from Screenshot */}
          <div className="lg:col-span-6 relative flex items-end justify-end self-end -mr-4 sm:-mr-8 lg:-mr-12 xl:-mr-16">
            <div className="relative w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl">
              <img
                src="/images/hero_students_seamless.png"
                alt="Innoveity Globs - Building Institutions Ready for the Future"
                className="w-full h-auto object-contain block select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
