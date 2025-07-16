import Button from "./Button";

export default function Statistics() {
  return (
    <section className="w-full flex flex-col items-center mt-14 m-auto">
      <div className="w-fit pl-10 pr-2 py-2 text-[#004250] border-solid border border-[#292A2D26] rounded-[42px]">
        <p className="my-4 min-w-[300px]  max-w-[500px] break-words">
          This website stores data such as cookies to enable essential site
          functionality, as well as marketing, personalization, and analytics.
          By remaining on this website you indicate your consent.
        </p>
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-2">
            <p>Privacy policy</p>
            <p>Cookie policy</p>
          </div>
          <Button extraStyles="bg-[#004250] text-white">Got it</Button>
        </div>
        <span className="block mx-auto text-center text-[13px] text-[#73726C]">
          THE LEADING EQUITY PLANNING PLATFORM
        </span>
      </div>

      <p className="text-4xl mt-6 mb-8">You’ve got startup equity. Now what?</p>

      <p className="min-w-[300px] max-w-[600px] break-words text-center">
        See your full net worth including your stock options, compare exercise
        and selling strategies, and see how taxes impact your net gains.
      </p>
    </section>
  );
}
