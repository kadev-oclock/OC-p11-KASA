import React from "react";
import "./error.scss";
import { Link } from "react-router-dom";

function Error() {
  return <>
   <main className="error">
  <h1 className="error__name">404</h1>
  <h2 className="error__intro">Oups! La page que vous demandez n'existe pas.</h2>
  <Link className="error__link"  to="/">Retourner sur la page d’accueil</Link>
   </main>
    
  </>;
}
export default Error;
