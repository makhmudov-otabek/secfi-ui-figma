import Image from "next/image";
import { StaticImageData } from "next/image";
import Options1Img from "@/../public/options-1.svg";
import Options2Img from "@/../public/options-2.svg";
import Options3Img from "@/../public/options-3.svg";
import Options4Img from "@/../public/options-4.svg";

type CardProp = {
  text: string;
  img: string | StaticImageData;
  bgColor: string;
};

function Card({ text, img, bgColor }: CardProp) {
  return (
    <div
      className={`col-span-4 md:col-span-2 xl:col-span-1 flex flex-col relative gap-16 md:gap-24 p-6 px-10 pb-0 rounded-md ${bgColor}`}
    >
      <p className="text-white text-2xl">{text}</p>
      <div className="w-[200px] h-[250px]"></div>
      <Image src={img} alt="man" className="absolute bottom-0 left-2/" />
    </div>
  );
}

export default function Options() {
  return (
    <section className="container mx-auto px-6 py-14 flex flex-col justify-center gap-12">
      <p className="text-center">Know your options</p>
      <div className="grid grid-cols-4 gap-4">
        <Card
          text="My company is going public or getting acquired"
          img={Options1Img}
          bgColor="bg-[#879EAD]"
        />
        <Card
          text="Managing wealth with stock options"
          img={Options2Img}
          bgColor="bg-[#1A5866]"
        />
        <Card
          text="Exercising stock options"
          img={Options3Img}
          bgColor="bg-[#776C62]"
        />
        <Card
          text="Starting a new job with stock options"
          img={Options4Img}
          bgColor="bg-[#99958E]"
        />
      </div>
    </section>
  );
}
