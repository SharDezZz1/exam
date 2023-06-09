import React from 'react'
import s from './rooms.module.scss'
import Image from 'next/image'
//redux

const Rooms = ({props}: any) => {
    
    return (
        <>
            <section className={s.rooms}>
                {
                    props.map((room: any) => {
                        if (room.id % 2 == 1) {
                            return (
                                <div className={s.rooms__itemL}>
                                    <Image alt='' src={room.img} className={s.rooms__img} width={50} height={50}></Image>
                                    <div className={s.rooms__itemL_info}>
                                        <div className={s.rooms__itemL_info_title}>{room.title}</div>
                                        <div className={s.rooms__itemL_info_desc}>{room.description}</div>
                                        <div className={s.rooms__itemL_info_sub}>{room.subDescription}</div>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div className={s.rooms__itemR}>
                                    <div className={s.rooms__itemR_info}>
                                        <div className={s.rooms__itemR_info_title}>{room.title}</div>
                                        <div className={s.rooms__itemR_info_desc}>{room.description}</div>
                                        <div className={s.rooms__itemR_info_sub}>{room.subDescription}</div>
                                    </div>
                                    <Image alt='' src={room.img} className={s.rooms__img} width={50} height={50}></Image>
                                </div>
                            )
                        }
                    })
                }
            </section>
        </>
    )
}

export default Rooms