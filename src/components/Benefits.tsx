import Image from "next/image";
import BenefitsImage from "@/../public/benefits-image.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function Benefits() {
  useGSAP(() => {
    gsap.fromTo(
      "#benefitsRight",
      {
        scrollTrigger: "#benefitsRight",
        y: -20,
        opacity: 0,
      },
      {
        scrollTrigger: "#benefitsRight",
        y: 0,
        opacity: 1,
        delay: 0.5,
      }
    );
    gsap.fromTo(
      "#benefitsLeft",
      {
        scrollTrigger: "#benefitsLeft",
        y: 20,
        opacity: 0,
      },
      {
        scrollTrigger: "#benefitsLeft",
        y: 0,
        opacity: 1,
        delay: 0.5,
      }
    );
  }, []);

  return (
    <section className="container mx-auto p-6 py-20 grid grid-cols-2 gap-10 items-center">
      <div
        id="benefitsRight"
        className={`col-span-2 md:col-span-1 flex justify-center`}
      >
        <div>
          <span className="text-[13px] text-gray-500">Why Secfi</span>
          <p className="text-5xl max-w-[400px]  break-words tracking-wider">
            Built by startup employees
          </p>
        </div>
      </div>
      <div
        id="benefitsLeft"
        className={`col-span-2 md:col-span-1 flex flex-col gap-4 relative`}
      >
        <p className="text-2xl">We put equity first</p>
        <p>
          Our team has deep expertise in equity, tax implications, and how it
          fits into your financial picture.
        </p>
        <p className="text-2xl">You don’t need millions</p>
        <p>
          We help you make important equity decisions that can set you up for
          financial success.
        </p>
        <p className="text-2xl">Holistic wealth management</p>
        <p>
          We take a comprehensive view of all your finances, including stock
          options, to help you save time and money, and grow your wealth.
        </p>
      </div>
      <div id="benefitsLeft" className="col-span-2 flex justify-center mt-20">
        <Image src={BenefitsImage} alt="Benefits" />
      </div>
    </section>
  );
}
