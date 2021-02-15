import React, { useEffect, useState } from "react";
import "./Results.css";
import FlipMove from "react-flip-move";

import VideoCard from "../VideoCard/VideoCard";
import axios from "../../axios";

// import requests from "../../requests";

const Results = ({ selectedOption }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // execute when results comp mounts/loads once.
    const fetchData = async () => {
      const { data } = await axios.get(selectedOption);
      console.log(data?.results);
      setMovies(data?.results);
    };

    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie?.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
};

export default Results;
