import React from 'react'
import Image from "next/image"
//images
import vec1 from "../../assets/MainPage/hero/Vector.png"
import vec2 from "../../assets/MainPage/hero/Vector-1.png"
//styles
import s from "./hero.module.scss"
//components
import CheckAvailability from '../CheckAvailability'

const Hero = () => {
    return (
        <>
            <section className={s.hero}>
                <div></div>
                <div className={s.hero__title}>
                    <Image alt={""} src={vec1}></Image>
                    <h1 className={s.hero__title_text}>European romance comes<br></br> to Nob Hill</h1>
                    <Image alt={""} src={vec2}></Image>
                </div>
                <CheckAvailability></CheckAvailability>
            </section>
        </>
    )
}

export default Hero