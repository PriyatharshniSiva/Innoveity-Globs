"use client";

import React from "react";
import Link from "next/link";

interface GlobsLogoProps {
  variant?: "light" | "dark";
  className?: string;
  showSubtitle?: boolean;
}

export default function GlobsLogo({
  variant = "light",
  className = "",
  showSubtitle = true,
}: GlobsLogoProps) {
  const isDark = variant === "dark";

  // Default height if not overridden by className
  const heightClass = className.match(/\bh-\S+/)
    ? ""
    : "h-13 sm:h-15 lg:h-[64px]";

  return (
    <Link
      href="/"
      className={`inline-flex items-center select-none group transition-transform duration-200 hover:scale-[1.02] ${heightClass} ${className}`}
      aria-label="Innoveity Globs Home"
    >
      <svg
        viewBox={showSubtitle ? "6 5 208 65" : "6 5 208 49"}
        className="h-full w-auto shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`iStem-${variant}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="60%" stopColor="#0D9488" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>

          <radialGradient id={`globeGrad-${variant}`} cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="45%" stopColor="#0D9488" />
            <stop offset="90%" stopColor="#047857" />
            <stop offset="100%" stopColor="#064E3B" />
          </radialGradient>
        </defs>

        {/* Stylized 'i' icon with green dot & tapered stem */}
        <circle cx="14" cy="13" r="5.5" fill="#10B981" />
        <path
          d="M 9.5 23 C 9.5 22 19 22 19 23 V 43 C 19 45.5 17.5 48 15.5 50.5 L 9.8 54.5 C 9 51 8.5 38 9.5 23 Z"
          fill={isDark ? "#FFFFFF" : `url(#iStem-${variant})`}
        />

        {/* Main Brand Name: INNOVEITY */}
        {/* 'INN' */}
        <text
          x="32"
          y="39"
          fontFamily="Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontSize="26"
          fontWeight="900"
          fill={isDark ? "#FFFFFF" : "#0B2545"}
          letterSpacing="-0.5"
        >
          INN
        </text>

        {/* Letter 'O' as stylized 3D globe / sphere */}
        <g transform="translate(83, 18.5)">
          <circle
            cx="11"
            cy="11"
            r="9.5"
            stroke={isDark ? "#FFFFFF" : "#0B2545"}
            strokeWidth="2.8"
            fill="none"
          />
          <circle cx="11" cy="11" r="7.2" fill={`url(#globeGrad-${variant})`} />
          <path
            d="M6.5 8.5 Q9.5 6.5 12.5 9.5 T15.5 8.5"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
            opacity="0.65"
          />
          <path
            d="M7.5 13 Q10.5 15 13.5 12"
            stroke="#FFFFFF"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
          />
          <ellipse cx="13.5" cy="8" rx="1.8" ry="1.2" fill="#A7F3D0" opacity="0.95" />
        </g>

        {/* 'VEITY' */}
        <text
          x="109"
          y="39"
          fontFamily="Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontSize="26"
          fontWeight="900"
          fill={isDark ? "#FFFFFF" : "#0B2545"}
          letterSpacing="-0.5"
        >
          VEITY
        </text>

        {/* Registered symbol ® */}
        <text
          x="192"
          y="24"
          fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
          fontSize="9"
          fontWeight="700"
          fill={isDark ? "#FFFFFF" : "#0B2545"}
        >
          ®
        </text>

        {/* GLOBS PRIVATE LIMITED */}
        <text
          x="33"
          y="51.5"
          fontFamily="Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontSize="10"
          fontWeight="800"
          fill={isDark ? "#FFFFFF" : "#003B66"}
          letterSpacing="2.2"
        >
          GLOBS PRIVATE LIMITED
        </text>

        {/* Sustainable Knowledge Partner */}
        {showSubtitle && (
          <text
            x="33"
            y="65"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontStyle="italic"
            fontSize="10"
            fontWeight="600"
            fill={isDark ? "#93C5FD" : "#006699"}
            letterSpacing="0.2"
          >
            Sustainable Knowledge Partner
          </text>
        )}
      </svg>
    </Link>
  );
}

export function TechSolutionsLogo({
  variant = "dark",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const isDark = variant === "dark";

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* High-tech starburst cluster */}
      <div className="relative w-8 h-8 shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <circle cx="20" cy="8" r="3" fill="#38BDF8" />
          <circle cx="9" cy="18" r="3" fill="#34D399" />
          <circle cx="31" cy="18" r="3" fill="#34D399" />
          <circle cx="13" cy="32" r="3" fill="#38BDF8" />
          <circle cx="27" cy="32" r="3" fill="#38BDF8" />
          <circle cx="20" cy="20" r="3.5" fill="#FFFFFF" />

          <line x1="20" y1="8" x2="20" y2="20" stroke="#38BDF8" strokeWidth="1.5" />
          <line x1="9" y1="18" x2="20" y2="20" stroke="#34D399" strokeWidth="1.5" />
          <line x1="31" y1="18" x2="20" y2="20" stroke="#34D399" strokeWidth="1.5" />
          <line x1="13" y1="32" x2="20" y2="20" stroke="#38BDF8" strokeWidth="1.5" />
          <line x1="27" y1="32" x2="20" y2="20" stroke="#38BDF8" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="flex flex-col leading-tight">
        <span
          className={`font-black text-lg tracking-tight ${
            isDark ? "text-white" : "text-[#0B2545]"
          }`}
        >
          INNOVEITY
        </span>
        <span className="text-[10px] font-bold tracking-[0.18em] text-[#38BDF8] uppercase">
          TECH SOLUTIONS PVT. LTD.
        </span>
      </div>
    </div>
  );
}
