import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MediaContext } from "../../Context/MediaStore";
// import { useEffect } from "react";
import { Helmet } from "react-helmet";

export default function Movies() {
  let { trendingMovies } = useContext(MediaContext);

  //? To Change Title With Js with out Packj
  // useEffect(() => {
  //   document.title = "Movies";
  // }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Movies</title>
      </Helmet>
      <div className="row py-4 gy-3">
        <div className="col-md-4">
          <div className="bordr w-25 mb-3"> </div>
          <h3>Trending</h3>
          <h3>Movies</h3>
          <h3>To watch Now</h3>
          <p className="text-muted mb-3">most watched movies by day</p>
          <div className="bordr "></div>
        </div>
        {trendingMovies.slice(0, 10).map((item, index) => (
          <div className="col-md-2" key={index}>
            <Link
              className="nav-link"
              to={`/details/${item.id}/${item.media_type}`}
            >
              <div className="item position-relative">
                <img
                  className="w-100"
                  src={`https://image.tmdb.org/t/p/w500/` + item.poster_path}
                  alt=""
                />
                <h2 className="h6">{item.title}</h2>
                <span className="position-absolute top-0 end-0 p-2 bg-info">
                  {item.vote_average.toFixed(1)}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
