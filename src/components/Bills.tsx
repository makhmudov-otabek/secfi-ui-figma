import Image from "next/image";
import BillsImg from "@/../public/bills.svg";

export default function Bills() {
  return (
    <section
      className={`container mx-auto p-6 flex flex-wrap gap-6 justify-between mt-14 py-20 items-center bg-[#73726C]`}
    >
      <div className="flex-auto flex justify-center">
        <Image src={BillsImg} alt="woman" className="w-fit" />
      </div>
      <div className="flex-auto flex flex-col gap-8 text-white">
        <span className="text-[13px]">WE KNOW EQUITY.</span>
        <p className="text-[112px] my-8 break-words">$48B</p>{" "}
        <p className="text-3xl my-8 break-words">
          In equity value on the platform
        </p>
      </div>
    </section>
  );
}
