import React from 'react'
//styles
import s from "./check.module.scss"

const CheckAvailability = () => {
  return (
    <>
        <div className={s.available}>
            <form action="">
                <div></div>
                <label>Arrival date</label>
                <input type="text" />
            </form>
        </div>
    </>
  )
}

export default CheckAvailability