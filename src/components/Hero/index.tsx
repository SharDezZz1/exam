import React from 'react'
import Image from "next/image"
//images
import vec1 from "../../assets/MainPage/hero/Vector.png"
import vec2 from "../../assets/MainPage/hero/Vector-1.png"
//styles
import s from "./hero.module.scss"
//components
import CheckAvailability from '../CheckAvailability'
import { url } from 'inspector'




const Hero = (props: any) => {
    const { children } = props.children
    console.log(props)
    return (
        <>
            <section className={s.hero}
            >
                <div></div>
                <div className={s.hero__title}>
                    {/* <Image alt={""} src={props.img1}></Image>
                    <h1 className={s.hero__title_text}>{props.title}</h1>
                    <Image alt={""} src={props.img2}></Image> */}
                </div>
                {children}
            </section>
        </>
    )
}

export default Hero