import { FunctionComponent } from "react";
import Image from "next/image";

interface OfferSectionProps {}

export const OfferSection: FunctionComponent<OfferSectionProps> = () => {
  return (
    <div>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-10 lg:gap-20 py-16 md:py-32 mx-auto w-[80vw] lg:max-w-[70vw] relative">
        <div className="">
          <Image
            src={"/images/offer-image.jpg"}
            alt="offer-image"
            width={408}
            height={444}
            // fill
            className="h-[300px] md:h-[550px] lg:h-[444px] object-cover"
          />
        </div>
        <div className="flex flex-col space-y-6 md:space-y-9 font-extralight">
          <h3 className="text-3xl font-bold">What We Offer</h3>

          <p>Ads, Just Ads.</p>

          <p>
            We do one thing - we just do it with a monastic focus and better
            than anyone else. If you want an agency that offers a full-service
            solution of everything that won&apos;t move the needle forward, we&apos;re not
            for you.
          </p>

          <p>
            If you want an agency where with two clicks, you can get a clear
            breakdown of how much was spent, how much was made and what your net
            profit was we&apos;re here for you.
          </p>

          <div>
            <h5 className="font-semibold">MASTERY DEMANDS FOCUS SO...</h5>
            <p>We don&apos;t offer any services except for paid advertising</p>
          </div>
        </div>
      </div>
    </div>
  );
};
