import Header from "@/components/Header";
import HomeComponent from "@/components/HomeComponent";
import Results from "@/components/Results";
import Statistics from "@/components/Statiscs";
import Result1Img from "@/../public/result-1.svg";
import Result2Img from "@/../public/result-2.svg";
import Result3Img from "@/../public/result-3.svg";
import Benefits from "@/components/Benefits";
import Bills from "@/components/Bills";
import Comments from "@/components/Comments";
import Options from "@/components/Options";

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
        extraStyles="bg-[#FBFBF6]"
      />
      <Results
        summary="Exercise & Liquidity Financing"
        mainText="Get the cash you need to own your equity, or get cash for your private shares without selling them."
        image={Result3Img}
        extraStyles="flex-row-reverse"
      />
      <Results
        summary="Wealth Management"
        mainText="Grow your money through managed portfolios and exclusive access to private investments."
        image={Result2Img}
        extraStyles="bg-[#FBFBF6]"
      />
      <Benefits />
      <Bills />
      <Comments />
      <Options />
    </section>
  );
}
