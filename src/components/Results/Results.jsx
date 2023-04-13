import React, { useEffect, useState } from "react";
import "./results.css";
import VideoCard from "../VideoCard/VideoCard";
import axios from "../Requests/axios";
import FlipMove from "react-flip-move";

const Results = ({ selectedOption }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
    };
    fetchData();
  }, [selectedOption]);
  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => {
          return <VideoCard key={movie.id} movie={movie} />;
        })}
      </FlipMove>
    </div>
  );
};

export default Results;
