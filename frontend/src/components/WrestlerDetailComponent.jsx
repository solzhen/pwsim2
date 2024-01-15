import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getWrestler } from '../api/wrestlers.api';

const WrestlerDetailComponent = () => {
    const { id } = useParams();
    const [wrestler, setWrestler] = useState(null);

    useEffect(() => {
        const fetchWrestler = async () => {
            const fetchedWrestler = await getWrestler(id);
            setWrestler(fetchedWrestler);
        };

        fetchWrestler();
    }, [id]);

    if (!wrestler) {
        return <div className="text-center mt-4">Loading...</div>;
    }

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const age = currentYear - wrestler.year_of_birth - (wrestler.month_of_birth > currentMonth ? 1 : 0);

    return (
        <div className=" max-w-lg mx-auto bg-black shadow-md p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{wrestler.name}</h2>
            <div>
                <div>
                    <div className="flex">
                        <div>
                            <img src={wrestler.image} alt={wrestler.name} className="mb-4" />
                        </div>
                        <div className="ml-4">
                            {/* Basic Information */}
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
                            <p className="">Age: {age} (Born on {months[wrestler.month_of_birth - 1]} of {wrestler.year_of_birth})</p>
                            <p className="">Height (cm): {wrestler.height}</p>
                            <p className="">Weight (Kg): {wrestler.weight}</p>
                            <p className="">Finisher: {wrestler.finisher}</p>
                            <p className="">Style: {wrestler.style}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <p className="text-slate-400">Created At: {wrestler.created_at}</p> */}
            {/* <p className="text-slate-400">Updated At: {wrestler.updated_at}</p> */}
            <h3 className=' text-pretty text-slate-600'>Popularity</h3>
            <p className="text-slate-400">Overness: {wrestler.overness}</p>
            <p className="text-slate-400">Momentum: {wrestler.momentum}</p>
            <h3 className=' text-pretty text-slate-600'>Wrestling Performance Statistics</h3>
            <p className="text-slate-400">Brawl: {wrestler.brawl}</p>
            <p className="text-slate-400">Technical: {wrestler.technical}</p>
            <p className="text-slate-400">Aerial: {wrestler.aerial}</p>
            <p className="text-slate-400">Psychology: {wrestler.psychology}</p>
            <p className="text-slate-400">Charisma: {wrestler.charisma}</p>
            <p className="text-slate-400">Acting: {wrestler.acting}</p>
            <p className="text-slate-400">Physique: {wrestler.physique}</p>
            <p className="text-slate-400">Stamina: {wrestler.stamina}</p>
            <p className="text-slate-400">Power: {wrestler.power}</p>
            <p className="text-slate-400">Condition: {wrestler.condition}</p>
            <h3 className=' text-pretty text-slate-600'>Non Wrestling Statistics</h3>
            <p className="text-slate-400">Referee: {wrestler.referee}</p>
            <p className="text-slate-400">Commentary: {wrestler.commentary}</p>
            <p className="text-slate-400">Road Agent: {wrestler.road_agent}</p>            
            <h3 className=' text-pretty text-slate-600'>Personality</h3>
            <p className="text-slate-400">Ambitious: {wrestler.ambitious}</p>
            <p className="text-slate-400">Sociable: {wrestler.sociable}</p>

        </div>
    );
};

export default WrestlerDetailComponent;
