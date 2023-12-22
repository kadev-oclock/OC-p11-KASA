import React from "react";

import { useState } from "react";
import arrow from "/src/assets/img/chevron.svg";
import "./Toggle.scss";

function Toggle({ title, content }) {
  const [show, setShow] = useState(true);
  const classShow = (show)?"show":"noshow"
  return (
    <div className="collapse__contain">
      {" "}
      <div className="collapse">
        {" "}
        <button className="collapse__button" onClick={() => setShow(!show)}>
          {" "}
          <p> {title}</p> <img className={classShow+" collapse__arrow"} src={arrow} alt="" />{" "}
        </button>{" "}
         <div className={classShow+" collapse__background"} >
            {" "}
            {Array.isArray(content) ? (
              <ul>
                {" "}
                {content.map((elem, index) => (
                  <li key={index}> {elem}</li>
                ))}
              </ul>
            ) : (
              <p> {content}</p>
            )}
          </div>
        
      </div>{" "}
    </div>
  );
}

export default Toggle;
