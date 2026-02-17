import React from "react";
import Container from "../../Components/Common/Container";
import logo from "../../assets/logo.png";
import { FaPhone } from "react-icons/fa6"; 
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#000000] pt-11.5">
        <Container>
          <div className="border border-b-[rgba(255,255,255,0.2)]">
            <p className="font-light leading-7.75 text-base text-white lg:w-228  text-justify mx-auto pb-11 ">
              Whether you're looking to switch to solar energy or upgrade your
              cable services, our sales and marketing company is here to help.
              Contact us today to start saving on your energy bills and enjoy
              reliable connectivity from the leading solar and cable companies
              in the DC, Maryland, and Virginia area. Snag the best deals with
              us and embrace a brighter and more connected future.
            </p>
          </div>
          <div className="flex flex-wrap md:flex-row md:flex-wrap pb-17.5">
            {/* item 1 */}
            <div className="w-full lg:w-[35%] md:w-full lg:pt-20 pt-5 lg:pb-27.75 pb-5 pr-10.5 mt-5 hindden-border-r lg:border-r border-[rgba(255,255,255,0.19)] ">
              <img src={logo} alt="logo image" />
              <p className="font-light font-poppins leadin-6.5 text-base text-white pt-7.5 text-justify lg:text-left">
                Contact us today to explore our services and take advantage of
                the great deals available from the leading solar and cable
                companies in the DC, Maryland, and Virginia area. Let us be your
                trusted partner in finding the best solutions for your energy
                and connectivity needs.
              </p>
            </div>

            {/* item 2 */}
            <div className="w-full lg:w-[18%] md:w-1/2 flex flex-col gap-5 lg:pt-36.25 pt-2 hidden:border-r lg:border-r border-[rgba(255,255,255,0.19)] lg:px-10 px-2 mt-5">
              <span className="font-semibold text-[18px] leading-8.75 text-white">
                Quick Links
              </span>
              <ul className="footer">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Aobut us</a>
                </li>
                <li>
                  <a href="#">Solar Initiatives</a>
                </li>
                <li>
                  <a href="#">Our Services</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="#">Asthetics</a>
                </li>
              </ul>
            </div>

            {/* item 3 */}
            <div className="w-full lg:w-[21%] md:w-1/2 flex flex-col gap-5  lg:pt-36.25 pt-5 lg:px-10 px-2 mt-5 hidden:border-r lg:border-r border-[rgba(255,255,255,0.19)]">
              <span className="font-semibold text-[18px] leading-8.75 text-white">
                Quick Links
              </span>
              <ul className="footer">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Aobut us</a>
                </li>
                <li>
                  <a href="#">Consultation and Support </a>
                </li>
                <li>
                  <a href="#">Our Services</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="#">Asthetics</a>
                </li>
              </ul>
            </div>
            {/* item 4 */}
            <div className="w-full lg:w-[20%] md:w-full flex flex-col gap-5 lg:pt-36.25 pt-5 lg:px-10 px-2 mt-5">
              <span className="font-semibold text-[18px] leading-8.75 text-white">
                Conatct us
              </span>
              <div className="flex flex-col gap-5">
                <div>
                  <a
                    className="flex items-center gap-3.75"
                    href="tel:0123 456 789"
                  >
                    <FaPhone className="text-white text-[22px]" />
                    <p className="text-white">0123 456 789</p>
                  </a>
                </div>

                <div>
                  <a
                    className="flex items-center gap-3.75"
                    href="tel:0123 456 789"
                  >
                    <MdMail className="text-white text-[22px]" />
                    <p className="text-white">companyname@gmail.com</p>
                  </a>
                </div>

                <div className="flex items-center gap-3 icons">
                  <FaFacebookF className="text-white text-[22px] social" />
                  <FaTwitter className="text-white text-[22px] social" />
                  <FaInstagram className="text-white text-[22px] social" />
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className="w-full border-t border-[rgba(255,255,255,0.2)] "></div>
        <Container>
          <div>
            <p className="font-normal font-poppins text-[16px] leading-6 text-white  py-6.5 text-center">
              © 2023 Company Name - developed by Roots Digital Marketing
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
