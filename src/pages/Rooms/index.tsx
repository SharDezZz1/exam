import React from 'react'
import s from './Rooms.module.scss'
//components
import RoomsCom from '@/components/Rooms'
// img
import Image from 'next/image'
import HeaderImg from '../../assets/Rooms/headerImg.png'
//redux
import { useSelector } from 'react-redux'


const Rooms = () => {
    const rooms:[] = useSelector((state: any) => state.rooms.value)


	return (
		<>
			<section className={s.rooms}>
				<div className={s.rooms__top}>
					<Image src={HeaderImg} alt='HeaderImg' />
				</div>
				<div>
					<RoomsCom props={rooms}></RoomsCom>
				</div>
			</section>
		</>
	)
}

export default Rooms