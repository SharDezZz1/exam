import React from 'react'
import s from './header.module.scss'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import logo from '../../assets/Layouts/header/Group 4578.svg'

//components

const Header = () => {

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={s.header}>
                <div className={s.logo}>
                    <Link href='/' >
                        <Image src={logo} alt='logo'></Image>
                    </Link>
                </div>
                <ul className={`${s.nav}`}>
                    <li className={s.nav__item}>
                        <Link className={s.nav__item_link} href="/Discover">
                            DISCOVER
                        </Link>
                    </li>
                    <li className={s.nav__item}>
                        <Link className={s.nav__item_link} href="/Specials">
                            SPECIALS
                        </Link>
                    </li>
                    <li className={s.nav__item}>
                        <Link className={s.nav__item_link} href="/Blog">
                            BLOG
                        </Link>
                    </li>
                    <li className={s.nav__item}>
                        <Link className={s.nav__item_link} href="/Rooms">
                            ROOMS
                        </Link>
                    </li>
                    <li className={s.nav__item}>
                        <Link className={s.nav__item_link} href="/amenities">
                            AMENITIES
                        </Link>
                    </li>
                    <li className={s.nav__item}>
                        <Link className={s.nav__item_link} href="/history">
                            HISTORY
                        </Link>
                    </li>
                    <li className={s.nav__item}>
                        <Link className={s.nav__item_link} href="/ContactUs">
                            CONTACT
                        </Link>
                    </li>
                    <li className={s.nav__item}>
                        <div>124-123-1234</div>
                    </li>
                </ul>
                <button className={s.book_btn} onClick={(e) => {
                    e.preventDefault();
                    alert("Booked")
                }}>BOOK NOW</button>

            </header>
        </>
    )

}

export default Header