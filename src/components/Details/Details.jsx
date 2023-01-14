import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Details() {
  const [itemDetails, setItemDetail] = useState({});
  let params = useParams();

  let getTrendingDetails = async () => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/${params.mediaType}/${params.id}?api_key=df0aad8d17f69e36bdd1a3de0d77194f`
    );
    setItemDetail(data);
  };

  useEffect(() => {
    getTrendingDetails();
  }, []);

  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Details</title>
      </Helmet>
      <div className="row py-4">
        <div className="col-md-3">
          {params.mediaType == "person" ? (
            <img
              className="w-100"
              src={
                `https://image.tmdb.org/t/p/w500/` + itemDetails.profile_path
              }
              alt=""
            />
          ) : (
            <img
              className="w-100"
              src={`https://image.tmdb.org/t/p/w500/` + itemDetails.poster_path}
              alt=""
            />
          )}
        </div>
        <div className="col-md-9">
          <h2>
            {itemDetails.title}
            {itemDetails.name}
          </h2>
          <h4 className="text-muted">
            {itemDetails.original_title}
            {itemDetails.original_name}
          </h4>

          {/* <div className="mx-2 my-4">
            
          </div> */}

          {params.mediaType == "person" ? (
            <div>
              <p>popularity:{itemDetails.popularity} </p>
            </div>
          ) : (
            <div>
              <p>Vote:{itemDetails.vote_average} </p>
              <p>Vote count:{itemDetails.vote_count} </p>
              <p>popularity:{itemDetails.popularity} </p>
              <p>release date:{itemDetails.release_date} </p>
            </div>
          )}

          <p className="text-muted">
            {itemDetails.overview}
            {itemDetails.biography}
          </p>
        </div>
      </div>
    </>
  );
}
