import Image from "next/image";
import BillsImg from "@/../public/bills.svg";

export default function Bills() {
  return (
    <section
      className={`container mx-auto p-6 flex flex-wrap gap-6 justify-between mt-14 items-center h-screen bg-[#73726C]`}
    >
      <div className="flex-auto flex justify-center">
        <Image src={BillsImg} alt="woman" />
      </div>
      <div className="flex-auto flex flex-col gap-8 text-white">
        <span className="text-[13px]">WE KNOW EQUITY.</span>
        <p className="text-[112px] my-8 min-w-[300px] max-w-[450px] break-words">
          $48B
        </p>{" "}
        <p className="text-3xl my-8 min-w-[300px] max-w-[450px] break-words">
          In equity value on the platform
        </p>
      </div>
    </section>
  );
}
