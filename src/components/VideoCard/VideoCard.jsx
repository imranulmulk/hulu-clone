import React, { forwardRef } from "react";
import "./videoCard.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import TextTruncate from "react-text-truncate";

const base_url = "https://image.tmdb.org/t/p/original";
const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="movie-poster"
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="…"
        text={movie.overview}
      />
      <h2>{movie.title || movie.original_name}</h2>
      <div className="videoCard__stats">
        {/* "&nbsp;" is for the space*/}
        <p>
          {movie.media_type && `${movie.media_type} •`}
          {movie.release_date || movie.first_air_date} • &nbsp;
        </p>
        <ThumbUpIcon /> &nbsp;
        <p>{movie.vote_count}</p>
      </div>
    </div>
  );
});

export default VideoCard;
