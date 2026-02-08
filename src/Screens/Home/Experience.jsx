import React from "react";
import Container from "../../Components/Common/Container";
import expImg1 from "../../assets/experience/exp1.png";
import expImg2 from "../../assets/experience/exp2.png";
import expImg3 from "../../assets/experience/exp3.png";
import expImg4 from "../../assets/experience/exp4.png";

const Experience = () => {
  const experience = [
    {
      title: "Solar Solution",
      description:
        "Harness the power of the sun and embrace clean, renewable energy with our solar solutions.",
      ContentImg: expImg3,
    },
    {
      title: "Cable Services",
      description:
        "Stay connected with high-quality cable services that deliver reliable and fast internet, television",
      ContentImg: expImg2,
    },
    {
      title: "Internet Solutions",
      description:
        "Stay connected with high-quality cable services that deliver reliable and fast internet, television",
      ContentImg: expImg4,
    },
    {
      title: "Phone Services",
      description:
        "Discover cost-effective and feature-rich phone services that keep you connected to your loved ones",
      ContentImg: expImg1,
    },
  ];
  return (
    <>
      <section className="py-28.75">
        <Container>
          <div>
            <div>
              <h2 className="font-bold text-[50px] leading-21.25 text-[#131313] font-poppins pb-6.25">
                Our Expertise and Experience
              </h2>
            </div>
            <div className="flex items-center justify-between gap-7 ">
              {experience.map((card, index) => (
                <div className="relative overflow-hidden ">
                    <img className="w-full h-full " src={card.ContentImg} alt="" />
                  <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(180deg,rgba(19,19,19,1)11%,rgba(19,19,19,0.21)100%)] py-6.5 px-5.5 rounded-[10px]">
                    <h3 className="text-[24px] font-bold leading-6 text-white pb-4.5">
                      {card.title}
                    </h3>
                    <p className="text-base font-normal leading-5.5 text-white">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Experience;
