import React from "react";
import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NotFound</title>
      </Helmet>
      <div className="text-center text-bg-danger my-5 p-5 h1">NotFound</div>
    </>
  );
}
