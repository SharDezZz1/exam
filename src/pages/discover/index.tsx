import React from 'react'
import s from "./discover.module.scss"
import Image from 'next/image'
import title from '../../assets/discover/Frame 4820.svg'
//components
import RoomsLeft from "@/components/RoomsLeft"

const Discover = () => {
  return (
    <>
      <section className={s.discover}>
        <RoomsLeft></RoomsLeft>
      </section>
    </>
  )
}

export default Discover