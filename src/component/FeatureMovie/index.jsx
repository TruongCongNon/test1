import { useEffect, useState } from "react";
import { useSlider } from "../../hooks/useSlider";
import { getMoviesPopular } from "../../services/FeatureMovieService";
import Movie from "./Movie";
import PaginationIndicator from "./PaginationIndicator";
const FeatureMovie = () => {
  console.log("Feature Movie re-render");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [idMovieActive, setIdMovieActive] = useState();
  useEffect(
    () => async () => {
      try {
        const data = await getMoviesPopular();
        let moviesPopular = data.results.slice(0, 4);
        setMovies(moviesPopular);
        setIdMovieActive(moviesPopular[0].id);
      } catch (e) {
        console.log({ e });
        return <p>Something Error, Pls try Again</p>;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );
  const currentIndex = useSlider(movies);
  useEffect(() => {
    if (movies.length > 0) {
      setIdMovieActive(movies[currentIndex]?.id); // Cập nhật idMovieActive
    }
  }, [currentIndex, movies]);
  return (
    <div className="relative">
      {isLoading ? (
        <p>Loading .... </p>
      ) : movies.length > 0 ? (
        movies
          .filter((movie) => movie.id === idMovieActive)
          .map((movie) => <Movie key={movie.id} data={movie} />)
      ) : null}
      <PaginationIndicator
        data={movies}
        idMovieActive={idMovieActive}
        setIdMovieActive={setIdMovieActive}
      />
    </div>
  );
};

export default FeatureMovie;
