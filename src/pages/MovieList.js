import { Card } from "../components";
import { useTitle } from "../hooks/useTitle";
import moviesData from "../assets/data.json";

export const MovieList = ({ title }) => {
  useTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {moviesData.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
