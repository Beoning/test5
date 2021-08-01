import React, { useState } from "react";
import style from "../styles/Phone.module.scss";
import check from "../img/check.svg";
import check2 from "../img/check2.svg";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  insert,
  selectkeys,
  selectPhoneNumber,
} from "../redux/reducers/keyboard-reducer";

const Phone = () => {
  const dispatch = useDispatch();
  const keys = useSelector(selectkeys);
  const number = useSelector(selectPhoneNumber);
  const [checked, setCheked] = useState(false);

  const n = (i: number) => {
    if (number[i]) {
      return number[i];
    }
    return "_";
  };

  const history = useHistory();

  const handleClick = () => {
    if (checked && number[number.length - 1] !== null) {
      history.push("/finalpage");
    }
  };
  return (
    <div className={style.banner}>
      <h1>Введите ваш номер мобильного телефона</h1>
      <span>
        +7({n(0)}
        {n(1)}
        {n(2)}){n(3)}
        {n(4)}
        {n(5)}-{n(6)}
        {n(7)}-{n(8)}
        {n(9)}
      </span>
      <p>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
      <div className={style.keyboard}>
        {keys.map((key) => (
          <button
            key={key}
            value={key}
            onClick={(e) =>
              dispatch(insert((e.target as HTMLButtonElement).value))
            }
          >
            {key}
          </button>
        ))}
      </div>
      <div className={style.agreement}>
        <button onClick={() => setCheked(!checked)}>
          {checked ? (
            <>
              <img src={check} alt="" />
              <img src={check2} alt="" />
            </>
          ) : null}
        </button>
        <p>Согласие на обработку персональных данных</p>
      </div>
      <button
        className={
          number[number.length - 1] !== null && checked
            ? style.confirmed
            : style.confirm
        }
        onClick={handleClick}
      >
        Подтвердить номер
      </button>
    </div>
  );
};

export default Phone;
