

// // import React, { useState } from "react";
// // import Image from "next/image";
// // import SwiperCore, { Navigation, Pagination } from "swiper";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import "swiper/swiper.min.css";

// // import s from "./Guestrooms.module.scss";
// // import iconTop from "../../assets/Guestrooms/icon__top.svg";
// // import SwiperImage from "../../assets/Guestrooms/swiper__images.png";
// // import SwiperArrowPrew from '../../assets/Guestrooms/SwiperArrowPrew.svg'
// // import SwiperArrowNext from '../../assets/Guestrooms/SwiperArrowNext.svg'
// // import Link from "next/link";

// // SwiperCore.use([Navigation, Pagination]);

// // const Guestrooms = () => {
// // 	const [activeIndex, setActiveIndex] = useState(-1);

// // 	const customNavigation = {
// // 		nextEl: ".custom-swiper-button-next",
// // 		prevEl: ".custom-swiper-button-prev",
// // 	};
// // 	let NumberSlides = [1, 2, 3, 4, 5, 6]
// // 	return (
// // 		<section className={s.background}>
// // 			<div className={s.wrapper}>
// // 				<div className={s.title}>
// // 					<Image src={iconTop} alt="Icon" />
// // 				</div>
// // 				<div className={s.swiper__container}>
// // 					<Swiper
// // 						slidesPerView={4}
// // 						spaceBetween={26}
// // 						navigation={customNavigation}
// // 						pagination={{ type: "fraction" }}
// // 						className="swiper"
// // 					>
// // 						{NumberSlides.map((index) => (
// // 							<SwiperSlide
// // 								key={index}
// // 								className={s.swiper__slide}
// // 								onMouseEnter={() => setActiveIndex(index)}
// // 								onMouseLeave={() => setActiveIndex(-1)}
// // 							>

// // 								<Image src={SwiperImage} alt="SwiperImage" />
// // 								{activeIndex === index && (
// // 									<div className={s.image__overlay}>
// // 										<p>Bed size 1 Queen</p>
// // 										<Link className={s.overlay__link} href='/'>View room</Link>
// // 										<button>Book now</button>
// // 									</div>
// // 								)}
// // 							</SwiperSlide>
// // 						))}
// // 						<div className={s.swiper__navigation}>
// // 							<div className={`custom-swiper-button-prev`}><Image src={SwiperArrowPrew} alt='SwiperArrowPrew' /></div>
// // 							<div className={`custom-swiper-button-next`}><Image src={SwiperArrowNext} alt='SwiperArrowNext' /></div>
// // 						</div>
// // 					</Swiper>
// // 				</div>
// // 			</div>
// // 		</section>
// // 	);
// // };

// // export default Guestrooms;








// // import React, { useState } from "react";
// // import Image from "next/image";
// // import SwiperCore, { Navigation, Pagination } from "swiper";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import "swiper/swiper.min.css";
// // import s from "./Guestrooms.module.scss";
// // import iconTop from "../../assets/Guestrooms/icon__top.svg";
// // import SwiperArrowPrew from '../../assets/Guestrooms/SwiperArrowPrew.svg'
// // import SwiperArrowNext from '../../assets/Guestrooms/SwiperArrowNext.svg'
// // import Link from "next/link";
// // import SwiperImage from "../../assets/Guestrooms/swiper__images.png";

// // SwiperCore.use([Navigation, Pagination]);

// // const Guestrooms = () => {
// // 	const [activeIndex, setActiveIndex] = useState(-1);

// // 	const customNavigation = {
// // 		nextEl: ".custom-swiper-button-next",
// // 		prevEl: ".custom-swiper-button-prev",
// // 	};
// // 	SwiperImage
// // 	const slidesData = [
// // 		{
// // 			image: SwiperImage,
// // 			text: "Text for slide 1",
// // 		},
// // 		{
// // 			image: SwiperImage,
// // 			text: "Text for slide 2",
// // 		},
// // 		{
// // 			image: SwiperImage,
// // 			text: "Text for slide 3",
// // 		},
// // 		{
// // 			image: SwiperImage,
// // 			text: "Text for slide 4",
// // 		},
// // 		{
// // 			image: SwiperImage,
// // 			text: "Text for slide 5",
// // 		},
// // 		{
// // 			image: SwiperImage,
// // 			text: "Text for slide 6",
// // 		},
// // 	];

