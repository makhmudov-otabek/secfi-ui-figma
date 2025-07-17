import Header from "@/components/Header";
import HomeComponent from "@/components/HomeComponent";
import Results from "@/components/Results";
import Statistics from "@/components/Statiscs";
import Result1Img from "@/../public/result-1.svg";

export default function Home() {
  return (
    <section className="">
      <Header />
      <HomeComponent />
      <Statistics />
      <Results
        summary="EQUITY, tax & IPO planning"
        mainText="Work with a financial advisor to align your stock options with your financial goals."
        image={Result1Img}
      />
    </section>
  );
}
