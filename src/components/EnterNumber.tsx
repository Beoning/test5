import React from "react";
import style from "../styles/EnterNumber.module.scss";
import qr from "../img/qrcode.png";
import { NavLink } from "react-router-dom";

const EnterNumber = () => {
  return (
    <section className={style.container}>
      <div className={style.banner}></div>
      <div className={style.code}>
        <NavLink to="/" className={style.back}>
          <div className={style.line} />
          <div className={style.line} />
        </NavLink>
        <div className={style.text}>
          <h2>Сканируйте QR-код для получения дополнительной информации</h2>
          <img src={qr} alt="QR код" />
        </div>
      </div>
    </section>
  );
};

export default EnterNumber;
