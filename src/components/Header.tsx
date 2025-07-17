import Image from "next/image";
import Logo from "@/../public/logo.svg";
import Button from "./Button";
import { IoMdMenu } from "react-icons/io";
import { useRef } from "react";

export default function Header() {
  const buttonRef = useRef(null);

  return (
    <header className="container mx-auto p-6">
      <div className="hidden md:block">
        <div className="w-full flex justify-between items-center">
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
        </div>
      </div>

      <div className="block md:hidden">
        <div className="flex w-full justify-between items-center">
          <Image src={Logo} alt="logo" height={30} width={80} />

          <div className="relative group">
            <button ref={buttonRef}>
              <IoMdMenu size={26} />
            </button>

            <ul className="hidden group-hover:block absolute top-7 right-0 list-none shadow border-solid border border-[#cccccc60] rounded-md">
              <li className="hover:bg-[#cccccc60] px-6 py-1 rounded-t-md">
                Learn
              </li>
              <li className="hover:bg-[#cccccc60] px-6 py-1">Plan</li>
              <li className="hover:bg-[#cccccc60] px-6 py-1">Finance</li>
              <li className="hover:bg-[#cccccc60] px-6 py-1">Wealth</li>
              <li className="hover:bg-[#cccccc60] px-6 py-1 rounded-b-md">
                About
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
