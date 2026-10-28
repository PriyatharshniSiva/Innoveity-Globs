import React from "react";
import { prisma } from "@/lib/prisma";
import { getSeoMetadata } from "@/lib/seo";
import GlobsHero from "@/components/GlobsLayout/GlobsHero";
import GlobsChallenges from "@/components/GlobsLayout/GlobsChallenges";
import GlobsServicesColumns from "@/components/GlobsLayout/GlobsServicesColumns";
import GlobsTechBanner from "@/components/GlobsLayout/GlobsTechBanner";
import Globs10Pillars from "@/components/GlobsLayout/Globs10Pillars";
import GlobsIndustries from "@/components/GlobsLayout/GlobsIndustries";
import GlobsJourney from "@/components/GlobsLayout/GlobsJourney";
import GlobsWhyChoose from "@/components/GlobsLayout/GlobsWhyChoose";
import GlobsBottomCta from "@/components/GlobsLayout/GlobsBottomCta";

export const revalidate = 0; // Live fetching from MySQL database

export async function generateMetadata() {
  try {
    return await getSeoMetadata("home");
  } catch {
    return {
      title: "INNOVEITY GLOBS PRIVATE LIMITED - Sustainable Knowledge Partner",
      description:
        "Building Institutions That Are Ready for the Future. Advisory, academic excellence, industry connect, technology, and growth.",
    };
  }
}

export default async function HomePage() {
  let homeData = null;

  try {
    const record = await prisma.homeContent.findUnique({
      where: { id: 1 },
    });
    if (record?.contentJson) {
      homeData = JSON.parse(record.contentJson);
    }
  } catch (error) {
    console.error("Error fetching home content from MySQL:", error);
  }

  return (
    <div className="flex flex-col w-full bg-white text-slate-900">
      {/* 1. Hero Section */}
      <GlobsHero data={homeData?.hero} />

      {/* 2. Institutional Challenges to Sustainable Transformation (10 Circle Badges) */}
      <GlobsChallenges data={homeData?.challenges} />

      {/* 3. Institution Services & Industry Services (Two Big Columns) */}
      <GlobsServicesColumns data={homeData?.servicesColumns} />

      {/* 4. Tech Solutions Dark Navy Banner */}
      <GlobsTechBanner data={homeData?.techBanner} />

      {/* 5. The 10-Pillar Transformation Model */}
      <Globs10Pillars data={homeData?.pillarsModel} />

      {/* 6. Industries We Serve (6 Photo Cards) */}
      <GlobsIndustries data={homeData?.industriesWeServe} />

      {/* 7. Our Transformation Journey (01-06 Step Arrow Flow) */}
      <GlobsJourney data={homeData?.transformationJourney} />

      {/* 8. Why Choose Innoveity? (6 Capability Badges) */}
      <GlobsWhyChoose data={homeData?.whyChooseUs} />

      {/* 9. Mountain Background CTA Banner */}
      <GlobsBottomCta data={homeData?.bottomCta} />
    </div>
  );
}
