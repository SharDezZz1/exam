import React from 'react'
import s from "./discover.module.scss"
import Image from 'next/image'
import title from '../../assets/discover/Frame 4820.svg'
//components
import Rooms from "@/components/Rooms"

const Discover = () => {
  return (
    <>
      <section className={s.discover}>
        <Rooms></Rooms>
      </section>
    </>
  )
}

export default Discover