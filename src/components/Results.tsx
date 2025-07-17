import Image from "next/image";
import Button from "./Button";
import Result1Img from "@/../public/result-1.svg";
import type { StaticImageData } from "next/image";

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
  return (
    <section
      className={`container mx-auto p-6 flex flex-wrap justify-between mt-14 items-center h-screen ${extraStyles}`}
    >
      <div className="flex-auto flex justify-center">
        <div>
          <span className="text-[13px] text-gray-500">{summary}</span>
          <p className="text-3xl my-8 min-w-[300px] max-w-[450px] break-words">
            {mainText}
          </p>
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
      <div className="flex-auto flex justify-center">
        <Image src={image} alt="woman" />
      </div>
    </section>
  );
}
