import WrestlerList from '../components/WrestlerListComponent'
import { Link } from "react-router-dom";

export function WrestlersPage() {
  return (
    <div className='bg-zinc-800'>
      
      <div>
        <WrestlerList />
      </div>
    </div>


  )
}
