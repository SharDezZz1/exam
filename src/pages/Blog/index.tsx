import React from 'react'
import s from './Blog.module.scss'
import Link from 'next/link'

// img
import Image from 'next/image'

import BlogHeader from '../../assets/Blog/Blog__header.png'
import Icon from '../../assets/Blog/Icon.svg'
import BlogCard from '../../assets/Blog/BlogCard.png'


const index = () => {
	return (
		<>
			<section className={s.blog}>
				<div className={s.blog__top}>
					<Image src={BlogHeader} alt='HeaderImg' />
				</div>
				<div className={s.blog__bottom}>
					<div className={s.banner}>
						<Image className={s.banner__img} src={Icon} alt='Icon' />
						<div className={s.banner__title}>Explore San Francisco Luxury</div>
						<div className={s.banner__subtitle}>
							Discover what makes Cornell Hotel de France an
							iconic and irreplaceable fixture of San Francisco life. From the distinctive local culture to the hotel’s
							unmatched international appeal, the life of luxury has never looked as good
							as it does from the windows of this unforgettably romantic boutique hotel
						</div>
					</div>
					<div className={s.cards}>
						<div className={s.card}>
							<Image className={s.card__img} src={BlogCard} alt='BlogCard' />
							<div className={s.card__overlay}>
								<div className={s.card__date}>December 23, 2022</div>
								<p className={s.card__text}>Lorem ipsum dolor sit amet consectetur. Ullamcorper.</p>
								<Link className={s.card__link} href="/">Read more</Link>
							</div>
						</div>
						<div className={s.card}>
							<Image className={s.card__img} src={BlogCard} alt='BlogCard' />
							<div className={s.card__overlay}>
								<div className={s.card__date}>December 23, 2022</div>
								<p className={s.card__text}>Lorem ipsum dolor sit amet consectetur. Ullamcorper.</p>
								<Link className={s.card__link} href="/">Read more</Link>
							</div>
						</div>
						<div className={s.card}>
							<Image className={s.card__img} src={BlogCard} alt='BlogCard' />
							<div className={s.card__overlay}>
								<div className={s.card__date}>December 23, 2022</div>
								<p className={s.card__text}>Lorem ipsum dolor sit amet consectetur. Ullamcorper.</p>
								<Link className={s.card__link} href="/">Read more</Link>
							</div>
						</div>
						<div className={s.card}>
							<Image className={s.card__img} src={BlogCard} alt='BlogCard' />
							<div className={s.card__overlay}>
								<div className={s.card__date}>December 23, 2022</div>
								<p className={s.card__text}>Lorem ipsum dolor sit amet consectetur. Ullamcorper.</p>
								<Link className={s.card__link} href="/">Read more</Link>
							</div>
						</div>
						<div className={s.card}>
							<Image className={s.card__img} src={BlogCard} alt='BlogCard' />
							<div className={s.card__overlay}>
								<div className={s.card__date}>December 23, 2022</div>
								<p className={s.card__text}>Lorem ipsum dolor sit amet consectetur. Ullamcorper.</p>
								<Link className={s.card__link} href="/">Read more</Link>
							</div>
						</div>
						<div className={s.card}>
							<Image className={s.card__img} src={BlogCard} alt='BlogCard' />
							<div className={s.card__overlay}>
								<div className={s.card__date}>December 23, 2022</div>
								<p className={s.card__text}>Lorem ipsum dolor sit amet consectetur. Ullamcorper.</p>
								<Link className={s.card__link} href="/">Read more</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default index