import { FunctionComponent } from "react";
import { CalendlyButton } from "../../components/calendly-button";

export const MoreInfo = () => {
  return (
    <div>
      <div className="flex flex-col justify-center space-y-16 items-center mx-auto max-w-[90vw] py-16">
        <div className="text-4xl font-semibold">How It Works</div>
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-5 xl:gap-20 space-y-4 lg:space-y-0 w-full font-extralight">
          <div className="relative mx-auto xl:mx-0">
            <span className="text-[200px] xl:text-[240px] font-semibold text-red-200">
              01
            </span>
            <div className="absolute z-50 left-[30%] top-[40%] w-48 xl:w-56">
              <h4 className="font-semibold mb-2">We Listen</h4>
              <p>
                Tell us about your business and your goals. Wer are here to help
                you succeed.
              </p>
            </div>
          </div>
          <div className="relative mx-auto xl:mx-0">
            <span className="text-[200px] xl:text-[240px] font-semibold text-purple-200">
              02
            </span>
            <div className="absolute z-50 left-[30%] top-[40%] w-48 xl:w-56">
              <h4 className="font-semibold mb-2">We Create</h4>
              <p>
                Our team will craft the perfect plan to get your business in
                front of the right people.
              </p>
            </div>
          </div>
          <div className="relative mx-auto xl:mx-0">
            <span className="text-[200px] xl:text-[240px] font-semibold text-cyan-500/30">
              03
            </span>
            <div className="absolute z-50 left-[30%] top-[40%] w-48 xl:w-56">
              <h4 className="font-semibold mb-2">You Grow</h4>
              <p>
                Watch as new customers discover your business and your revenue
                soars. We&apos;ll handle the rest.
              </p>
            </div>
          </div>
        </div>
        <div>
          <CalendlyButton />
        </div>
      </div>
    </div>
  );
};
