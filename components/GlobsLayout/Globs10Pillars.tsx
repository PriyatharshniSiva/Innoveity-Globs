"use client";

import React from "react";
import Link from "next/link";
import {
  Landmark,
  Compass,
  GraduationCap,
  ShieldCheck,
  Cpu,
  FlaskConical,
  Lightbulb,
  Handshake,
  Briefcase,
  Megaphone,
  Layers,
  ArrowRight,
} from "lucide-react";

interface Globs10PillarsProps {
  data?: any;
}

export default function Globs10Pillars({ data }: Globs10PillarsProps) {
  const title = data?.title || "The 10-Pillar Transformation Model";
  const subtitle = data?.subtitle || "A structured approach. Lasting impact.";
  const buttonText = data?.buttonText || "Explore the 10-Pillar Model";
  const buttonLink = data?.buttonLink || "/about#pillars";

  const pillars = [
    {
      num: "01",
      title: "Strategy &\nGovernance",
      icon: Compass,
      bgColor: "bg-emerald-50 text-emerald-600 border-emerald-200",
    },
    {
      num: "02",
      title: "Academic\nExcellence",
      icon: GraduationCap,
      bgColor: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      num: "03",
      title: "Accreditation &\nQuality",
      icon: ShieldCheck,
      bgColor: "bg-teal-50 text-teal-600 border-teal-200",
    },
    {
      num: "04",
      title: "Research, Innovation\n& IPR",
      icon: Cpu,
      bgColor: "bg-purple-50 text-purple-600 border-purple-200",
    },
    {
      num: "05",
      title: "Faculty\nDevelopment",
      icon: FlaskConical,
      bgColor: "bg-cyan-50 text-cyan-600 border-cyan-200",
    },
    {
      num: "06",
      title: "Student Development\n& Employability",
      icon: Lightbulb,
      bgColor: "bg-amber-50 text-amber-600 border-amber-200",
    },
    {
      num: "07",
      title: "Industry & Corporate\nRelations",
      icon: Handshake,
      bgColor: "bg-indigo-50 text-indigo-600 border-indigo-200",
    },
    {
      num: "08",
      title: "Placements &\nCareer Development",
      icon: Briefcase,
      bgColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      num: "09",
      title: "Branding, Outreach &\nDigital Presence",
      icon: Megaphone,
      bgColor: "bg-rose-50 text-rose-600 border-rose-200",
    },
    {
      num: "10",
      title: "Technology &\nTransformation",
      icon: Layers,
      bgColor: "bg-sky-50 text-sky-600 border-sky-200",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-[#0D9488] flex items-center justify-center shrink-0">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
                {title}
              </h2>
              <p className="text-sm sm:text-base text-slate-500 font-medium">
                {subtitle}
              </p>
            </div>
          </div>

          <Link
            href={buttonLink}
            className="inline-flex items-center gap-2 self-start sm:self-auto border border-slate-300 hover:border-[#0D9488] hover:text-[#0D9488] text-slate-700 text-sm font-semibold px-5 py-2.5 rounded-full transition-all group"
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* 10 Pillars Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-3.5">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="bg-white hover:bg-slate-50/70 border border-slate-200/80 rounded-xl p-3.5 flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer group"
              >
                {/* Icon Circle */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center border mb-2.5 transition-transform duration-300 group-hover:scale-110 shadow-2xs ${pillar.bgColor}`}
                >
                  <Icon className="w-5.5 h-5.5" />
                </div>

                {/* Number */}
                <span className="text-xs sm:text-[13px] font-extrabold text-slate-400 group-hover:text-[#0D9488] transition-colors">
                  {pillar.num}
                </span>

                {/* Title */}
                <span className="mt-1.5 text-xs sm:text-[13px] font-bold text-slate-800 leading-snug whitespace-pre-line">
                  {pillar.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
