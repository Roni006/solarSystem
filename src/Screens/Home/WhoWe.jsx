import React from 'react'
import Container from '../../Components/Common/Container'
import whowe1 from "../../assets/whowe/whowe1.png"
import whowe2 from "../../assets/whowe/whowe2.png"
const WhoWe = () => {
  return (
    <>
    <section className='bg-[#ee0000] pt-6.5 pb-17.5'>
        <Container>
            <div className='flex items-center justify-center'>
                <div className='left max-w-133'>
                    <h2 className='text-[50px] font-bold font-poppins leading-21.25 text-[#ffffff] pb-1.5'>Who We Are</h2>
                    <p className='text-[18px] leading-7.5 font-poppins text-[#ffffff] pb-7.5 '>Welcome to our sales and marketing company, where we specialize in helping customers snag great deals from the leading solar and cable companies in the DC, Maryland, and Virginia area.We understand that finding the right solar and cable solutions for your needs can be a daunting task, which is why we're here to make the process easier and more affordable for you.</p>
                    <div className='flex items-center gap-7.5'>
                        <button className='bg-[#ffffff] text-[#000000] py-2.5 px-7.5 font-medium rounded-[30px] cursor-pointer'>Read More</button>
                        <button className='bg-[#000000] text-[#ffffff] py-2.5 px-7.5 font-medium rounded-[30px] cursor-pointer'>Contact us Today</button>
                        
                    </div>
                </div>
                <div className='right w-134.5 relative'>
                    <img className='' src={whowe1} alt="" />
                    <img className='absolute top-24 -right-13' src={whowe2} alt="" />
                </div>
            </div>
        </Container>
    </section>
    </>
  )
}

export default WhoWe