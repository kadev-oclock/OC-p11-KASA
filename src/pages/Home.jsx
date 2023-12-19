import React from "react";
import datas from "../data/data.json";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";

import "./Home.scss";

function Home() {
  return (
    <>
      <Banner />
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
