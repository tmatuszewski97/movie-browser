import React, { FC, useEffect, useState } from "react";
import RootPage from "./root";
import { SearchProps, movieService } from "../services/movie-service";

const MoviesPage: FC = () => {
  const [movies, setMovies] = useState<SearchProps | null>(null);
  const [movieToSearch, setMovieToSearch] = useState<string>(
    `the lord of the rings`
  );

  useEffect(() => {
    movieService.searchByName(movieToSearch).then((resp) => {
      if (resp) {
        setMovies(resp);
      }
    });
  }, []);

  return (
    <RootPage>
      <h1 style={{ color: "white", fontSize: "30px" }}>{`Movies page`}</h1>
    </RootPage>
  );
};

export default MoviesPage;
