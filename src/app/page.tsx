"use client"

import { HeroSection } from "@/modules/herosection";
import { ActionSection } from "@/modules/infosection/action-section";
import { MoreInfo } from "@/modules/infosection/how-it-works";
import { OfferSection } from "@/modules/infosection/offer-section";

export default function Home() {

  return (
    <div>
      <HeroSection />
      <OfferSection />
      <MoreInfo />
      <ActionSection />
    </div>
  );
}
