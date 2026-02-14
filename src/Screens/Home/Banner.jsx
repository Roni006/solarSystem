import BannerBg from "../../assets/banner.png";
import Container from "../../Components/Common/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';
const Banner = () => {
  return (
    <section className="mt-8.25">
      <Container>
        <Swiper
        loop={true}
        autoplay={{
          delay: 3000, 
        }}
        modules={[Autoplay]}
        className="mySwiper">
          
          <SwiperSlide>
            <div className="relative">
              <img className="" src={BannerBg} alt="banner image" />
              <div className="absolute w-full h-full rounded-md top-0 left-0 bg-linear-to-r from-[#000000] to-[#000000]/50 py-38 ps-16.5 ">
                <h1 className="text-lg md:text-5xl lg:text-[70px] font-bold leading-8 md:leading-19 uppercase text-white md:w-145 text-center md:text-left ">
                  Solar <span className="text-[#EE0000]">Solutions</span> for a
                  Sustainable Tomorrow<span className="text-[#EE0000]">.</span>
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img className="" src={BannerBg} alt="banner image" />
              <div className="absolute w-full h-full rounded-md top-0 left-0 bg-linear-to-r from-[#000000] to-[#000000]/50 py-38 ps-16.5 ">
                <h1 className="text-lg md:text-5xl lg:text-[70px] font-bold leading-8 md:leading-19 uppercase text-white md:w-145 text-center md:text-left ">
                  Solar <span className="text-[#EE0000]">Solutions</span> for a
                  Sustainable Tomorrow<span className="text-[#EE0000]">.</span>
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img className="" src={BannerBg} alt="banner image" />
              <div className="absolute w-full h-full rounded-md top-0 left-0 bg-linear-to-r from-[#000000] to-[#000000]/50 py-38 ps-16.5 ">
                <h1 className="text-lg md:text-5xl lg:text-[70px] font-bold leading-8 md:leading-19 uppercase text-white md:w-145 text-center md:text-left ">
                  Solar <span className="text-[#EE0000]">Solutions</span> for a
                  Sustainable Tomorrow<span className="text-[#EE0000]">.</span>
                </h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};

export default Banner;
