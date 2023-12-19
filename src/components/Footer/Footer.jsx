import React from "react";
import logoBlanc from "/src/assets/img/logo-white.svg";
import "./Footer.scss";


export default function Footer() {
  return (
    <footer className="footer">
      <a href={""}>
        <img className="footer__logo" src={logoBlanc} alt="logo_kasa" />
      </a>
      <p className="footer__txt">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
