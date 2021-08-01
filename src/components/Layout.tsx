import React from "react";
import style from "../styles/Layout.module.scss";
import qr from "../img/qrcode.png";
import { NavLink } from "react-router-dom";

type Props = {
  info: JSX.Element;
  final: boolean;
};

const Layout = (props: Props) => {
  return (
    <section className={style.container}>
      {props.info}
      <div className={style.code}>
        <NavLink to="/" className={!props.final ? style.back : style.backFinal}>
          <div className={!props.final ? style.line : style.lineFinal} />
          <div className={!props.final ? style.line : style.lineFinal} />
        </NavLink>
        <div className={style.text}>
          <h2>Сканируйте QR-код для получения дополнительной информации</h2>
          <img src={qr} alt="QR код" />
        </div>
      </div>
    </section>
  );
};

export default Layout;
