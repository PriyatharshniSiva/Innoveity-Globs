"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

interface GlobsBottomCtaProps {
  data?: {
    title?: string;
    description?: string;
    primaryBtnText?: string;
    primaryBtnLink?: string;
    secondaryBtnText?: string;
    secondaryBtnLink?: string;
    bgImage?: string;
  };
}

export default function GlobsBottomCta({ data }: GlobsBottomCtaProps) {
  const title =
    data?.title ||
    "Your Institution Has Potential. Let's Build the System to Unlock It.";
  const description =
    data?.description ||
    "Whether you are looking to improve academic quality, strengthen accreditation readiness, build industry partnerships or digitally enable your institution — Innoveity can work with you.";
  const primaryBtnText = data?.primaryBtnText || "Schedule a Consultation";
  const primaryBtnLink = data?.primaryBtnLink || "/contact";
  const secondaryBtnText =
    data?.secondaryBtnText || "Download Company Profile";
  const secondaryBtnLink = data?.secondaryBtnLink || "/brochure.jpg";
  const bgImage = data?.bgImage || "/images/cta_mountains.jpg";

  return (
    <section className="py-8 px-4 sm:px-8 lg:px-12 xl:px-16 w-full">
      <div className="relative overflow-hidden rounded-2xl min-h-[280px] sm:min-h-[300px] flex items-center shadow-xl">
        {/* Background Mountain Photo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        {/* Navy/Blue Gradient Overlay matching screenshot */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071F36]/95 via-[#092847]/85 to-[#0B2545]/60" />

        {/* Content Box */}
        <div className="relative z-10 p-6 sm:p-10 lg:p-12 max-w-3xl text-white space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug drop-shadow-sm">
            {title}
          </h2>

          <p className="text-sm sm:text-base lg:text-[17px] text-slate-100/90 leading-relaxed max-w-2xl font-normal">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-3.5 pt-3">
            <Link
              href={primaryBtnLink}
              className="inline-flex items-center gap-2 bg-[#34D399] hover:bg-[#10B981] text-[#0A2342] text-sm sm:text-base font-bold px-7 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg group"
            >
              <span>{primaryBtnText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <a
              href={secondaryBtnLink}
              download
              className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/60 text-sm sm:text-base font-semibold px-6 py-3.5 rounded-full transition-all group"
            >
              <Download className="w-4 h-4" />
              <span>{secondaryBtnText}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
