import { Header } from "./Header";
import { MoviesList } from "./MoviesList";

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  genre: GenreResponseProps;
  movies: MovieProps[];
}

export function Content({ genre, movies }: ContentProps) {
  return (
    <div className="container">
      <Header categoryTitle={genre.title} />
      <main>
        <MoviesList movies={movies} />
      </main>
    </div>
  );
}
