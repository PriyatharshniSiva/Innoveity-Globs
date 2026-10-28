"use client";

import React from "react";
import {
  GraduationCap,
  Handshake,
  Wrench,
  Code2,
  Network,
  Leaf,
} from "lucide-react";

interface GlobsWhyChooseProps {
  data?: any;
}

export default function GlobsWhyChoose({ data }: GlobsWhyChooseProps) {
  const title = data?.title || "Why Choose Innoveity?";
  const subtitle = data?.subtitle || "One Partner. Multiple Capabilities.";

  const capabilities = [
    {
      title: "Academic\nUnderstanding",
      icon: GraduationCap,
    },
    {
      title: "Industry\nConnect",
      icon: Handshake,
    },
    {
      title: "Implementation\nCapability",
      icon: Wrench,
    },
    {
      title: "Technology\nIntegration",
      icon: Code2,
    },
    {
      title: "Multi-Domain\nExpertise",
      icon: Network,
    },
    {
      title: "Sustainable\nApproach",
      icon: Leaf,
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 space-y-8">
        {/* Header */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            {subtitle}
          </p>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-teal-50/70 border border-teal-100 text-[#0D9488] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0D9488] group-hover:text-white shadow-2xs mb-3.5">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xs sm:text-sm md:text-[15px] font-bold text-slate-800 group-hover:text-[#0D9488] transition-colors leading-snug whitespace-pre-line">
                  {cap.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
