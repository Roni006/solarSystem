import React from "react";
import Container from "../../Components/Common/Container";

const WhyChoose = () => {
  const details = [
    {
      number: "01",
      title: "Expertise and Experience",
      description:
        "With years of experience in the sales and marketing industry, our team has a deep ",
    },
    {
      number: "02",
      title: "Extensive Network",
      description:
        "We have established strong relationships with the leading solar and cable companies in the region",
    },
    {
      number: "03",
      title: "Personalized Approach",
      description:
        "We believe that every customer is unique, and their needs should be addressed accordingly",
    },
    {
      number: "04",
      title: "cost savings",
      description:
        "By leveraging our industry knowledge and network, we can help you save money on your solar and cable purchases",
    },
    {
      number: "05",
      title: "Hassle-Free Process",
      description:
        "We handle all the research, negotiations, and paperwork for you, making the process of finding",
    },
  ];
  return (
    <>
      <section className="bg-[#F4F4F4] py-27.75">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-7.5 ">
            <div className="w-90 pt-15.5 pb-17  ">
              <h1 className="font-bold text-[50px] leading-16.75 font-poppins text-[#131313] capitalize">
                why choose us?
              </h1>
              <p>
                Whether you're looking to switch to solar energy or upgrade your
                cable services, our sales and marketing company is here to help.
              </p>
            </div>
            {details.map((card, index) => (
              <div className="box w-90 pt-15.5 pb-17 ps-7.25 pe-5.5 bg-white rounded-[10px] ">
                <span className="item font-bold text-[58px] font-poppins leading-7.5 text-[#ee0000]">
                  {card.number}
                </span>
                <h2 className="item font-bold text-[24px] leading-7.5 text-[#5c5c5c] pt-6.5 pb-6.5 capitalize">
                  {card.title}
                </h2>
                <p className="item text-[18px] font-normal font-poppins leading-5.75 text-[#787878]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default WhyChoose;
