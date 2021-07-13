import http from "./utils";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const API = {
  SEARCH_BY_NAME: (name: string) => `${API_URL}&s=${name}`,
};

// Single movie from search response
interface MovieSearchResponse {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

// Repeatable elements from search response
interface BasicSearchResponse {
  Response: string;
  Error?: string;
}

// Whole search response
interface SearchResponse extends BasicSearchResponse {
  Search: MovieSearchResponse[];
  totalResults: string;
}

// Single movie props from search
interface MovieSearchProps {
  poster: string;
  title: string;
  type: string;
  year: string;
  id: string;
}

interface SearchProps {
  movies: MovieSearchProps[];
  totalResults: number;
}

const movieService = {
  searchByName: async (name: string) => {
    try {
      const searchResult: SearchResponse = await http.get(
        API.SEARCH_BY_NAME(name)
      );
      if (searchResult?.Error) {
        console.log(searchResult.Error);
        return null;
      } else {
        const result: SearchProps = {
          movies: searchResult.Search.map((movie) => ({
            poster: movie.Poster,
            title: movie.Title,
            type: movie.Type,
            year: movie.Year,
            id: movie.imdbID,
          })),
          totalResults: parseInt(searchResult.totalResults, 10),
        };
        return result;
      }
    } catch (e) {
      console.log(e);
    }
  },
};

export type { SearchProps };
export { movieService };
