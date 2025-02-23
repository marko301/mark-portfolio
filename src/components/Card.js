import { Link } from "react-router-dom";

export const Card = ({ movie }) => {
  const { id, name, description, image } = movie;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
      <Link to=""> {/* {`/movies/${id}`} */}
        {image ? (
          <img className="rounded-t-lg" src={image} alt={name} />
        ) : (
          <div className="h-48 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-700">No Image</span>
          </div>
        )}
      </Link>
      <div className="p-5">
        <Link to={`/movies/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description.slice(0, 500)}...</p>
      </div>
    </div>
  );
};
