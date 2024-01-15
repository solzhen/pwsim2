import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="flex justify-between items-center bg-gray-200 p-4">
      <Link to="/wrestlers" className="text-blue-500 hover:text-blue-700">
        <h1 className="text-2xl font-bold">Wrestlers</h1>
      </Link>
      <Link to="/companies" className="text-blue-500 hover:text-blue-700">
        <h1 className="text-2xl font-bold">Companies</h1>
      </Link>
      <Link
        to="/wrestler-create"
        className="text-blue-500 hover:text-blue-700 ml-4"
      >
        Create Wrestler
      </Link>
    </div>
  );
}