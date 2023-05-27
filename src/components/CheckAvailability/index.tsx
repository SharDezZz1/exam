import React from 'react'
//styles
import s from "./check.module.scss"
import { isDate } from 'util/types'

const CheckAvailability = () => {
  return (
    <>
      <div className={s.available}>
        <form action="" className={s.form}>
          <div></div>

          <div className={s.form__block}>
            <label className={s.form__block_label}>Arrival date</label>
            <input className={s.form__block_input} type="date" />
          </div>
          <div className={s.form__block}>
            <label className={s.form__block_label}>Departuure Date</label>
            <input className={s.form__block_input} type="date" />
          </div>
          <div className={s.form__block}>
            <label className={s.form__block_label}>Adults</label>
            <input className={s.form__block_input} type="text" />
          </div>
          <div className={s.form__block}>
            <label className={s.form__block_label}>Children</label>
            <input className={s.form__block_input} type="text" />
          </div>
          <button className={s.form__button} type="submit" onClick={(e) => {
                    e.preventDefault();
                    alert("Checked")
                }}>CHECK AVAILABILITY</button>
        </form>
      </div>
    </>
  )
}

export default CheckAvailability