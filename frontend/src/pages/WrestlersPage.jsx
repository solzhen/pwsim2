import WrestlerList from '../components/WrestlerListComponent'
import { Link } from "react-router-dom";

export function WrestlersPage() {
  return (
    <div>
      <div className='flex justify-normal bg-gray-300 rounded-b-md'>
        <div>
          <Link
            to="/wrestler-create"
            className="text-gray-700"
          >
            <h1 className="font-bold p-2 hover:bg-gray-700  hover:text-blue-100 rounded-b-md">
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
