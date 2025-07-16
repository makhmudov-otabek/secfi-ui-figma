import Header from "@/components/Header";
import HomeComponent from "@/components/HomeComponent";
import Statistics from "@/components/Statiscs";

export default function Home() {
  return (
    <section className="container mx-auto p-6">
      <Header />
      <HomeComponent />
      <Statistics />
    </section>
  );
}
