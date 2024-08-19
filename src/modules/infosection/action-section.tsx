"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { CalendlyButton } from "../../components/calendly-button";
import { widgets } from "./data/widgets";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";

import Image from "next/image";

export const ActionSection = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = {
      email,
    };

    try {
      const response = await axios.post(`${process.env.BASE_URL}/api/register`, form);
      console.log(response.data);
      toast.success("Subscribed Successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong!");
    }

    setEmail("");
  };

  return (
    <div>
      <div className="flex flex-col lg:grid lg:grid-cols-2 h-[70vh] xl:h-[100vh]">
        <div className="bg-black text-white py-32">
          <div className="flex flex-col w-72 md:w-96 mx-auto space-y-10 text-center">
            <h4 className="font-semibold text-3xl">
              Get the Latest Insights, Trends and Strategies
            </h4>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
              <input
                className="border-gray-100/80 border-2 bg-transparent py-3 px-4 text-center"
                placeholder="Enter your email here"
                onChange={handleChange}
                type="email"
                name="email"
                value={email}
              />
              <button
                type="submit"
                className="rounded-full px-6 py-3 text-black bg-white"
              >
                Subscribe now
              </button>
            </form>
            <p className="border-gray-100/80">Stay Updated!</p>
            <p>No Office</p>
            <p>info@primservagency.com</p>
            <div className="flex items-center justify-center space-x-10">
              {widgets.map((widget) => {
                return (
                  <Link href={widget.href} key={widget.name} target="_blank">
                    <Image
                      src={widget.icon.src}
                      width={20}
                      height={20}
                      alt={`${widget} icon`}
                      style={{ width: "36px", height: "36px" }}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="py-32 bg-[url('/images/bottom.jpg')] bg-cover bg-opacity-50">
          <div className="flex flex-col w-72 md:w-96 mx-auto space-y-10 text-center">
            <p className="text-2xl font-semibold">
              Hop into PrimeServ Growth Bus so we can take you to and beyond
              your desired revenue
            </p>
            <CalendlyButton />
          </div>
        </div>
      </div>
    </div>
  );
};
