import CompanyList from "../components/CompanyListComponent";
import { Link } from "react-router-dom";

export function CompaniesPage() {
    return (
        <div>
            <div className='border-4 border-black flex justify-normal bg-black'>
                <div>
                    <Link
                        to="/company-create"
                        className="text-black"
                    >
                        <h1 className="py-0 font-bold p-2 bg-white hover:bg-black  hover:text-zinc-100 border-2 border-black hover:border-white">
                            NEW COMPANY
                        </h1>
                    </Link>
                </div>
            </div>
            <div>
                <CompanyList />
            </div>
        </div>
    );
}