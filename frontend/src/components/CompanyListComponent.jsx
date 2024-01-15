import React, { useEffect, useState } from 'react';
import { getCompanies } from '../api/wrestlers.api';
import CompanyCard from './CompanyCardComponent';

const CompanyList = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const companiesData = await getCompanies();
                const sortedCompanies = companiesData.sort((a, b) => a.name.localeCompare(b.name));
                setCompanies(sortedCompanies);
            } catch (error) {
                console.error('Error fetching companies:', error);
            }
        };
        fetchCompanies();
    }, []);

    return (
        <div>
            <div className="grid grid-cols-3 gap-3 m-2">
                {companies.map(company => (
                    <CompanyCard key={company.id} company={company} />
                ))}
            </div>
        </div>
    );
};

export default CompanyList;