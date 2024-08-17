import { FunctionComponent } from "react";
import { CalendlyButton } from "../../components/calendly-button";
import Image from "next/image";

interface HeroSectionProps {}

export const HeroSection: FunctionComponent<HeroSectionProps> = () => {
  return (
    <div>
      <div className="w-full h-[100vh] md:h-[900px] lg:h-[850px] bg-[url('/images/second-bg.jpg')] bg-cover bg-black bg-opacity-50">
        <div className="py-10 md:py-24">
          <Image
            src={"/images/serv.png"}
            alt="logo"
            width={20}
            height={20}
            className="ml-10 md:ml-24 w-32 md:w-56"
          />
        </div>
        <div className="mx-auto lg:ml-56 w-72 md:w-[70%] lg:w-full max-w-3xl pb-24 md:pb-32 lg:pb-56">
          <div className="">
            <h1 className="text-3xl font-bold text-black md:text-6xl">
              We Help Cosmetic Dentist Clinics Achieve Outstanding ROI Through
              Paid Advertising
            </h1>
            <p className="mt-6 text-sm md:text-xl leading-8 text-black/60">
              Stop wasting time and money on faulty and ineffective ad campaigns
            </p>
            <p className="mt-6 text-sm md:text-xl leading-8 text-black/60">
              It&apos;s time to make your ad-budget count, scale your business
              and blow up your sales.
            </p>

            <div className="mt-10 flex gap-x-6">
              <CalendlyButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
