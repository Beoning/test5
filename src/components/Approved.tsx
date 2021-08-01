import React from "react";
import style from "../styles/Approved.module.scss";

const Approved = () => {
  return (
    <div className={style.banner}>
      <h1>
        ЗАЯВКА <br /> ПРИНЯТА
      </h1>
      <p>
        Держите телефон под рукой. <br /> Скоро с Вами свяжется наш менеджер.
      </p>
    </div>
  );
};

export default Approved;
