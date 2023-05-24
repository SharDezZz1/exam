import React, { useRef } from "react";

import s from "./Guestrooms.module.scss"

// img
import Image from 'next/image'
import iconTop from '../../assets/Guestrooms/icon__top.svg'
import SwiperImage from '../../assets/Guestrooms/swiper__images.png'
import SwiperArrowPrew from '../../assets/Guestrooms/SwiperArrowPrew.svg'
import SwiperArrowNext from '../../assets/Guestrooms/SwiperArrowNext.svg'

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";


const Guestrooms = () => {
	const customNavigation = {
		nextEl: ".custom-swiper-button-next",
		prevEl: ".custom-swiper-button-prev",
	};



	return (
		<>
			<section className={s.background}>
				<div className={s.wrapper}>
					<div className={s.title}>
						<Image src={iconTop} alt='Icon' />
					</div>
					<div>
						<Swiper
							slidesPerView={4}
							spaceBetween={26}
							pagination={{ type: "fraction" }}
							navigation={customNavigation}
							modules={[Pagination, Navigation]}
							className="swiper"
						>
							<SwiperSlide className={s.swiper__slide}>
								<Image src={SwiperImage} alt='SwiperImage' />
							</SwiperSlide>
							<SwiperSlide className={s.swiper__slide}>
								<Image src={SwiperImage} alt='SwiperImage' />
							</SwiperSlide>
							<SwiperSlide className={s.swiper__slide}>
								<Image src={SwiperImage} alt='SwiperImage' />
							</SwiperSlide>
							<SwiperSlide className={s.swiper__slide}>
								<Image src={SwiperImage} alt='SwiperImage' />
							</SwiperSlide>
							<SwiperSlide className={s.swiper__slide}>
								<Image src={SwiperImage} alt='SwiperImage' />
							</SwiperSlide>
							<SwiperSlide className={s.swiper__slide}>
								<Image src={SwiperImage} alt='SwiperImage' />
							</SwiperSlide>
							<div className={s.swiper__navigation}>
								<div className={`custom-swiper-button-prev`}><Image src={SwiperArrowPrew} alt='SwiperArrowPrew' /></div>
								<div className={`custom-swiper-button-next`}><Image src={SwiperArrowNext} alt='SwiperArrowNext' /></div>
							</div>
					
						</Swiper>
					</div>
				</div>
			</section>
		</>
	)
}

export default Guestrooms