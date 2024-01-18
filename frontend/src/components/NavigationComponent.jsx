import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="flex items-center bg-white">
      <Link to="/wrestlers">
        <h1 className="text-black text-2xl font-black border-black border-2 p-1 hover:bg-black hover:text-white">WRESTLERS</h1>
      </Link>
      <Link to="/companies">
        <h1 className="text-black text-2xl font-black border-black border-y-2 border-r-2 p-1 hover:bg-black hover:text-white">COMPANIES</h1>
      </Link>
    </div>
  );
}