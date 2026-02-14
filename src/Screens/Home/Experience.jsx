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
      <section className="py-20 lg:py-28.75">
        <Container>
          <div>
            <div>
              <h2 className="font-bold text-[30px] leading-10 lg:text-[50px] lg:leading-21.25  text-[#131313] font-poppins pb-6.25 lg:pt-12.5 ">
                Our Expertise and Experience
              </h2>
            </div>
            <div className="flex flex-col md:flex-wrap md:flex-row items-center justify-between  gap-7 md:gap-3 ">
              {experience.map((card, index) => (
                <div className=" w-full md:w-[48%] lg:w-auto relative overflow-hidden ">
                  <img
                    className="w-full h-full "
                    src={card.ContentImg}
                    alt=""
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(180deg,rgba(19,19,19,1)11%,rgba(19,19,19,0.21)100%)] lg:py-6.5 lg:px-5.5 md:py-10.5 md:px-10.5 rounded-[10px]">
                    <h3 className=" md:text-[40px] text-[24px] font-bold leading-6 lg:leading-10 text-white pb-4.5">
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
