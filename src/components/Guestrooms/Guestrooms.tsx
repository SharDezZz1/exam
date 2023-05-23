import React from 'react'

import s from "./Guestrooms.module.scss"

// img
import Image from 'next/image'
import iconTop from '../../assets/Guestrooms/icon__top.svg'

const Guestrooms = () => {
	return (
		<>
			<section className={s.background}>
				<div className={s.wrapper}>
					<div className={s.title}>
						<Image src={iconTop} alt='Icon' />
					</div>
				</div>
			</section>
		</>
	)
}

export default Guestrooms