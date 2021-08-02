import React, { KeyboardEvent, useState } from "react";
import style from "../styles/Phone.module.scss";
import check from "../img/check.svg";
import check2 from "../img/check2.svg";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { insert, selectPhoneNumber } from "../redux/reducers/keyboard-reducer";

const keys = [
  { value: "1", key: "1" },
  { value: "2", key: "2" },
  { value: "3", key: "3" },
  { value: "4", key: "4" },
  { value: "5", key: "5" },
  { value: "6", key: "6" },
  { value: "7", key: "7" },
  { value: "8", key: "8" },
  { value: "9", key: "9" },
  { value: "Стереть", key: "Backspace" },
  { value: "0", key: "0" },
];

const Phone = () => {
  const dispatch = useDispatch();
  const number = useSelector(selectPhoneNumber);
  const [checked, setCheked] = useState(false);

  const n = (i: number) => {
    if (number[i]) {
      return number[i];
    }
    return "_";
  };

  const onKeyDownHandle = (e: KeyboardEvent) => {
    if (Number(e.key) || e.key === "Backspace") {
      dispatch(insert(e.key));
    }
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
        {keys.map((item) => (
          <button
            key={item.value}
            value={item.value}
            onKeyDown={onKeyDownHandle}
            onClick={(e) =>
              dispatch(insert((e.target as HTMLButtonElement).value))
            }
          >
            {item.value}
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