// // 	return (
// // 		<section className={s.background}>
// // 			<div className={s.wrapper}>
// // 				<div className={s.title}>
// // 					<Image src={iconTop} alt="Icon" />
// // 				</div>
// // 				<div className={s.swiper__container}>
// // 					<Swiper
// // 						slidesPerView={4}
// // 						spaceBetween={26}
// // 						navigation={customNavigation}
// // 						pagination={{ type: "fraction" }}
// // 						className="swiper"
// // 					>

// // 						{slidesData.map((slide, index) => (
// // 							<SwiperSlide
// // 								key={index}
// // 								className={s.swiper__slide}
// // 								onMouseEnter={() => setActiveIndex(index)}
// // 								onMouseLeave={() => setActiveIndex(-1)}
// // 							>
// // 								<div className={s.swiper__title}>wdw</div>
// // 								<Image className={s.swiper__img} src={slide.image} alt="SwiperImage" />
// // 								{activeIndex === index && (
// // 									<div className={s.image__overlay}>
// // 										<p>{slide.text}</p>
// // 										<Link href="/">View room</Link>
// // 										<button>Book now</button>
// // 									</div>
// // 								)}
// // 							</SwiperSlide>
// // 						))}
// // 						<div className={s.swiper__navigation}>
// // 							<div className={`custom-swiper-button-prev`}>
// // 								<Image src={SwiperArrowPrew} alt='SwiperArrowPrew' />
// // 							</div>
// // 							<div className={`custom-swiper-button-next`}>
// // 								<Image src={SwiperArrowNext} alt='SwiperArrowNext' />
// // 							</div>
// // 						</div>
// // 					</Swiper>
// // 				</div>
// // 			</div>
// // 		</section>
// // 	);
// // };

// // export default Guestrooms;


// import React, { useState } from "react";
// import Image from "next/image";
// import SwiperCore, { Navigation, Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.min.css";
// import s from "./Guestrooms.module.scss";
// import iconTop from "../../assets/Guestrooms/icon__top.svg";
// import SwiperArrowPrew from '../../assets/Guestrooms/SwiperArrowPrew.svg'
// import SwiperArrowNext from '../../assets/Guestrooms/SwiperArrowNext.svg'
// import Link from "next/link";
// import SwiperImage from "../../assets/Guestrooms/swiper__images.png";

// SwiperCore.use([Navigation, Pagination]);

// const Guestrooms = () => {
// 	const [activeIndex, setActiveIndex] = useState(-1);

// 	const customNavigation = {
// 		nextEl: ".custom-swiper-button-next",
// 		prevEl: ".custom-swiper-button-prev",
// 	};

// 	const slidesData = [
// 		{

// 			title: 'premier',
// 			image: SwiperImage,
// 			text: "Text for slide 1",
// 		},
// 		{
// 			title: 'deluxe',
// 			image: SwiperImage,
// 			text: "Text for slide 2",
// 		},
// 		{
// 			title: 'COZY',
// 			image: SwiperImage,
// 			text: "Text for slide 3",
// 		},
// 		{
// 			title: 'junior suite',
// 			image: SwiperImage,
// 			text: "Text for slide 4",
// 		},
// 		{
// 			title: 'deluxe',
// 			image: SwiperImage,
// 			text: "Text for slide 5",
// 		},
// 		{
// 			title: 'premier',
// 			image: SwiperImage,
// 			text: "Text for slide 6",
// 		},
// 	];

// 	return (
// 		<section className={s.background}>
// 			<div className={s.wrapper}>
// 				<div className={s.title}>
// 					<Image src={iconTop} alt="Icon" />
// 				</div>
// 				<div className={s.swiper__container}>
// 					<Swiper
// 						slidesPerView={4}
// 						spaceBetween={26}
// 						navigation={customNavigation}
// 						pagination={{ type: "fraction" }}
// 						className="swiper"

// 						breakpoints={{
// 							320: {
// 								slidesPerView: 1,
// 							},
// 							568: {
// 								slidesPerView: 2,
// 							},
// 							768: {
// 								slidesPerView: 3,
// 							},
// 							992: {
// 								slidesPerView: 4,
// 							},
// 						}}
// 					>
// 						{slidesData.map((slide, index) => (
// 							<SwiperSlide
// 								key={index}
// 								className={s.swiper__slide}
// 								onMouseEnter={() => setActiveIndex(index)}
// 								onMouseLeave={() => setActiveIndex(-1)}
// 							>
// 								<div className={s.swiper__title}>{slide.title}</div>
// 								<Image className={s.swiper__img} src={slide.image} alt="SwiperImage" />
// 								{activeIndex === index && (
// 									<div className={s.image__overlay}>
// 										<p>{slide.text}</p>
// 										<Link href="/">View room</Link>
// 										<button>Book now</button>
// 									</div>
// 								)}
// 							</SwiperSlide>
// 						))}
// 						<div className={s.swiper__navigation}>
// 							<div className={`custom-swiper-button-prev`}>
// 								<Image src={SwiperArrowPrew} alt='SwiperArrowPrew' />
// 							</div>
// 							<div className={`custom-swiper-button-next`}>
// 								<Image src={SwiperArrowNext} alt='SwiperArrowNext' />
// 							</div>
// 						</div>
// 					</Swiper>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Guestrooms;










