import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "../components/Carrousel/Carrousel";
import "./Details.scss";
import datas from "../data/data.json";

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
  return (
    <div className="container">
      <Carrousel sliders={Appart.pictures} />
      <div className="infoDetail">
        <div className="infoDetail__title">
          <h1>{Appart.title}</h1>
          <h2>{Appart.location}</h2>
        </div>
      </div>
    </div>
  );
}
export default Details;
