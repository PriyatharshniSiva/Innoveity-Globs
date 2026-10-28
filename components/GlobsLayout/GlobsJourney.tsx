"use client";

import React from "react";
import {
  Search,
  Compass,
  Settings2,
  CheckSquare,
  BarChart3,
  Infinity as InfinityIcon,
  ArrowRight,
} from "lucide-react";

interface GlobsJourneyProps {
  data?: any;
}

export default function GlobsJourney({ data }: GlobsJourneyProps) {
  const title = data?.title || "Our Transformation Journey";
  const subtitle =
    data?.subtitle || "From Assessment to Sustainable Growth.";

  const steps = [
    {
      num: "01",
      title: "Assess",
      desc: "Understand the institution's current position.",
      icon: Search,
    },
    {
      num: "02",
      title: "Strategise",
      desc: "Develop a customised transformation roadmap.",
      icon: Compass,
    },
    {
      num: "03",
      title: "Transform",
      desc: "Redesign academic, operational and institutional systems.",
      icon: Settings2,
    },
    {
      num: "04",
      title: "Implement",
      desc: "Support through execution.",
      icon: CheckSquare,
    },
    {
      num: "05",
      title: "Measure",
      desc: "Track outcomes through KPIs and dashboards.",
      icon: BarChart3,
    },
    {
      num: "06",
      title: "Sustain",
      desc: "Build internal capability for continuous improvement.",
      icon: InfinityIcon,
    },
  ];

  return (
    <section id="journey" className="py-14 bg-white border-b border-slate-100">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 space-y-10">
        {/* Header */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            {subtitle}
          </p>
        </div>

        {/* 6 Step Process Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;

            return (
              <div key={step.num} className="flex flex-col relative group">
                {/* Icon & Arrow Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-13 h-13 rounded-full border border-teal-200/80 bg-teal-50/50 text-[#0D9488] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0D9488] group-hover:text-white shadow-2xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Arrow indicator between steps (desktop only) */}
                  {!isLast && (
                    <div className="hidden lg:flex items-center text-slate-300 flex-1 justify-center pl-2">
                      <ArrowRight className="w-4.5 h-4.5 text-slate-300" />
                    </div>
                  )}
                </div>

                {/* Step Number & Title */}
                <div className="space-y-1.5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs sm:text-sm font-extrabold text-[#0D9488]">
                      {step.num}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#0B2545]">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pr-2">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
