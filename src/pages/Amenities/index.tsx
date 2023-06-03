import React from 'react'
import s from './Amenities.module.scss'

// img
import Image from 'next/image'
import HeaderImg from '../../assets/Amenities/headerImg.png'
import icon from '../../assets/Amenities/Icon.svg'
import icons from '../../assets/Amenities/icons.png'
import icons2 from '../../assets/Amenities/icons2.png'
import PanelImg from '../../assets/Amenities/PanelItemImg .png'



const Amenities = () => {
	return (
		<>
			<section className={s.rooms}>
				<div className={s.rooms__top}>
					<Image src={HeaderImg} alt='HeaderImg' />
				</div>
				<div className={s.rooms__center}>
					<div className={s.banner}>
						<Image src={icon} alt='icon' />
						<div className={s.banner__title}>Modern Comforts With a French Touch</div>
						<div className={s.banner__subtitle}>
							Cornell Hotel de France is an ideal destination for travelers looking for the comforts of a boutique Paris hotel
							right in the heart of San Francisco. From the classic dècor that pays homage to renowned European artists, to the
							top-of-the-line bath products provided by L'Occitane,
							every night spent here will be a night to remember.
						</div>

					</div>
				</div>
				<section className={s.rooms__bottom}>
					<div className={s.grid__Item}>
						<Image className={s.item__img} src={PanelImg} alt="Зображення 1" />
					</div>
					<div className={s.grid__Item}>
						<div className={s.info}>
							<Image src={icons} alt='icons' />
							<h2 className={s.info__title}>Cornell Hotel de France</h2>
							<p>Modest room with 1 queen-sized, fit for 1-2 guests</p>
							<p className={s.info__text}>Originally built in 1910, Cornell Hotel de France perfectly blends elegant French Colonial architecture with the modern comforts of a boutique Bed & Breakfast. The hallways on each floor feature fine prints from a different avant-garde artist including Modigliani, Matisse, Chagall, Gauguin, and Toulouse Lautrec, with the first floor dedicated to Jeanne D’Arc. Each room is individually decorated to give guests their own unique taste of European hospitality.</p>
						</div>
					</div>
					<div className={s.grid__Item}>
						<div className={s.info}>
							<Image src={icons2} alt='icons' />
							<h2 className={s.title}>About</h2>
							<p>Comfortable room with 1 queen-sized bed, perfect for 1-2 guests</p>
							<p className={s.text}>Cornell Hotel de France strives to deliver the exact experience you would get at a hotel on the Rive gauche in Paris. Built by architect A.W. Pattiani in 1910, the building was registered at the National Register of Historic Places as part of the “Lower Nob Hill Apartment Hotel District." Over the years, it has seen extensive renovations to provide greater accessibility and modern comfort while keeping intact its signature romantic Victorian architecture.</p>
						</div>
					</div>
					<div className={s.grid__Item}>
						<Image className={s.item__img} src={PanelImg} alt="Зображення 2" />
					</div>
					<div className={s.grid__Item}>
						<Image className={s.item__img} src={PanelImg} alt="Зображення 3" />
					</div>
					<div className={s.grid__Item}>
						<div className={s.info}>
							<Image src={icons} alt='icons' />
							<h2 className={s.title}>Location</h2>
							<p>Deluxe room with 1 queen-sized bed, ideal for 2 guests</p>
							<p className={s.text}>Cornell is located in the neighborhood of Nob Hill right by Union Square, the bustling commercial hub of downtown San Francisco. It is also only 11 miles from the Moscone Conference Center, making it a great place to relax for conference attendees. Nob Hill is a renowned luxury destination in San Francisco, known for its many high-end hotels and historic architecture that dates back to the early 20th century. The neighborhood is home to a host of Michelin-starred restaurants and boutique shops, as well as art galleries and historic landmarks, so there is always something to do or see. From the classic architecture to the prestigious luxury shops, Nob Hill delivers the best of what “Old” San Francisco has to offer.</p>
						</div>
					</div>

				</section>
			</section>
		</>
	)
}

export default Amenities