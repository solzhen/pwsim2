import WrestlerList from '../components/WrestlerListComponent'
import { Link } from "react-router-dom";

export function WrestlersPage() {
  return (
    <div>
      {/* <h1 className="text-2xl font-bold text-white uppercase mt-2 ml-2">Wrestlers</h1> */}
      <div className='flex justify-normal bg-slate-300 rounded-b-md'>
        <div>
          <Link
            to="/wrestler-create"
            className="text-blue-500"
          >
            <h1 className="font-bold p-2 hover:bg-gray-700  hover:text-blue-100 rounded-b-md ">
              Create Wrestler
            </h1>

          </Link>
        </div>

      </div>

      <div>
        <WrestlerList />
      </div>
    </div>


  )
}
