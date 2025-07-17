import Image from "next/image";
import Logo from "@/../public/logo.svg";
import Button from "./Button";

export default function Header() {
  return (
    <header className="container mx-auto p-6 flex justify-between items-center">
      <div className="flex items-center gap-40">
        <Image src={Logo} alt="logo" height={30} width={80} />
        <ul className="list-none flex gap-10">
          <li className="border-solid border-2 border-transparent hover:border-b-black transition duration-300 cursor-pointer">
            Learn
          </li>
          <li className="border-solid border-2 border-transparent hover:border-b-black transition  duration-300 cursor-pointer">
            Plan
          </li>
          <li className="border-solid border-2 border-transparent hover:border-b-black transition  duration-300 cursor-pointer">
            Finance
          </li>
          <li className="border-solid border-2 border-transparent hover:border-b-black transition  duration-300 cursor-pointer">
            Wealth
          </li>
          <li className="border-solid border-2 border-transparent hover:border-b-black transition  duration-300 cursor-pointer">
            About
          </li>
        </ul>
      </div>

      <div className="flex gap-4">
        <Button
          extraStyles="bg-transparent hover:border-[#292A2D]"
          bgColor="bg-white"
        >
          Log in
        </Button>
        <Button extraStyles="text-white">Get started</Button>
      </div>
    </header>
  );
}