// import React, { useState } from "react";
// import Image from "next/image";
// import SwiperCore, { Navigation, Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.min.css";

// import s from "./Guestrooms.module.scss";
// import iconTop from "../../assets/Guestrooms/icon__top.svg";
// import SwiperImage from "../../assets/Guestrooms/swiper__images.png";
// import SwiperArrowPrew from '../../assets/Guestrooms/SwiperArrowPrew.svg'
// import SwiperArrowNext from '../../assets/Guestrooms/SwiperArrowNext.svg'
// import Link from "next/link";

// SwiperCore.use([Navigation, Pagination]);

// const Guestrooms = () => {
// 	const [activeIndex, setActiveIndex] = useState(-1);

// 	const customNavigation = {
// 		nextEl: ".custom-swiper-button-next",
// 		prevEl: ".custom-swiper-button-prev",
// 	};
// 	let NumberSlides = [1, 2, 3, 4, 5, 6]
// 	return (
// 		<section className={s.background}>
// 			<div className={s.wrapper}>
// 				<div className={s.title}>
// 					<Image src={iconTop} alt="Icon" />
// 				</div>
// 				<div className={s.swiper__container}>
// 					<Swiper
// 						slidesPerView={4}
// 						spaceBetween={26}
// 						navigation={customNavigation}
// 						pagination={{ type: "fraction" }}
// 						className="swiper"
// 					>
// 						{NumberSlides.map((index) => (
// 							<SwiperSlide
// 								key={index}
// 								className={s.swiper__slide}
// 								onMouseEnter={() => setActiveIndex(index)}
// 								onMouseLeave={() => setActiveIndex(-1)}
// 							>

// 								<Image src={SwiperImage} alt="SwiperImage" />
// 								{activeIndex === index && (
// 									<div className={s.image__overlay}>
// 										<p>Bed size 1 Queen</p>
// 										<Link className={s.overlay__link} href='/'>View room</Link>
// 										<button>Book now</button>
// 									</div>
// 								)}
// 							</SwiperSlide>
// 						))}
// 						<div className={s.swiper__navigation}>
// 							<div className={`custom-swiper-button-prev`}><Image src={SwiperArrowPrew} alt='SwiperArrowPrew' /></div>
// 							<div className={`custom-swiper-button-next`}><Image src={SwiperArrowNext} alt='SwiperArrowNext' /></div>
// 						</div>
// 					</Swiper>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Guestrooms;








// import React, { useState } from "react";
// import Image from "next/image";
// import SwiperCore, { Navigation, Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.min.css";
// import s from "./Guestrooms.module.scss";
// import iconTop from "../../assets/Guestrooms/icon__top.svg";
// import SwiperArrowPrew from '../../assets/Guestrooms/SwiperArrowPrew.svg'
// import SwiperArrowNext from '../../assets/Guestrooms/SwiperArrowNext.svg'
// import Link from "next/link";
// import SwiperImage from "../../assets/Guestrooms/swiper__images.png";

// SwiperCore.use([Navigation, Pagination]);

// const Guestrooms = () => {
// 	const [activeIndex, setActiveIndex] = useState(-1);

// 	const customNavigation = {
// 		nextEl: ".custom-swiper-button-next",
// 		prevEl: ".custom-swiper-button-prev",
// 	};
// 	SwiperImage
// 	const slidesData = [
// 		{
// 			image: SwiperImage,
// 			text: "Text for slide 1",
// 		},
// 		{
// 			image: SwiperImage,
// 			text: "Text for slide 2",
// 		},
// 		{
// 			image: SwiperImage,
// 			text: "Text for slide 3",
// 		},
// 		{
// 			image: SwiperImage,
// 			text: "Text for slide 4",
// 		},
// 		{
// 			image: SwiperImage,
// 			text: "Text for slide 5",
// 		},
// 		{
// 			image: SwiperImage,
// 			text: "Text for slide 6",
// 		},
// 	];

