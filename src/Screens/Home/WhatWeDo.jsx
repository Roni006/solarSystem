import React from "react";
import Container from "../../Components/Common/Container";
import solar from "../../assets/whatwedo/solar.png";
import cable from "../../assets/whatwedo/cable.png";
import deal from "../../assets/whatwedo/deal.png";
import support from "../../assets/whatwedo/support.png";
import whatWeDoBg from "../../assets/whatwedo/whatwedobg.png";
const WhatWeDo = () => {
  const details1 = [
    {
      img: solar,
      title: "Solar Solutions",
      desc: "Harness the power of the sun and embrace clean, renewable energy with our solar solutions.",
    },
    {
      img: cable,
      title: "Cable Services",
      desc: "Stay connected with high-quality cable services that deliver reliable and fast internet, television",
    },
  ];
  const details2 = [
    {
      img: deal,
      title: "Deals and Promotions",
      desc: "We pride ourselves on securing great deals and promotions for our customers.",
    },
    {
      img: support,
      title: "Consultation and Support",
      desc: "We understand that navigating the solar and cable landscape can be overwhelming.",
    },
  ];
  return (
    <>
      <section className="bg-white py-27.5">
        <Container>
          <div className="text-center">
            <h5 className="text-[#ee0000] font-bold font-poppins leading-6.5">
              Our Services
            </h5>
            <h2 className="font-bold font-poppins text-[50px] leading-16.75 text-[#131313] pt-2.5 ">
              What We Do
            </h2>
          </div>
          <div className="pt-7.5 flex items-center justify-center gap-8">
            {/* todo: item 1 */}
            <div className="flex flex-col gap-7.5 ">
              {details1.map((card, index) => (
                <div className="pt-6 pb-7.5 pl-5 pr-12 bg-[#F3F3F3] rounded-[10px] w-90">
                  <img src={card.img} alt="" />
                  <h3 className="font-bold text-[24px] leading-7.5 font-poppins text-[#464646] pt-5 pb-1.25">
                    {card.title}
                  </h3>
                  <p className="leading-6.5 font-normal font-poppins text-[18px] text-[#787878]">
                  {card.desc}
                  </p>
                </div>
              ))}
            </div>
                {/* todo: item 2 */}
            <div>
                <img src={whatWeDoBg} alt="" />
            </div>
                {/* todo: item 3 */}
             <div className="flex flex-col gap-7.5 ">
              {details2.map((card, index) => (
                <div className="pt-6 pb-7.5 pl-5 pr-12 bg-[#F3F3F3] rounded-[10px] w-90">
                  <img src={card.img} alt="" />
                  <h3 className="font-bold text-[24px] leading-7.5 font-poppins text-[#464646] pt-5 pb-1.25">
                    {card.title}
                  </h3>
                  <p className="leading-6.5 font-normal font-poppins text-[18px] text-[#787878]">
                  {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default WhatWeDo;
