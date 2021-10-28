import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useUserDispatch } from "../context/UserContext";
import axios from "axios";
import { socialLogin } from "../hooks/Users";

function GoogleAuthCallback() {
  const location = useLocation();
  const history = useHistory();
  const userDispatch = useUserDispatch();

  useEffect(() => {
    if (!location) {
      return;
    }
    const { search } = location;
    socialLogin("google", search).then(response => {
      userDispatch({
        type: "LOGIN",
        user: response.data.user,
        jwt: response.data.jwt
      });
      history.push("/");
    });
  }, [location]);

  return <div></div>;
}

export default GoogleAuthCallback;
