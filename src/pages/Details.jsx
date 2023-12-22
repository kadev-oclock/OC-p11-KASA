import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "../components/Carrousel/Carrousel";
import redstar from "/src/assets/img/red-star.svg";
import greystar from "/src/assets/img/grey-star.svg";
import "./Details.scss";
import datas from "../data/data.json";
import Toggle from "../components/Toggle/Toggle";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Appart, setAppart] = useState({
    id: "",
    title: "",
    cover: "",
    pictures: [],
    description: "",
    host: {
      name: "",
      picture: "",
    },
    rating: "",
    location: "",
    equipments: [],
    tags: [],
  });
  useEffect(() => {
    const appart = datas.find((elem) => elem.id === id);
    if (appart) {
      setAppart(appart);
    } else {
      navigate("*");
    }
  }, [id, navigate]);

  /**
   * separe le nom et prenom
   */

  const fullName = Appart.host.name;
  const [firstName, lastName] = fullName.split(" ");
  console.log("Prénom :", firstName);
  console.log("Nom :", lastName);
  /**
   * longueur d'un array pour afficher les likes
   */
  const star = [1, 2, 3, 4, 5];

  return (
    <div className="container">
      <Carrousel sliders={Appart.pictures} />
      <div className="infoDetail">
        <div className="infoDetail__title">
          <h1 className="infoDetail__house">{Appart.title}</h1>
          <h2 className="infoDetail__txt">{Appart.location}</h2>
          <div className="badge">
            {Appart.tags.map((tag, index) => (
              <p key={index} className={`badge__info`}>
                
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className="infoDetail__contain">
          <div className="infoDetail__host">
            <div className="infoDetail__hostname">
              <h3>{firstName}</h3>
              <h3>{lastName}</h3>
            </div>
            <img
              className="infoDetail__picture"
              src={Appart.host.picture}
              alt={Appart.host.name}
            />
          </div>
          <div className="infoDetail__star">
            {star.map((num) => (
              <img
                key={num}
                src={Appart.rating >= num ? redstar : greystar}
                alt="star"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="dropdown__contain">
        <Toggle title="Description" content={Appart.description} />
        <Toggle title="Equipement" content={Appart.equipments} />
      </div>
    </div>
  );
}
export default Details;
