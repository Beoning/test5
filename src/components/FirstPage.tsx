import React, { useEffect, useState } from "react";
import style from "../styles/FirstPage.module.scss";
import qr from "../img/qrcode.png";
import { NavLink } from "react-router-dom";
import video from "../video/video.mp4";

const Banner = () => {
  const [started, setStarted] = useState(false);
  const [appear, setAppear] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAppear(true);
    }, 5000);
  }, [started]);
  return (
    <section className={style.container}>
      <video
        autoPlay
        muted
        loop
        className={style.video}
        width="1280px"
        height="720px"
        onPlay={() => setStarted(true)}
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className={appear ? style.banner : style.banner2}>
        <h2>
          Используйте мечту вашего малыша! <br />
          Подарите ему собаку!
        </h2>
        <img src={qr} alt="QR код" />
        <span>Сканируйте QR-код или нажмите ОК</span>
        <NavLink to="/secondpage" className={style.a}>
          OK
        </NavLink>
      </div>
    </section>
  );
};

export default Banner;
