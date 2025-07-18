import Image from "next/image";
import Button from "./Button";
import WomanSvg from "../../public/woman.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function HomeComponent() {
  useGSAP(() => {
    gsap.fromTo(
      "#homeLeft",
      {
        x: -20,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        delay: 0.5,
      }
    );
    gsap.fromTo(
      "#homeRight",
      {
        x: 20,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        delay: 0.5,
      }
    );
  }, []);

  return (
    <section className="container mx-auto p-6 pb-0 grid grid-cols-2 gap-8 items-center min-h-96  border-solid border-b-2 border-[#5B666F40]">
      <div id="homeLeft" className="col-span-2 md:col-span-1 my-8">
        <p className="text-5xl">Equity Financing</p>
        <p className="text-5xl">for startup employees</p>
        <p className="mt-6 mb-8 max-w-[600px] break-words">
          Get equity planning, stock option financing, and wealth management
          from advisors that know how stock options and equity can help grow
          your wealth.
        </p>
        <Button extraStyles="text-white">Get started</Button>
      </div>

      <div
        id="homeRight"
        className={`col-span-2 md:col-span-1 relative hidden md:block`}
      >
        <div className="flex justify-center">
          <Image src={WomanSvg} alt="woman" width={350} height={400} />
        </div>

        <div className="absolute top-1/6 left-1/12 w-fit bg-[#fffbeb] border-solid border border-gray-300 rounded-xl ">
          <p className="py-4 px-3 mb-3 border-solid border border-transparent border-b-gray-300">
            Exercise details
          </p>
          <span className="pt-4 px-3 text-[13px] text-gray-600">
            Cost to you
          </span>
          <p className="pb-4 px-3">$328,249</p>
          <p className=" px-3 text-[13px] text-gray-600">
            <span className="font-bold">Exercise early</span> to save on taxes
          </p>
          <div className="py-4 px-3 w-full flex justify-between">
            <button className="w-full bg-[#004250] py-2 text-[13px] rounded-l-lg text-white">
              TAXES
            </button>
            <button className="w-full bg-[#00425030] py-2 text-[13px] rounded-r-lg text-[#004250]">
              GAINS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
