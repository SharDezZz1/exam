import React from 'react'
import s from './Rooms.module.scss'

// img
import Image from 'next/image'
import HeaderImg from '../../assets/Rooms/headerImg.png'


const Rooms = () => {
	return (
		<>
			<section className={s.rooms}>
				<div className={s.rooms__top}>
					<Image src={HeaderImg} alt='HeaderImg' />
				</div>
			</section>
		</>
	)
}

export default Rooms