import WrestlerList from '../components/WrestlerListComponent'

export function WrestlersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white uppercase mt-2 ml-2">Wrestlers</h1>
      <div>
        <WrestlerList />
      </div>
    </div>


  )
}
