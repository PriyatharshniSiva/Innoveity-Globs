"use client";

import React from "react";
import {
  Compass,
  GraduationCap,
  Award,
  Building2,
  UserCheck,
  Atom,
  FileCheck2,
  Laptop,
  Users,
  TrendingUp,
} from "lucide-react";

interface GlobsChallengesProps {
  data?: {
    title?: string;
    description?: string;
    items?: Array<{
      id: string;
      name: string;
      icon: string;
      color?: string;
    }>;
  };
}

export default function GlobsChallenges({ data }: GlobsChallengesProps) {
  const title =
    data?.title || "From Institutional Challenges to Sustainable Transformation";
  const description =
    data?.description ||
    "Institutions today need more than consultants. They need a partner who understands academics, accreditation, administration, industry, technology, placements, branding and growth. Innoveity brings these capabilities together under one transformation framework.";

  const capabilities = [
    {
      id: "strategy",
      name: "Strategy",
      icon: Compass,
      bgColor: "bg-sky-50 text-sky-600 border-sky-100",
    },
    {
      id: "academics",
      name: "Academics",
      icon: GraduationCap,
      bgColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      id: "accreditation",
      name: "Accreditation",
      icon: Award,
      bgColor: "bg-purple-50 text-purple-600 border-purple-100",
    },
    {
      id: "industry",
      name: "Industry",
      icon: Building2,
      bgColor: "bg-teal-50 text-teal-600 border-teal-100",
    },
    {
      id: "placements",
      name: "Placements",
      icon: UserCheck,
      bgColor: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
      id: "research",
      name: "Research",
      icon: Atom,
      bgColor: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      id: "branding",
      name: "Branding",
      icon: FileCheck2,
      bgColor: "bg-green-50 text-green-600 border-green-100",
    },
    {
      id: "technology",
      name: "Technology",
      icon: Laptop,
      bgColor: "bg-indigo-50 text-indigo-600 border-indigo-100",
    },
    {
      id: "people",
      name: "People",
      icon: Users,
      bgColor: "bg-orange-50 text-orange-600 border-orange-100",
    },
    {
      id: "growth",
      name: "Growth",
      icon: TrendingUp,
      bgColor: "bg-teal-50 text-teal-700 border-teal-100",
    },
  ];

  return (
    <section className="py-10 bg-white border-t border-slate-100">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-4 xl:col-span-4 space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-snug">
              {title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base lg:text-[16.5px] leading-relaxed">
              {description}
            </p>
          </div>

          {/* Right 10-Item Capability Grid */}
          <div className="lg:col-span-8 xl:col-span-8">
            <div className="grid grid-cols-5 sm:grid-cols-5 gap-y-6 gap-x-3 sm:gap-x-5 text-center">
              {capabilities.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <div
                      className={`w-13 h-13 sm:w-16 sm:h-16 lg:w-[70px] lg:h-[70px] rounded-full flex items-center justify-center border transition-all duration-300 group-hover:scale-110 shadow-sm ${item.bgColor}`}
                    >
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                    </div>
                    <span className="mt-2.5 text-xs sm:text-sm font-bold text-slate-800 transition-colors group-hover:text-[#0D9488]">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
