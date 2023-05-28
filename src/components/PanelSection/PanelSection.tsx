import React from 'react'
import s from './PanelSection.module.scss'

// img
import Image from 'next/image'
import PanelImg from '../../assets/MainPage/PanelSection/PanelSection__img.png'
import PanelItemImg from '../../assets/MainPage/PanelSection/PanelItemImg.png'

// 

import SwiperArrowPrev from '../../assets/MainPage/PanelSection/PanelSection__prev.svg'
import SwiperArrowNext from '../../assets/MainPage/PanelSection/PanelSection__next.svg'
// 

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/scss";
// import "swiper/css/pagination";
import "swiper/css/navigation";
// import 'swiper/scss/pagination';



const PanelSection = () => {
	const customNavigation = {
		nextEl: ".custom-swiper-button-next",
		prevEl: ".custom-swiper-button-prev",
	};


	// 


	return (
		<>
			<section className={s.grid__container}>
				<div className={s.grid__Item}>
					<Image className={s.item__img} src={PanelImg} alt="Зображення 1" />
				</div>
				<div className={s.grid__Item}>
					<div className={s.img}>
						<Image src={PanelItemImg} alt='PanelItemImg' />
					</div>
					<div className={s.info}>
						<h2 className={s.info__title}>Cornell Hotel de France</h2>
						<p className={s.info__text}>Originally built in 1910, Cornell Hotel de France perfectly blends elegant French Colonial architecture with the modern comforts of a boutique Bed & Breakfast. The hallways on each floor feature fine prints from a different avant-garde artist including Modigliani, Matisse, Chagall, Gauguin, and Toulouse Lautrec, with the first floor dedicated to Jeanne D’Arc. Each room is individually decorated to give guests their own unique taste of European hospitality.</p>
					</div>
				</div>
				<div className={s.grid__Item}>
					<div className={s.img}>
						<Image src={PanelItemImg} alt='PanelItemImg' />
					</div>
					<div className={s.info}>
						<h2 className={s.title}>Заголовок 2</h2>
						<p className={s.text}>Текст 2</p>
					</div>
				</div>
				<div className={s.grid__Item}>
					<Image className={s.item__img} src={PanelImg} alt="Зображення 2" />
				</div>
				<div className={s.grid__Item}>
					<Image className={s.item__img} src={PanelImg} alt="Зображення 3" />
				</div>
				<div className={s.grid__Item}>
					<div className={s.img}>
						<Image src={PanelItemImg} alt='PanelItemImg' />
					</div>
					<div className={s.info}>
						<h2 className={s.title}>Заголовок 2</h2>
						<p className={s.text}>Текст 2</p>
					</div>
				</div>
			</section>


			<section className={s.mobile__container}>
				<div className={s.wrapper}>

					<div>
						<Swiper
							slidesPerView={1}
							navigation={customNavigation}
							pagination={{
								type: "fraction",
							}}
							modules={[Pagination, Navigation]}
							className="swiper"

						>
							<SwiperSlide className={s.swiper__slide} >
								<div className={s.slide__top}>
									<Image src={PanelImg} alt="Зображення 2" />
									<Image src={PanelItemImg} alt='PanelItemImg' />
								</div>
								<div className={s.slide__bottom}>
									<h2 className={s.title}>Cornell Hotel de France</h2>
									<p className={s.text}>Originally built in 1910, Cornell Hotel de France perfectly blends elegant French Colonial architecture with the modern comforts of a boutique Bed & Breakfast. The hallways on each floor feature fine prints from a different avant-garde artist including Modigliani, Matisse, Chagall, Gauguin, and Toulouse Lautrec, with the first floor dedicated to Jeanne D’Arc. Each room is individually decorated to give guests their own unique taste of European hospitality.</p>
								</div>
							</SwiperSlide>
							<SwiperSlide className={s.swiper__slide} >
								wdwd
							</SwiperSlide>
							<SwiperSlide className={s.swiper__slide} >
								wdwd
							</SwiperSlide>
							<SwiperSlide className={s.swiper__slide} >
								wdwd
							</SwiperSlide>
							<SwiperSlide className={s.swiper__slide} >
								wdwd
							</SwiperSlide>
							<SwiperSlide className={s.swiper__slide} >
								wdwd
							</SwiperSlide>
							<div className={s.swiper__navigation}>
								<div id={s.btn_prev} className={`custom-swiper-button-prev`}>

									<Image src={SwiperArrowNext} alt='SwiperArrowNext' />
								</div>
								<div id={s.btn_next} className={`custom-swiper-button-next`}>
									<Image src={SwiperArrowPrev} alt='SwiperArrowPrev' />
								</div>
							</div>


						</Swiper>
					</div>
				</div>
			</section>
		</>
	)
}

export default PanelSection












