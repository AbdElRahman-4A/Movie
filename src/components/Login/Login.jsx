import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import joi from "joi";
import { Helmet } from "react-helmet";

export default function Login({ saveUserData }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [errorsList, setErrorsList] = useState([]);
  let navigate = useNavigate();

  let validateFormData = () => {
    const schema = joi.object({
      email: joi
        .string()
        .required()
        .email({ tlds: { allow: ["com", "net"] } }),
      password: joi
        .string()
        .required()
        .pattern(new RegExp(/^[a-z][0-9]{3}$/)),
    });

    return schema.validate(user, { abortEarly: false });
  };

  let getInputValue = (e) => {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    // console.log(myUser);
  };

  let submitFormData = async (e) => {
    e.preventDefault();
    let validationResponse = validateFormData();
    if (validationResponse.error) {
      setErrorsList(validationResponse.error.details);
    } else {
      let { data } = await axios.post(
        "https://sticky-note-fe.vercel.app/signin",
        user
      );
      if (data.message == "success") {
        localStorage.setItem("token", data.token);
        saveUserData();
        navigate("/");
        // goToHome();
      } else {
        setErrorMsg(data.message);
      }
    }
  };

  let goToHome = () => {
    navigate("/");
  };

  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
      </Helmet>
      <div className=" w-75 m-auto py-5">
        <h2>Login Form</h2>
        {errorsList.map((error, index) => (
          <div key={index} className="alert alert-danger p-2">
            {error.message}
          </div>
        ))}

        {errorMsg ? (
          <div className="alert alert-danger p-2">{errorMsg}</div>
        ) : (
          ""
        )}

        <form onSubmit={submitFormData}>
          <div className="input-data my-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control my-2"
              onChange={getInputValue}
            />
          </div>
          <div className="input-data my-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control my-2"
              onChange={getInputValue}
            />
          </div>

          <button className="btn btn-info my-3 float-end">Login</button>
          <div className="clear-fix"></div>
        </form>
      </div>
    </>
  );
}
