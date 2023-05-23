import React from 'react'
import s from './HotelAmenities.module.scss'

// img
import Image from 'next/image'
import imgTop from '../../assets/HotelAmenities/img__top.svg'
import imgHotel from '../../assets/HotelAmenities/HotelAmenities_main.png'

const HotelAmenities = () => {
	return (
		<>
			<section className={s.background}>
				<div className="card__container">
					<div className={s.card__container}>
						<Image src={imgHotel} alt="hotel" />
					</div>
				</div>

			</section>
		</>
	)
}

export default HotelAmenities