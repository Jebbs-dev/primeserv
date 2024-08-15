"use client";

import { FunctionComponent } from "react";
import { PopupButton } from "react-calendly";
import { useEffect, useState } from "react";

export const CalendlyButton = () => {

  const [rootElement, setRootElement] = useState<null | HTMLElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRootElement(document.getElementById("root"));
    }
  }, []);

  return (
    <div id="root">
      <PopupButton
        url="https://calendly.com/oluwasegunsos"
        text="Speak To Our Team Today"
        rootElement={rootElement as HTMLElement}
        className={`rounded-full px-6 py-3 text-black bg-transparent border-black border-2 font-semibold`}
      />
    </div>
  );
};

