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
            className="bg-black p-3 text-white hover:bg-white hover:text-black hover:cursor-pointer w-[480px] border-zinc-800 border-2"
            onClick={handleClick}
            style={{clipPath: 'polygon(0 10%, 10% 0, 100% 0, 100% 100%, 0% 100%)'}}
        >
            <div className="flex justify-between">
                <div>
                    <p className="font-bold uppercase rounded-lg">{wrestler.name}</p>
                    <p className="">Age: {age} ({months[wrestler.month_of_birth - 1]} of {wrestler.year_of_birth})</p>
                    <p className="">
                        Gender:{" "}
                        <span className={wrestler.gender === 'male' ?
                            'text-blue-500' :
                            wrestler.gender === 'female' ?
                                'text-pink-500' :
                                'text-violet-400'}>
                            {wrestler.gender.charAt(0).toUpperCase() + wrestler.gender.slice(1)}
                        </span>
                    </p>
                    <p className="">Weight: {wrestler.weight} Kg.({Math.round(wrestler.weight * 2.20462 * 10) / 10} Lbs.)</p>
                    <p className="">Height: {wrestler.height} cm.({Math.round(wrestler.height / 30.48)}'{Math.round((wrestler.height / 30.48 - Math.floor(wrestler.height / 30.48)) * 12)}")</p>
                    <p className="">Country: {wrestler.nationality}</p>
                </div>
                <div className='w-36 h-36'>
                    <img className=" w-full h-full object-contain rounded-r-md border-2 border-zinc-700" src={wrestler.image} alt="Wrestler Image" />
                </div>
            </div>
        </div>

    );
};

export default WrestlerCard;
