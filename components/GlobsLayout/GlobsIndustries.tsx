"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  School,
  Building2,
  Factory,
  Rocket,
  Landmark,
  ArrowRight,
} from "lucide-react";

interface GlobsIndustriesProps {
  data?: any;
}

export default function GlobsIndustries({ data }: GlobsIndustriesProps) {
  const title = data?.title || "Industries We Serve";
  const subtitle = data?.subtitle || "Built for Institutions. Designed for Impact.";
  const viewAllLink = data?.viewAllLink || "/industries";

  const industries = [
    {
      title: "Higher Education",
      image: "/images/ind_higher_ed.jpg",
      icon: GraduationCap,
      href: "/industries#higher-education",
    },
    {
      title: "Schools",
      image: "/images/ind_schools.jpg",
      icon: School,
      href: "/industries#schools",
    },
    {
      title: "Corporate",
      image: "/images/ind_corporate.jpg",
      icon: Building2,
      href: "/industries#corporate",
    },
    {
      title: "Industry",
      image: "/images/ind_industry.jpg",
      icon: Factory,
      href: "/industries#industry",
    },
    {
      title: "Startups & Innovation",
      image: "/images/ind_startups.jpg",
      icon: Rocket,
      href: "/industries#startups",
    },
    {
      title: "Government & Ecosystems",
      image: "/images/ind_govt.jpg",
      icon: Landmark,
      href: "/industries#government",
    },
  ];

  return (
    <section className="py-12 bg-slate-50/50">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-medium">
              {subtitle}
            </p>
          </div>
          <Link
            href={viewAllLink}
            className="text-xs sm:text-sm font-semibold text-[#0D9488] hover:text-[#0F766E] flex items-center gap-1 group"
          >
            <span>View All Industries</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* 6 Industry Image Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <Link
                key={ind.title}
                href={ind.href}
                className="group flex flex-col items-center cursor-pointer"
              >
                {/* Photo container */}
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden relative shadow-sm border border-slate-200/80 bg-slate-200">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>

                {/* Bottom pill tag badge */}
                <div className="-mt-4 relative z-10 bg-white border border-slate-200 shadow-sm px-3.5 py-1.5 rounded-full flex items-center gap-2 transition-all group-hover:border-[#0D9488] group-hover:shadow">
                  <Icon className="w-4 h-4 text-[#0D9488]" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#0D9488] whitespace-nowrap">
                    {ind.title}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
