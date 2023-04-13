import React from "react";
import "./navigation.css";
import requests from "../Requests/requests";

const Navigation = ({ setSelectedOption }) => {
  const navItems = [
    {
      genre: "Trending",
      link: requests.fetchTrending,
    },
    {
      genre: "Top Rated",
      link: requests.fetchTopRated,
    },
    {
      genre: "Action",
      link: requests.fetchActionMovies,
    },
    {
      genre: "Comedy",
      link: requests.fetchComedyMovies,
    },
    {
      genre: "Horror",
      link: requests.fetchHorrorMovies,
    },
    {
      genre: "Romance",
      link: requests.fetchRomanceMovies,
    },
    {
      genre: "Mystery",
      link: requests.fetchMystery,
    },
    {
      genre: "Sci-Fi",
      link: requests.fetchSciFi,
    },
    {
      genre: "Western",
      link: requests.fetchWestern,
    },
    {
      genre: "Animation",
      link: requests.fetchAnimation,
    },
    {
      genre: "TV Movie",
      link: requests.fetchTV,
    },
  ];

  return (
    <div className="navigation">
      {navItems.map((item, id) => {
        return (
          <h2 onClick={() => setSelectedOption(item.link)} key={id}>
            {item.genre}
          </h2>
        );
      })}
    </div>
  );
};

export default Navigation;
