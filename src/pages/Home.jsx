import React from "react";
import datas from "../data/data.json";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import bannerImageHome from '/src/assets/img/banner.jpg'; 

import "./Home.scss";

function Home() {
  return (
    <>
      <Banner title = "Chez vous, partout et ailleurs"   bannerImage={bannerImageHome} />
      <div className="home">
        <div className="home__contain">
          {datas.map((data) => {
            return <Card key={data.id} data={data} />;
          })}
        </div>
      </div>
    </>
  );
}
export default Home;
