import React from 'react'
import s from "./discover.module.scss"
import Image from 'next/image'
import title from '../../assets/discover/Frame 4820.svg'
//images
import HeaderImg from '../../assets/discover/Header 2img.png'
import Icon from '../../assets/Specials/Icon.svg'
//components

const Discover = () => {
    return (
        <>
            <section className={s.discover}>
                <div className={s.specials__top}>
                    <Image src={HeaderImg} alt='HeaderImg' />
                </div>
                <div className={s.banner}>
                    <Image className={s.banner__img} src={Icon} alt='Icon' />
                    <div className={s.banner__title}>Get the Best Deals on Your Next Stay</div>
                    <div className={s.banner__subtitle}>he good life gets even better when you save a little on your stay. Find a deal that
                        works for you and get ready to experience the most romantic hotel in San Francisco
                    </div>
                </div>
            </section>
        </>
    )
}

export default Discover