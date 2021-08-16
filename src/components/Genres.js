import React, { useState, useEffect } from "react";
import { genresApi }  from "../utils/greatNovels";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Genres = () => {
  let [genres, setGenres] = useState([]);

  useEffect(() => {
    const grabGenres = async () => {
      const genres = await genresApi();

      setGenres(genres);
    };

    grabGenres();
  }, []);
  
  
  if(!genres){
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>
            <Link to={`genre/${genre.id}`}>{genre.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genres;
