import { createContext, useEffect, useState } from "react";
import React from "react";
import axios from "axios";

export let MediaContext = createContext(null);

export default function MediaContextProvider(props) {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingPerson, setTrendingPerson] = useState([]);
  const [trendingTvshows, setTrendingTvshows] = useState([]);

  let getTrendingItems = async (mediaType, callback) => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=df0aad8d17f69e36bdd1a3de0d77194f&&page=5`
    );
    callback(data.results);
  };

  useEffect(() => {
    getTrendingItems("movie", setTrendingMovies);
    getTrendingItems("tv", setTrendingTvshows);
    getTrendingItems("person", setTrendingPerson);
  }, []);

  return (
    <MediaContext.Provider
      value={{ trendingMovies, trendingPerson, trendingTvshows }}
    >
      {props.children}
    </MediaContext.Provider>
  );
}
