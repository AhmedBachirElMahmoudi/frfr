import React, { useState } from "react";

const Hero = () => {
  const CLIENT_ID = "afd5b7c9c4134ac3a96b54e2bd5479e8";
  const REDIRECT_URI = "http://localhost:5173/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
  };

  const handleLogout = () => {
    localStorage.removeItem("acces_token");
    setIsLoggedIn(false);
  };

  return (
    <div className="p-5 mt-56 text-center">
      <h1 className="text-5xl pb-10">ABSMusic</h1>
      <p className="text-4xl pb-5">
        Discover your favorite music in 30 seconds only!
      </p>
      {isLoggedIn ? (
        <button onClick={handleLogout} className="text-3xl text-red-600">
          Logout
        </button>
      ) : (
        <a href="#" onClick={handleLogin} className="text-3xl text-green-600">
          Login to Spotify
        </a>
      )}
    </div>
  );
};

export default Hero;
