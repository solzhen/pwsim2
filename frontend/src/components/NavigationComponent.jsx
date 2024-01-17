import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="flex justify-between items-center bg-gradient-to-b from-white to-slate-300 border-b-slate-600 border-b-2 p-4 ">
      <Link to="/wrestlers" className="text-blue-500 hover:text-blue-700">
        <h1 className="text-2xl font-bold">Wrestlers</h1>
      </Link>
      <Link to="/companies" className="text-blue-500 hover:text-blue-700">
        <h1 className="text-2xl font-bold">Companies</h1>
      </Link>      
    </div>
  );
}