import React from 'react'
import { useForm, Resolver } from "react-hook-form";
//styles
import s from "./check.module.scss"
import { isDate } from 'util/types'

type FormValues = {
  ArrivalDate: Date;
  DepartuureDate: Date;
  Adults: number;
  Children: number;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: !values.ArrivalDate ? {} : values,
    errors: !values.ArrivalDate ? {
      ArrivalDate: {
        type: "required",
        message: "Please supply arrival date"
      },
      DepartuureDate: {
        type: "required",
        message: "Please supply departuure date"
      },
      Adults: {
        type: "required",
        message: "Please supply adultsd"
      },
      Children: {
        type: "required",
        message: "Please supply children"
      },
    } : {},
  };
};

const CheckAvailability = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: resolver
  });
  const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)));

  return (
    <>
      <div className={s.available}>
        <form action="" onSubmit={onSubmit} className={s.form}>
          <div></div>

          <div className={s.form__block}>
            <label className={s.form__block_label}>Arrival date</label>
            <input className={`${s.form__block_input} ${errors?.ArrivalDate ? s.error : ''}`} type="date" {...register("ArrivalDate")}
              placeholder="Email" />
            <p className={s.error}>{errors?.ArrivalDate?.message}</p>
          </div>
          <div className={s.form__block}>
            <label className={s.form__block_label}>Departuure Date</label>
            <input className={`${s.form__block_input} ${errors?.DepartuureDate ? s.error : ''}`} type="date" {...register("DepartuureDate")} />
            <p className={s.error}>{errors?.DepartuureDate?.message}</p>
          </div>
          <div className={s.form__block}>
            <label className={s.form__block_label}>Adults</label>
            <input className={`${s.form__block_input} ${errors?.Adults ? s.error : ''}`} type="text" {...register("Adults")} />
            <p className={s.error}>{errors?.Adults?.message}</p>
          </div>
          <div className={s.form__block}>
            <label className={s.form__block_label}>Children</label>
            <input className={`${s.form__block_input} ${errors?.Children ? s.error : ''}`} type="text" {...register("Children")} />
            <p className={s.error}>{errors?.Children?.message}</p>
          </div>
          <button className={s.form__button} type="submit">CHECK AVAILABILITY</button>
        </form>
      </div>
    </>
  )
}

export default CheckAvailability