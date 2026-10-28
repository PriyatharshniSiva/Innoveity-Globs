"use client";

import React from "react";
import Link from "next/link";
import {
  Landmark,
  GraduationCap,
  ShieldCheck,
  Share2,
  Laptop,
  Briefcase,
  Users,
  Leaf,
  Scale,
  Cloud,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

interface GlobsServicesColumnsProps {
  data?: any;
}

export default function GlobsServicesColumns({ data }: GlobsServicesColumnsProps) {
  const institutionServices = [
    {
      title: "Institutional Advisory",
      desc: "Strategic planning, transformation, academic advisory and governance.",
      icon: Landmark,
    },
    {
      title: "Academic Excellence",
      desc: "Curriculum, OBE, faculty development, research and teaching-learning enhancement.",
      icon: GraduationCap,
    },
    {
      title: "Accreditation & Quality",
      desc: "NAAC, NBA, NIRF, IQAC systems, documentation and audits.",
      icon: ShieldCheck,
    },
    {
      title: "Industry, Placements & Growth",
      desc: "Industry partnerships, MoUs, corporate engagement, placements, internships and internationalisation.",
      icon: Share2,
    },
    {
      title: "Digital & Technology Transformation",
      desc: "ERP/CRM, automation, portals, dashboards, digital marketing and custom solutions.",
      icon: Laptop,
    },
  ];

  const industryServices = [
    {
      title: "Corporate Training",
      desc: "Customised L&D, leadership training and technical upskilling with measurable ROI.",
      icon: Users,
    },
    {
      title: "ESG Consulting",
      desc: "Sustainability reporting, carbon footprint analysis and CSR compliance.",
      icon: Leaf,
    },
    {
      title: "Legal Audits",
      desc: "Regulatory compliance, labor laws and corporate governance through expert auditing.",
      icon: Scale,
    },
    {
      title: "Digital Solutions",
      desc: "Technology consulting, process automation and tailored IT solutions.",
      icon: Cloud,
    },
    {
      title: "Upskilling & Reskilling",
      desc: "Future-ready skills for individuals and organisations.",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="services" className="py-12 bg-slate-50/50">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* LEFT: Institution Services */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-sm flex flex-col justify-between">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-[#0D9488] flex items-center justify-center shrink-0">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0B2545]">
                      Institution Services
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                      Stronger Institutions. Greater Impact.
                    </p>
                  </div>
                </div>
                <Link
                  href="/services#institution"
                  className="text-xs sm:text-sm font-semibold text-[#0D9488] hover:text-[#0F766E] flex items-center gap-1 group"
                >
                  <span>View All</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              {/* 5 Cards Row */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3.5">
                {institutionServices.map((svc) => {
                  const Icon = svc.icon;
                  return (
                    <div
                      key={svc.title}
                      className="bg-[#F0FDFA] hover:bg-[#CCFBF1]/50 border border-teal-100/70 rounded-xl p-3.5 flex flex-col transition-all duration-200 hover:-translate-y-0.5 shadow-2xs group cursor-pointer"
                    >
                      <div className="w-9 h-9 rounded-lg bg-white text-[#0D9488] shadow-2xs flex items-center justify-center mb-2.5 shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-tight mb-1.5">
                        {svc.title}
                      </h4>
                      <p className="text-xs sm:text-[12.5px] text-slate-600 leading-relaxed line-clamp-4">
                        {svc.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: Industry Services */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-sm flex flex-col justify-between">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0B2545]">
                      Industry Services
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                      Build Capabilities. Drive Growth.
                    </p>
                  </div>
                </div>
                <Link
                  href="/services#industry"
                  className="text-xs sm:text-sm font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-1 group"
                >
                  <span>View All</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              {/* 5 Cards Row */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3.5">
                {industryServices.map((svc) => {
                  const Icon = svc.icon;
                  return (
                    <div
                      key={svc.title}
                      className="bg-[#FAF5FF] hover:bg-[#F3E8FF]/60 border border-purple-100/70 rounded-xl p-3.5 flex flex-col transition-all duration-200 hover:-translate-y-0.5 shadow-2xs group cursor-pointer"
                    >
                      <div className="w-9 h-9 rounded-lg bg-white text-purple-600 shadow-2xs flex items-center justify-center mb-2.5 shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-tight mb-1.5">
                        {svc.title}
                      </h4>
                      <p className="text-xs sm:text-[12.5px] text-slate-600 leading-relaxed line-clamp-4">
                        {svc.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
