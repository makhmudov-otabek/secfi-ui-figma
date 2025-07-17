import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  useGSAP(() => {
    gsap.fromTo(
      ".footerList",
      {
        scrollTrigger: ".footerList",
        y: -20,
        opacity: 0,
      },
      {
        scrollTrigger: ".footerList",
        y: 0,
        opacity: 1,
        stagger: 0.5,
        delay: 0.5,
      }
    );
  }, []);

  const footerMenu = [
    {
      name: "Solutions",
      values: [
        "Equity and Tax Planning",
        "IPO and Liquidity Planning",
        "Exercise Financing",
        "Liquidity Financing",
        "Secfi Wealth",
        "Investment Management",
        "Secfi for Startups",
        "Secfi Capital",
      ],
    },
    {
      name: "Tools",
      values: [
        "Equity Planner",
        "AMT Calculator",
        "Stock Option Tax Calculator",
        "Exercise Timing Planner",
        "Stock Option Exit Calculator",
      ],
    },
    {
      name: "Learn",
      values: ["Secfi Learn", "Founders & Funders", "FAQ"],
    },
    {
      name: "About us",
      values: ["Our Story", "Careers", "News & Press", "Contact Us", "Legal"],
    },
  ];
  return (
    <footer className={`container mx-auto px-6 py-14`}>
      <div className="grid grid-cols-4 justify-between text-[#292A2D]">
        {footerMenu.map((item) => {
          return (
            <ul key={item.name} className="footerList col-span-2 md:col-span-1">
              <li className="text-[#004250] mb-4">{item.name.toUpperCase()}</li>
              {item.values.map((menuItem) => {
                return (
                  <li
                    key={menuItem}
                    className="mb-4 border-solid border-2 border-transparent hover:border-b-black transition duration-300 cursor-pointer"
                  >
                    <a href="#">{menuItem}</a>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
      <div className="w-full h-[50vh] bg-[url(../../public/logo-big.svg)] bg-no-repeat bg-contain bg-center" />
      <p className="footerList text-[#B5B6B3]">
        “Secfi” refers to Secfi, Inc. and its affiliates. Secfi, Inc. is a
        technology company offering a range of financial products and services
        through its wholly-owned, separately managed but affiliated
        subsidiaries, Secfi Securities, LLC and Secfi Advisory Limited.
      </p>
      <p className="footerList text-[#B5B6B3]">
        Check the background of Secfi Securities on FINRA’s BrokerCheck
      </p>
      <p className="footerList text-[#B5B6B3] break-words">
        Securities products offered by Secfi Securities, LLC, an SEC-registered
        broker-dealer and Member FINRA / SIPC ((https://www.finra.org/#/ and
        https://www.sipc.org/)). Access important information in our Legal
        Resources (https://secfi.com/important-information-secfi-securities-llc)
        and learn more about Secfi Securities in our Customer Relationship
        Summary (https://files.brokercheck.finra.org/crs_302112.pdf). Investment
        advisory products and services, including financial planning and
        investment management, offered exclusively to Clients under an in-force
        Agreement by Secfi Advisory Limited, an SEC-registered investment
        adviser. Access important information in our Legal Resources and learn
        more about Secfi Advisory Limited in our Client Relationship Summary
        (https://secfi.com/important-information-secfi-advisory-limited). This
        information is provided by Secfi for educational and illustrative
        purposes only and is not considered an offer, solicitation of an offer,
        advice, or recommendation to buy, sell, or hold any security. All
        investing involves risk, including the risk of losing the money you
        invest, and past performance does not guarantee future performance.
        Secfi relies on information from various sources believed to be
        reliable, including information from its Customers, Clients, and other
        third parties, but cannot guarantee the accuracy or completeness of that
        information. Secfi, Inc. does not provide tax, legal, or investment
        advice. Secfi is not affiliated with, sponsored, or endorsed by the
        companies listed, described, or featured on its site. Company logos or
        trademarks used do not imply endorsement and are the property of their
        respective owners.
      </p>
    </footer>
  );
}
