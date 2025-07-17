import Button from "./Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Statistics() {
  useGSAP(() => {
    gsap.fromTo(
      "#statistics",
      {
        scrollTrigger: "#statistics",
        y: 20,
        opacity: 0,
      },
      {
        scrollTrigger: "#statistics",
        y: 0,
        opacity: 1,
        stagger: 0.5,
        delay: 1,
      }
    );

    gsap.fromTo(
      ".paragraph",
      {
        scrollTrigger: ".paragraph",
        y: 20,
        opacity: 0,
      },
      {
        scrollTrigger: ".paragraph",
        y: 0,
        opacity: 1,
        stagger: 0.5,
        delay: 1,
      }
    );
  }, []);

  return (
    <section
      id="statistics"
      className="container m-auto mt-14 p-6 w-full flex flex-col items-center "
    >
      <div className="w-fit px-8 py-2 text-[#004250] border-solid border border-[#292A2D26] rounded-[42px]">
        <p className="my-4 max-w-[500px] break-words">
          This website stores data such as cookies to enable essential site
          functionality, as well as marketing, personalization, and analytics.
          By remaining on this website you indicate your consent.
        </p>
        <div className="w-full flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-2 mb-4">
            <p>Privacy policy</p>
            <p>Cookie policy</p>
          </div>
          <Button extraStyles="bg-[#004250] text-white">Got it</Button>
        </div>
        <span className="block mx-auto mt-4 text-center text-[13px] text-[#73726C]">
          THE LEADING EQUITY PLANNING PLATFORM
        </span>
      </div>

      <p className="paragraph text-4xl mt-6 mb-8">
        You’ve got startup equity. Now what?
      </p>

      <p className="paragraph max-w-[600px] break-words text-center">
        See your full net worth including your stock options, compare exercise
        and selling strategies, and see how taxes impact your net gains.
      </p>
    </section>
  );
}
