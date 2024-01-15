import CompanyList from "../components/CompanyListComponent";

export function CompaniesPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-white uppercase mt-2 ml-2">Companies</h1>
            <div>                
                <CompanyList />
            </div>
        </div>
    );
}