import React, { FC, useEffect, useState } from "react";
import RootView from "./root";
import { SearchProps, movieService } from "../services/movie-service";

const HomeView: FC = () => {
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

  return <RootView></RootView>;
};

export default HomeView;
