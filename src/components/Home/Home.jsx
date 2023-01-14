import React from "react";
import Movies from "../Movies/Movies";
import People from "../People/People";
import Tvshows from "../Tvshows/Tvshows";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import styles from "./Home.module.scss";

export default function Home() {
  // const [trendingItems, setTrendingItems] = useState([]);
  // useEffect(() => {
  //   getTrendingItems();
  // }, []);

  // let getTrendingItems = async () => {
  //   let { data } = await axios.get(
  //     "https://api.themoviedb.org/3/trending/all/day?api_key=df0aad8d17f69e36bdd1a3de0d77194f"
  //   );
  //   setTrendingItems(data.results);
  // };

  return (
    <>
     
      {/* <div className="row my-3 py-5">
        <div className="col-md-4">
          <div className={`${styles.bordr} w-25 mb-4`}> </div>
          <h3>Trending</h3>
          <h3>Movies</h3>
          <h3>To watch Now</h3>
          <span className="text-muted">most watched movies by day</span>
          <div className={`${styles.bordr} w-100 mt-4`}></div>
        </div>
        {trendingItems.map((item, index) => (
          <div key={index} className="col-md-2">
            <div className="item">
              <img
                className="w-100"
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt=""
              />
              <h6>
                {item.title}
                {item.name}
              </h6>
            </div>
          </div>
        ))}
      </div> */}

      <Movies />
      <Tvshows />
      <People />
    </>
  );
}
