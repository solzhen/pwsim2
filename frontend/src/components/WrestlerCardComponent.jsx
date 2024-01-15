import React from 'react';
import { useNavigate, useParams } from 'react-router-dom'

const WrestlerCard = ({ wrestler }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/wrestlers/${wrestler.id}`);
    };

    // Calculate age from year_of_birth and month_of_birth
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const age = currentYear - wrestler.year_of_birth - (wrestler.month_of_birth > currentMonth ? 1 : 0);

    return (
        <div
            className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
            onClick={handleClick}
        >
            <p className="text-white font-bold uppercase rounded-lg">{wrestler.name}</p>
            <p className="text-slate-400">Age: {age}</p>
            <p className="text-slate-400">Weight: {wrestler.weight}</p>
            <p className="text-slate-400">Height: {wrestler.height}</p>
        </div>
    );
};

export default WrestlerCard;
