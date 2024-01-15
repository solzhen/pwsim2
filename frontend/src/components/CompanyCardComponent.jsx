import React from 'react';
import { useNavigate, useParams } from 'react-router-dom'

const CompanyCard = ({ company }) => {
    
        const navigate = useNavigate();
    
        const handleClick = () => {
            navigate(`/companies/${company.id}`);
        };
    
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const status = ['Open', 'Closed', 'Bankrupt']

        return (
            <div
                className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer rounded-md mt-4"
                onClick={handleClick}
            >
                <div className="flex justify-between">
                    <div>
                        <p className="text-white font-bold uppercase rounded-lg" title={company.name}>{company.name.substring(0, 20)}</p>
                        {/* <p className="text-slate-400">Description: {company.description} </p> */}
                        <p className="text-slate-400">Founded: {months[company.month_of_founding - 1]} of {company.year_of_founding} </p>
                        <p className="text-slate-400">Money: {company.money} </p>
                        <p className="text-slate-400">Overness: {company.overness} </p>
                        <p className="text-slate-400">Momentum: {company.momentum} </p>
                        <p className="text-slate-400">Status: {status[company.status]} </p>
                    </div>
                    <div>
                        <img src={company.image} alt="Company Image" />
                    </div>
                </div>
            </div>
        );
};

export default CompanyCard;