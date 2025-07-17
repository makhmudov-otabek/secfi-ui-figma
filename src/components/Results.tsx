import Image from "next/image";
import Button from "./Button";
import Result1Img from "@/../public/result-1.svg";
import type { StaticImageData } from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

type ResultProp = {
  summary: string;
  mainText: string;
  image: string | StaticImageData;
  extraStyles?: string;
};

export default function Results({
  summary = "Default text",
  mainText = "Default text",
  image = Result1Img,
  extraStyles = "",
}: ResultProp) {
  useGSAP(() => {
    gsap.fromTo(
      ".resultsLeft",
      {
        scrollTrigger: ".resultsLeft",
        x: -20,
        opacity: 0,
      },
      {
        scrollTrigger: ".resultsLeft",
        x: 0,
        opacity: 1,
        stagger: 0.5,
        delay: 0.5,
      }
    );
    gsap.fromTo(
      ".resultsRight",
      {
        scrollTrigger: ".resultsRight",
        x: 20,
        opacity: 0,
      },
      {
        scrollTrigger: ".resultsRight",
        x: 0,
        opacity: 1,
        stagger: 0.5,
        delay: 0.5,
      }
    );
  }, []);

  return (
    <section
      className={`container mx-auto p-6 flex flex-wrap gap-10 justify-between mt-14 py-20 items-center ${extraStyles}`}
    >
      <div className="resultsLeft flex-auto flex justify-center">
        <div>
          <span className="text-[13px] text-gray-500">{summary}</span>
          <p className="text-3xl my-8 max-w-[450px] break-words">{mainText}</p>
          <div className="flex gap-4">
            <Button extraStyles="text-white">Get started</Button>
            <Button
              extraStyles=" hover:border-[#292A2D]"
              bgColor="bg-transparent"
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
      <div className="resultsRight flex-auto flex justify-center">
        <Image src={image} alt="woman" className="w-fit" />
      </div>
    </section>
  );
}
