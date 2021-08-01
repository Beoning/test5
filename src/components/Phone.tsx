import React, { useState } from "react";
import style from "../styles/Phone.module.scss";
import check from "../img/check.svg";
import check2 from "../img/check2.svg";
import { useHistory } from "react-router-dom";

const Phone = () => {
  const [checked, setCheked] = useState(false);
  const history = useHistory();
  const handleClick = () => {
    history.push("/finalpage");
  };
  return (
    <div className={style.banner}>
      <h1>Введите ваш номер мобильного телефона</h1>
      <span>+7(___)___-__-__</span>
      <p>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
      <div className={style.keyboard}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>Стереть</button>
        <button>0</button>
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
      <button className={style.confirm} onClick={handleClick}>
        Подтвердить номер
      </button>
    </div>
  );
};

export default Phone;
