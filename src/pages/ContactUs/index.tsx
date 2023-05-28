import React, { useState } from 'react'
import s from './contactus.module.scss'


// img
import Image from 'next/image'
import contactTitlte from '../../assets/ContactUs/ContactUs__title.svg'




const ContactUs = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (event: any) => {
		event.preventDefault();

		// Перевірка наявності даних у полях
		if (name === '' || email === '' || message === '') {
			// Якщо одне з полів є порожнім, не відправляємо дані
			console.log('Please fill in all fields');
			return;
		}

		// Логіка для обробки даних
		console.log('Name:', name);
		console.log('Email:', email);
		console.log('Message:', message);

		// Очистка полів після відправки даних
		setName('');
		setEmail('');
		setMessage('');
	};
	return (
		<>
			<section className={s.background}>
				<div className={s.title}>
					<Image src={contactTitlte} alt='contactTitlte' />
				</div>
				<div className={s.contact}>
					<div className={s.contact__info}>
						<div className={s.contact__info_text}>
							<p>Phone</p>
							<p>+14154213154</p>
							<p>Address</p>
							<p>715 Bush Street, San Francisco, 94108</p>
						</div>
					</div>
				</div>
				<div className={s.registration}>
					<h2 className={s.registration__title}>write us</h2>
					<form className={s.registration__form} onSubmit={handleSubmit}>
						<div className={s.form__input}>
							<input
								className={s.registration__input}
								placeholder="Your Name"
								value={name}
								onChange={(event) => setName(event.target.value)}
							/>
							<p>{ }</p>

							<input type={'email'}
								className={s.registration__input}
								placeholder="Your Email"
								value={email}
								onChange={(event) => setEmail(event.target.value)}
							/>
							<p>{ }</p>

							<input
								className={s.registration__input}
								placeholder="Your Message"
								value={message}
								onChange={(event) => setMessage(event.target.value)}
							/>
							<p>{ }</p>
						</div>
						<button className={s.registration__button} type="submit">
							submit
						</button>
					</form>
				</div>
			</section>
		</>
	)
}

export default ContactUs





