import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding MySQL database for Innoveity Globs...");

  // 1. Seed or Upsert Admin User
  const hashedPassword = await bcrypt.hash("admin@123", 10);
  await prisma.admin.upsert({
    where: { email: "admin@innoveity.com" },
    update: { password: hashedPassword, name: "Innoveity Admin" },
    create: {
      email: "admin@innoveity.com",
      password: hashedPassword,
      name: "Innoveity Admin",
    },
  });

  // Also create "admin" username if not present
  const adminExists = await prisma.admin.findFirst({ where: { email: "admin" } });
  if (!adminExists) {
    await prisma.admin.create({
      data: {
        email: "admin",
        password: hashedPassword,
        name: "Super Admin",
      },
    });
  }

  // 2. Exact Home Content matching the screenshot
  const homeData = {
    hero: {
      categoryTag: "INSTITUTIONAL ADVISORY & TRANSFORMATION",
      title: "Building Institutions That Are Ready for the Future",
      subTags: "ADVISORY • ACADEMIC EXCELLENCE • INDUSTRY CONNECT • TECHNOLOGY • GROWTH",
      description: "Innoveity Globs Private Limited works with educational institutions and organisations to transform strategy into measurable outcomes through advisory, academic excellence, industry partnerships, technology enablement and sustainable growth.",
      primaryButtonText: "Partner With Us",
      primaryButtonLink: "/contact",
      secondaryButtonText: "Explore Our Institutions",
      secondaryButtonLink: "#services",
      taglineScript: "Sustainable Knowledge Partner",
      cornerBadgeTitle: "Better Institutions",
      cornerBadgeSubtitle: "Brighter Futures",
      image: "/images/hero_students_seamless.png"
    },
    challenges: {
      title: "From Institutional Challenges to Sustainable Transformation",
      description: "Institutions today need more than consultants. They need a partner who understands academics, accreditation, administration, industry, technology, placements, branding and growth. Innoveity brings these capabilities together under one transformation framework.",
      items: [
        { id: "strategy", name: "Strategy", icon: "Compass", color: "text-sky-600 bg-sky-50 border-sky-200" },
        { id: "academics", name: "Academics", icon: "GraduationCap", color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
        { id: "accreditation", name: "Accreditation", icon: "Award", color: "text-purple-600 bg-purple-50 border-purple-200" },
        { id: "industry", name: "Industry", icon: "Building2", color: "text-teal-600 bg-teal-50 border-teal-200" },
        { id: "placements", name: "Placements", icon: "UserCheck", color: "text-amber-600 bg-amber-50 border-amber-200" },
        { id: "research", name: "Research", icon: "Atom", color: "text-blue-600 bg-blue-50 border-blue-200" },
        { id: "branding", name: "Branding", icon: "Sparkles", color: "text-green-600 bg-green-50 border-green-200" },
        { id: "technology", name: "Technology", icon: "Laptop", color: "text-indigo-600 bg-indigo-50 border-indigo-200" },
        { id: "people", name: "People", icon: "Users", color: "text-orange-600 bg-orange-50 border-orange-200" },
        { id: "growth", name: "Growth", icon: "TrendingUp", color: "text-teal-700 bg-teal-50 border-teal-200" }
      ]
    },
    servicesColumns: {
      institution: {
        title: "Institution Services",
        subtitle: "Stronger Institutions. Greater Impact.",
        icon: "Landmark",
        viewAllLink: "/services#institution",
        services: [
          {
            title: "Institutional Advisory",
            desc: "Strategic planning, transformation, academic advisory and governance.",
            icon: "Landmark"
          },
          {
            title: "Academic Excellence",
            desc: "Curriculum, OBE, faculty development, research and teaching-learning enhancement.",
            icon: "GraduationCap"
          },
          {
            title: "Accreditation & Quality",
            desc: "NAAC, NBA, NIRF, IQAC systems, documentation and audits.",
            icon: "ShieldCheck"
          },
          {
            title: "Industry, Placements & Growth",
            desc: "Industry partnerships, MoUs, corporate engagement, placements, internships and internationalisation.",
            icon: "Share2"
          },
          {
            title: "Digital & Technology Transformation",
            desc: "ERP/CRM, automation, portals, dashboards, digital marketing and custom solutions.",
            icon: "Laptop"
          }
        ]
      },
      industry: {
        title: "Industry Services",
        subtitle: "Build Capabilities. Drive Growth.",
        icon: "Briefcase",
        viewAllLink: "/services#industry",
        services: [
          {
            title: "Corporate Training",
            desc: "Customised L&D, leadership training and technical upskilling with measurable ROI.",
            icon: "Users"
          },
          {
            title: "ESG Consulting",
            desc: "Sustainability reporting, carbon footprint analysis and CSR compliance.",
            icon: "Leaf"
          },
          {
            title: "Legal Audits",
            desc: "Regulatory compliance, labor laws and corporate governance through expert auditing.",
            icon: "Scale"
          },
          {
            title: "Digital Solutions",
            desc: "Technology consulting, process automation and tailored IT solutions.",
            icon: "Cloud"
          },
          {
            title: "Upskilling & Reskilling",
            desc: "Future-ready skills for individuals and organisations.",
            icon: "TrendingUp"
          }
        ]
      }
    },
    techBanner: {
      tag: "A TECHNOLOGY COMPANY BY THE INNOVEITY GROUP",
      heading: "Need Technology to Power Your Institution?",
      brandTitle: "Meet INNOVEITY TECH SOLUTIONS",
      stackList: "Software • AI • Automation • Portals • CRM • Dashboards • Digital Platforms",
      description: "From advisory to implementation — we can help you transform the system and build the technology behind it.",
      buttonText: "Explore Innoveity Tech Solutions",
      buttonLink: "https://innoveity.com"
    },
    pillarsModel: {
      title: "The 10-Pillar Transformation Model",
      subtitle: "A structured approach. Lasting impact.",
      buttonText: "Explore the 10-Pillar Model",
      buttonLink: "/about#pillars",
      pillars: [
        { num: "01", title: "Strategy &\nGovernance", icon: "Compass", color: "emerald" },
        { num: "02", title: "Academic\nExcellence", icon: "GraduationCap", color: "blue" },
        { num: "03", title: "Accreditation &\nQuality", icon: "ShieldCheck", color: "teal" },
        { num: "04", title: "Research, Innovation\n& IPR", icon: "Cpu", color: "purple" },
        { num: "05", title: "Faculty\nDevelopment", icon: "FlaskConical", color: "cyan" },
        { num: "06", title: "Student Development\n& Employability", icon: "Lightbulb", color: "amber" },
        { num: "07", title: "Industry & Corporate\nRelations", icon: "Handshake", color: "indigo" },
        { num: "08", title: "Placements &\nCareer Development", icon: "Briefcase", color: "emerald" },
        { num: "09", title: "Branding, Outreach &\nDigital Presence", icon: "Megaphone", color: "rose" },
        { num: "10", title: "Technology &\nTransformation", icon: "Layers", color: "sky" }
      ]
    },
    industriesWeServe: {
      title: "Industries We Serve",
      subtitle: "Built for Institutions. Designed for Impact.",
      viewAllLink: "/industries",
      items: [
        { title: "Higher Education", image: "/images/ind_higher_ed.jpg", link: "/industries/higher-education" },
        { title: "Schools", image: "/images/ind_schools.jpg", link: "/industries/schools" },
        { title: "Corporate", image: "/images/ind_corporate.jpg", link: "/industries/corporate" },
        { title: "Industry", image: "/images/ind_industry.jpg", link: "/industries/industry" },
        { title: "Startups & Innovation", image: "/images/ind_startups.jpg", link: "/industries/startups" },
        { title: "Government & Ecosystems", image: "/images/ind_govt.jpg", link: "/industries/government" }
      ]
    },
    transformationJourney: {
      title: "Our Transformation Journey",
      subtitle: "From Assessment to Sustainable Growth.",
      steps: [
        { num: "01", title: "Assess", desc: "Understand the institution's current position.", icon: "Search" },
        { num: "02", title: "Strategise", desc: "Develop a customised transformation roadmap.", icon: "Compass" },
        { num: "03", title: "Transform", desc: "Redesign academic, operational and institutional systems.", icon: "Settings" },
        { num: "04", title: "Implement", desc: "Support through execution.", icon: "CheckSquare" },
        { num: "05", title: "Measure", desc: "Track outcomes through KPIs and dashboards.", icon: "BarChart3" },
        { num: "06", title: "Sustain", desc: "Build internal capability for continuous improvement.", icon: "Infinity" }
      ]
    },
    whyChooseUs: {
      title: "Why Choose Innoveity?",
      subtitle: "One Partner. Multiple Capabilities.",
      items: [
        { title: "Academic Understanding", icon: "GraduationCap" },
        { title: "Industry Connect", icon: "Handshake" },
        { title: "Implementation Capability", icon: "Wrench" },
        { title: "Technology Integration", icon: "Code2" },
        { title: "Multi-Domain Expertise", icon: "Network" },
        { title: "Sustainable Approach", icon: "Leaf" }
      ]
    },
    bottomCta: {
      title: "Your Institution Has Potential. Let's Build the System to Unlock It.",
      description: "Whether you are looking to improve academic quality, strengthen accreditation readiness, build industry partnerships or digitally enable your institution — Innoveity can work with you.",
      primaryBtnText: "Schedule a Consultation",
      primaryBtnLink: "/contact",
      secondaryBtnText: "Download Company Profile",
      secondaryBtnLink: "/brochure.jpg",
      bgImage: "/images/cta_mountains.jpg"
    }
  };

  await prisma.homeContent.upsert({
    where: { id: 1 },
    update: { contentJson: JSON.stringify(homeData) },
    create: { id: 1, contentJson: JSON.stringify(homeData) }
  });

  // 3. Theme Settings
  const themeData = {
    colors: {
      primary: "#0F766E",     // Emerald / Deep Teal
      secondary: "#0B2545",   // Dark Navy
      accent: "#10B981",      // Vibrant Mint / Green
      dark: "#07182C",        // Ultra dark navy
      background: "#FFFFFF",
      foreground: "#0F172A",
      success: "#059669",
      warning: "#F59E0B"
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      headingFont: "Inter, sans-serif"
    },
    floatingContactWidget: {
      enabled: true,
      whatsapp: "+919876543210",
      phone: "+919876543210",
      email: "info@innoveity.com"
    }
  };

  await prisma.themeSettings.upsert({
    where: { id: 1 },
    update: { contentJson: JSON.stringify(themeData) },
    create: { id: 1, contentJson: JSON.stringify(themeData) }
  });

  // 4. Global SEO Settings
  await prisma.globalSeoSettings.upsert({
    where: { id: 1 },
    update: {
      websiteName: "INNOVEITY GLOBS PRIVATE LIMITED",
      defaultTitle: "INNOVEITY GLOBS PRIVATE LIMITED - Sustainable Knowledge Partner",
      defaultDescription: "Innoveity Globs Private Limited works with educational institutions and organisations to transform strategy into measurable outcomes through advisory, academic excellence, industry partnerships, technology enablement and sustainable growth.",
      defaultOgImage: "/images/hero_students.jpg",
      organizationLogo: "/new-logo-processed.png"
    },
    create: {
      id: 1,
      websiteName: "INNOVEITY GLOBS PRIVATE LIMITED",
      defaultTitle: "INNOVEITY GLOBS PRIVATE LIMITED - Sustainable Knowledge Partner",
      defaultDescription: "Innoveity Globs Private Limited works with educational institutions and organisations to transform strategy into measurable outcomes through advisory, academic excellence, industry partnerships, technology enablement and sustainable growth.",
      defaultOgImage: "/images/hero_students.jpg",
      organizationLogo: "/new-logo-processed.png"
    }
  });

  console.log("Seeding completed successfully into MySQL database 'innoveity_globs'!");
}

main()
  .catch((e) => {
    console.error("Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
