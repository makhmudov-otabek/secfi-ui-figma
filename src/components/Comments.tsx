type CardProp = {
  mainText: string;
  name: string;
  level: string;
};

function Card({ mainText, name, level }: CardProp) {
  return (
    <div className=" md:w-[30%] border border-[#FFFFFF33] rounded-md  p-4 flex flex-col gap-16 md:gap-24 justify-between">
      <p className="text-[18px]">
        {'"'} {mainText} {'"'}
      </p>
      <div>
        <p>{name}</p>
        <p>{level}</p>
      </div>
    </div>
  );
}

export default function Comments() {
  return (
    <section className="container mx-auto flex flex-col justify-center gap-18 px-6 py-20 text-white bg-[#313236]">
      <div className="w-full text-center">
        <span>Testimonials</span>
        <p className="text-4xl">What our clients say</p>
      </div>
      <div className="flex flex-wrap justify-between gap-4 mt-8">
        <Card
          mainText="I realized I’ve been sorely needing your advisory services. So excited to work with you.I realized I’ve been sorely needing your advisory services. So excited to work with you."
          name="Senior Engineer"
          level="Gusto"
        />
        <Card
          mainText="Secfi was one of the only places I could find that could give me accurate calculations on AMT.I realized I’ve been sorely needing your advisory services. So excited to work with you."
          name="Amanda"
          level="Early HR employee at pre-IPO startup"
        />
        <Card
          mainText="Secfi felt like the safest option. There is upside and almost no downside, and I might as well play it safe.I realized I’ve been sorely needing your advisory services. So excited to work with you."
          name="Victor"
          level="Engineering leader at a pre-IPO startup"
        />
      </div>
    </section>
  );
}
