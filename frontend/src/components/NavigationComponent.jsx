import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="flex items-center bg-gradient-to-b from-white to-gray-300 border-b-gray-600 border-b-2 py-1 m-0">
      <Link to="/wrestlers" className="text-gray-800 hover:text-gray-950 hover:bg-gradient-to-br hover:from-white hover:to-gray-600 p-4 mx-1 hover:rounded-md">
        <h1 className="text-2xl font-black">WRESTLERS</h1>
      </Link>
      <Link to="/companies" className="text-gray-800 hover:text-gray-950 hover:bg-gradient-to-br hover:from-white hover:to-gray-600 p-4 m-0 hover:rounded-md">
        <h1 className="text-2xl font-bold">COMPANIES</h1>
      </Link>      
    </div>
  );
}