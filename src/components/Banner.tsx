import React from "react";
import style from "../styles/App.module.scss";
import qr from "../img/qrcode.png";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <section className={style.video}>
      <div className={style.banner}>
        <h2>
          Используйте мечту вашего малыша! <br />
          Подарите ему собаку!
        </h2>
        <img src={qr} alt="QR код" />
        <span>Сканируйте QR-код или нажмите ОК</span>
        <NavLink to="/enternumber" className={style.a}>
          OK
        </NavLink>
      </div>
    </section>
  );
};

export default Banner;
