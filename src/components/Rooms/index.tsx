import React from 'react'
import s from './rooms.module.scss'
//redux
import { useSelector } from 'react-redux'

const Rooms = () => {
    const rooms = useSelector((state:any) => state.rooms.value)
    console.log(rooms)
    return (
        <>
            <section className={s.rooms}>
                <div className={s.rooms__item}>

                </div>
            </section>
        </>
    )
}

export default Rooms