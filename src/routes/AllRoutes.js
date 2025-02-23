import { Routes, Route } from "react-router-dom";
import { MovieDetail, MovieList, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkBg">
      <Routes>
        <Route path="/" element={<MovieList title="Home" />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/movies/popular" element={<MovieList title="Popular" />} />
        <Route path="/movies/top" element={<MovieList title="Top Rated" />} />
        <Route path="/movies/upcoming" element={<MovieList title="Upcoming" />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
