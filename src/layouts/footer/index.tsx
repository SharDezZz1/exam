import React, { useState } from 'react'
import s from './footer.module.scss'
import Link from 'next/link'
import { useForm, Resolver } from "react-hook-form";

// Image
import Image from 'next/image';
import FooterLogo from '../../assets/footer/FooterLogo.svg'
import Instagram from '../../assets/footer/i-instagram.svg'
import Twitter from '../../assets/footer/i-twitter.svg'
import FaceBook from '../../assets/footer/i-fb.svg'

type FormValues = {
	Email: string;
};

const resolver: Resolver<FormValues> = async (values) => {
	return {
		values: !values.Email ? {} : values,
		errors: !values.Email
			? {
				Email: {
					type: "required",
					message: "Please supply your email address"
				}
			}
			: {}
	};
};
const Footer = () => {


	/**
	 * FORM
	 */
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormValues>({
		resolver: resolver
	});
	const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)));



	return (
		<>
			<footer className={s.footer}>
				<div className={s.footer__left}>
					<Image src={FooterLogo} alt="Cornell" />
				</div>
				<div className={s.footer__center}>
					<form className={s.footer__center_registration} onSubmit={onSubmit}>
						<div>
							<input
								className={`${s.registration__input} ${errors?.Email ? s.error : ''}`}
								{...register("Email")}
								placeholder="Email"
							/>
							<p className={s.error}>{errors?.Email?.message}</p>
						</div>
						<button className={s.registration__button} type="submit">
							join our newsletter
						</button>
					</form>
					{/* <form className={s.footer__center_registration} onSubmit={handleSubmit}>
						<input
							type="text"
							className={inputClassName}
							placeholder="Email"
							value={email}
							onChange={handleInputChange}
						/>
						<button type="submit" className={s.registration__button}>
							join our newsletter
						</button>
					</form> */}

					{/* <div className={s.footer__center_registration}>
						<input type="text" className={s.registration__input} placeholder="Email" />
						<button className={s.registration__button}>join our newsletter</button>
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
							<Link className={s.social__item} href="/"><Image src={Twitter} alt="Twitter" /></Link>
							<Link className={s.social__item} href="/"><Image  src={Instagram} alt="Instagram" /></Link>
							<Link className={s.social__item} href="/"><Image src={FaceBook} alt="FaceBook" /></Link>
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