// 	return (
// 		<section className={s.background}>
// 			<div className={s.wrapper}>
// 				<div className={s.title}>
// 					<Image src={iconTop} alt="Icon" />
// 				</div>
// 				<div className={s.swiper__container}>
// 					<Swiper
// 						slidesPerView={4}
// 						spaceBetween={26}
// 						navigation={customNavigation}
// 						pagination={{ type: "fraction" }}
// 						className="swiper"
// 					>

// 						{slidesData.map((slide, index) => (
// 							<SwiperSlide
// 								key={index}
// 								className={s.swiper__slide}
// 								onMouseEnter={() => setActiveIndex(index)}
// 								onMouseLeave={() => setActiveIndex(-1)}
// 							>
// 								<div className={s.swiper__title}>wdw</div>
// 								<Image className={s.swiper__img} src={slide.image} alt="SwiperImage" />
// 								{activeIndex === index && (
// 									<div className={s.image__overlay}>
// 										<p>{slide.text}</p>
// 										<Link href="/">View room</Link>
// 										<button>Book now</button>
// 									</div>
// 								)}
// 							</SwiperSlide>
// 						))}
// 						<div className={s.swiper__navigation}>
// 							<div className={`custom-swiper-button-prev`}>
// 								<Image src={SwiperArrowPrew} alt='SwiperArrowPrew' />
// 							</div>
// 							<div className={`custom-swiper-button-next`}>
// 								<Image src={SwiperArrowNext} alt='SwiperArrowNext' />
// 							</div>
// 						</div>
// 					</Swiper>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Guestrooms;


import React, { useState } from "react";
import Image from "next/image";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import s from "./Guestrooms.module.scss";
import iconTop from "../../assets/Guestrooms/icon__top.svg";
import SwiperArrowPrew from '../../assets/Guestrooms/SwiperArrowPrew.svg'
import SwiperArrowNext from '../../assets/Guestrooms/SwiperArrowNext.svg'
import Link from "next/link";
import SwiperImage from "../../assets/Guestrooms/swiper__images.png";

SwiperCore.use([Navigation, Pagination]);

const Guestrooms = () => {
	const [activeIndex, setActiveIndex] = useState(-1);

	const customNavigation = {
		nextEl: ".custom-swiper-button-next",
		prevEl: ".custom-swiper-button-prev",
	};

	const slidesData = [
		{

			title: 'premier',
			image: SwiperImage,
			text: "Text for slide 1",
		},
		{
			title: 'deluxe',
			image: SwiperImage,
			text: "Text for slide 2",
		},
		{
			title: 'COZY',
			image: SwiperImage,
			text: "Text for slide 3",
		},
		{
			title: 'junior suite',
			image: SwiperImage,
			text: "Text for slide 4",
		},
		{
			title: 'deluxe',
			image: SwiperImage,
			text: "Text for slide 5",
		},
		{
			title: 'premier',
			image: SwiperImage,
			text: "Text for slide 6",
		},
	];

	return (
		<section className={s.background}>
			<div className={s.wrapper}>
				<div className={s.title}>
					<Image src={iconTop} alt="Icon" />
				</div>
				<div className={s.swiper__container}>
					<Swiper
						slidesPerView={4}
						spaceBetween={26}
						navigation={customNavigation}
						pagination={{ type: "fraction" }}
						className="swiper"

						breakpoints={{
							320: {
								slidesPerView: 1,
							},
							568: {
								slidesPerView: 2,
							},
							768: {
								slidesPerView: 3,
							},
							992: {
								slidesPerView: 4,
							},
						}}
					>
						{slidesData.map((slide, index) => (
							<SwiperSlide
								key={index}
								className={s.swiper__slide}
								onMouseEnter={() => setActiveIndex(index)}
								onMouseLeave={() => setActiveIndex(-1)}
							>
								<div className={s.swiper__title}>{slide.title}</div>
								<Image className={s.swiper__img} src={slide.image} alt="SwiperImage" />
								{activeIndex === index && (
									<div className={s.image__overlay}>
										<p>{slide.text}</p>
										<Link href="/">View room</Link>
										<button>Book now</button>
									</div>
								)}
							</SwiperSlide>
						))}
						<div className={s.swiper__navigation}>
							<div className={`custom-swiper-button-prev`}>
								<Image src={SwiperArrowPrew} alt='SwiperArrowPrew' />
							</div>
							<div className={`custom-swiper-button-next`}>
								<Image src={SwiperArrowNext} alt='SwiperArrowNext' />
							</div>
						</div>
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default Guestrooms;
