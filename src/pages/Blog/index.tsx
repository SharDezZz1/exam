import React from 'react'
import s from './Blogs.module.scss'
import Link from 'next/link'
// img
import Image from 'next/image'
import img1 from '../../assets/Blog/img1.png'
import img2 from '../../assets/Blog/img2.png'
import img3 from '../../assets/Blog/img3.png'

const index = () => {
	return (
		<>
			<section className={s.wrapper}>
				<h2 className={s.title}>Must-see Events in Morro Bay on New Year 2023 Weekend</h2>
				<ul className={s.list}>
					<li className={s.item}>
						<Image src={img1} alt="img1" />
						<div className={s.item__text}>
							<p className={s.date}>December 23, 2022</p>
							<p className={s.description}>Lorem ipsum dolor sit amet consectetur. Ut dolor et mi urna eget non. Ac nunc nunc ut a cum. Interdum feugiat sed justo elit tristique quam lacus enim. Velit dignissim gravida nisl nisi proin. Proin phasellus egestas facilisis non tristique pellentesque mollis. Et morbi commodo diam sit eget eget iaculis tortor euismod. Dui integer a quis magnis id nibh consequat maecenas. Eget mauris velit fusce faucibus tempus tincidunt. Diam ornare amet magna eu amet tincidunt ultricies. Enim quis elit vulputate donec placerat at ridiculus pretium. Suspendisse vitae at donec sodales adipiscing donec hac tellus neque.</p>
							<p className={s.description}>Lorem ipsum dolor sit amet consectetur. Est vitae faucibus lacus nibh. Magna parturient euismod tortor nunc. Porta egestas turpis in suspendisse. Facilisis amet dolor consectetur ornare accumsan et aliquam sit sodales. Mauris commodo cras arcu sed sed aliquam commodo et. Sem interdum sit pretium scelerisque nunc.</p>
						</div>
					</li>
					<li className={s.item}>
						<Image src={img1} alt="img1" />
						<div className={s.item__text}>
							<p className={s.date}>December 23, 2022</p>
							<p className={s.description}>Lorem ipsum dolor sit amet consectetur. Ut dolor et mi urna eget non. Ac nunc nunc ut a cum. Interdum feugiat sed justo elit tristique quam lacus enim. Velit dignissim gravida nisl nisi proin. Proin phasellus egestas facilisis non tristique pellentesque mollis. Et morbi commodo diam sit eget eget iaculis tortor euismod. Dui integer a quis magnis id nibh consequat maecenas. Eget mauris velit fusce faucibus tempus tincidunt. Diam ornare amet magna eu amet tincidunt ultricies. Enim quis elit vulputate donec placerat at ridiculus pretium. Suspendisse vitae at donec sodales adipiscing donec hac tellus neque.</p>
							<p className={s.description}>Lorem ipsum dolor sit amet consectetur. Est vitae faucibus lacus nibh. Magna parturient euismod tortor nunc. Porta egestas turpis in suspendisse. Facilisis amet dolor consectetur ornare accumsan et aliquam sit sodales. Mauris commodo cras arcu sed sed aliquam commodo et. Sem interdum sit pretium scelerisque nunc.</p>
						</div>
					</li>
					<li className={s.item}>
						<Image src={img1} alt="img1" />
						<div className={s.item__text}>
							<p className={s.date}>December 23, 2022</p>
							<p className={s.description}>Lorem ipsum dolor sit amet consectetur. Ut dolor et mi urna eget non. Ac nunc nunc ut a cum. Interdum feugiat sed justo elit tristique quam lacus enim. Velit dignissim gravida nisl nisi proin. Proin phasellus egestas facilisis non tristique pellentesque mollis. Et morbi commodo diam sit eget eget iaculis tortor euismod. Dui integer a quis magnis id nibh consequat maecenas. Eget mauris velit fusce faucibus tempus tincidunt. Diam ornare amet magna eu amet tincidunt ultricies. Enim quis elit vulputate donec placerat at ridiculus pretium. Suspendisse vitae at donec sodales adipiscing donec hac tellus neque.</p>
							<p className={s.description}>Lorem ipsum dolor sit amet consectetur. Est vitae faucibus lacus nibh. Magna parturient euismod tortor nunc. Porta egestas turpis in suspendisse. Facilisis amet dolor consectetur ornare accumsan et aliquam sit sodales. Mauris commodo cras arcu sed sed aliquam commodo et. Sem interdum sit pretium scelerisque nunc.</p>
						</div>
					</li>
				</ul>
				<div className={s.action}>
					<button className={s.btn}>Stay with us</button>
					<Link href="/">back to blogs page</Link>
				</div>
			</section>
		</>
	)
}

export default index