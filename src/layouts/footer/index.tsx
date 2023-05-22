import React, { useState } from 'react'
import s from './footer.module.scss'
import Link from 'next/link'

// Image
import FooterLogo from '../../assets/footer/FooterLogo.svg'
import Instragram from '../../assets/footer/i-instagram.svg'
import Twitter from '../../assets/footer/i-twitter.svg'
import FaceBook from '../../assets/footer/i-fb.svg'


const Footer = () => {
	const [email, setEmail] = useState('');

	const handleInputChange = (event: any) => {
		setEmail(event.target.value);
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();
		console.log(email);
	};
	return (
		<>
			<footer className={s.footer}>
				<div>
					<img src={FooterLogo} alt="Cornell" />
				</div>
				<div className={s.footer__center}>
					<form className={s.footer__center_regictration} onSubmit={handleSubmit}>
						<input
							type="text"
							className={s.regictration__input}
							placeholder="Email"
							value={email}
							onChange={handleInputChange}
						/>
						<button type="submit" className={s.regictration__button}>
							join our newsletter
						</button>
					</form>
					{/* <div className={s.footer__center_regictration}>
						<input type="text" className={s.regictration__input} placeholder="Email" />
						<button className={s.regictration__button}>join our newsletter</button>
					</div> */}
					<ul className={s.footer__center_nav}>
						<li>Discover</li>
						<li>Specials</li>
						<li>Blog</li>
						<li>Rooms</li>
						<li>Amenities</li>
						<li>HISTORY</li>
						<li>contact</li>
						<li>hotel polities</li>
					</ul>
					<div className={s.footer__center_copyright}>
						<p>© 2023. Cornell. All Rights Reserved</p>
					</div>
				</div>
				<div className={s.footer__right}>
					<div className={s.footer__right_wrapper}>
						<div>
							<ul>
								<li>805-772-4437</li>
								<li>Cornell Hotel de France</li>
								<li>715 Bush Street, San Francisco, 94108</li>
							</ul>
						</div>
						<div className={s.footer__right_social}>
							<a href="/"><img src={Twitter} alt="Twitter" /></a>
							<a href="/"><img src={Instragram} alt="Instragram" /></a>
							<a href="/"><img src={FaceBook} alt="FaceBook" /></a>
						</div>
					</div>
					<div className={s.footer__right_copyright}>
						<p>© 2023. Cornell. All Rights Reserved</p>
					</div>
				</div>

			</footer>
		</>
	)
}

export default Footer