import WrestlerList from '../components/WrestlerListComponent'
import { Link } from "react-router-dom";

export function WrestlersPage() {
  return (
    <div className='bg-zinc-800'>
      <div className='border-4 border-black flex justify-normal bg-black'>
        <div>
          <Link
            to="/wrestler-create"
            className="text-black"
          >
            <h1 className="py-0 font-bold p-2 bg-white hover:bg-black  hover:text-zinc-100 border-2 border-black hover:border-white">
              NEW WRESTLER
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
