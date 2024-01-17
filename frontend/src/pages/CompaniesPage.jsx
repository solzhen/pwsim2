import CompanyList from "../components/CompanyListComponent";
import { Link } from "react-router-dom";

export function CompaniesPage() {
    return (
        <div>
            <div className='flex justify-normal bg-slate-300 rounded-b-md'>
                <div>
                    <Link
                        to="/company-create"
                        className="text-gray-700"
                    >
                        <h1 className="font-bold p-2 hover:bg-gray-700  hover:text-blue-100 rounded-b-md">
                            Create Company
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