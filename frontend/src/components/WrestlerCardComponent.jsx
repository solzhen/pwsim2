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
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return (
        <div
            className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer rounded-md mt-4"
            onClick={handleClick}
        >
            <div className="flex justify-between">
                <div>
                    <p className="text-white font-bold uppercase rounded-lg">{wrestler.name}</p>
                    <p className="text-slate-400">Age: {age} (Born on {months[wrestler.month_of_birth - 1]} of {wrestler.year_of_birth})</p>
                    <p className="text-slate-400">Gender: {wrestler.gender.charAt(0).toUpperCase() + wrestler.gender.slice(1)}</p>
                    <p className="text-slate-400">Weight (Kg): {wrestler.weight}</p>
                    <p className="text-slate-400">Height (cm): {wrestler.height}</p>
                    <p className="text-slate-400">Finisher: {wrestler.finisher}</p>
                </div>
                <div>
                    <img className="w-36 h-36 rounded-lg" src={wrestler.image} alt="Wrestler Image" />
                </div>
            </div>
            {/* <p className="text-slate-400">Created At: {wrestler.created_at}</p> */}
            {/* <p className="text-slate-400">Updated At: {wrestler.updated_at}</p> */}
        </div>

    );
};

export default WrestlerCard;
