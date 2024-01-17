import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getWrestler } from '../api/wrestlers.api';

const WrestlerDetailComponent = () => {


    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/wrestlers/${wrestler.id}/edit`);
    };


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

    // this function takes a number between 0 and 100 and returns a string of stars where the number of stars is the number divided by 20
    // e.g. 100/20 = 5 stars, 50/20 = 2.5 stars, 0/20 = 0 stars
    const starRating = (number) => {
        const stars = Math.round(number / 20);
        return '️️️★'.repeat(stars);
    }


    return (
        <div className="w-full mx-auto bg-black shadow-md p-4 rounded-lg">
            <h2 className="text-2xl font-bold mx-4 px-2 border-b-2 border-zinc-100">{wrestler.name}</h2>
            <div>
                <div className="flex">
                    <div className='w-72 h-72 mx-4 p-1 border-l-2'>
                        <img src={wrestler.image} alt={wrestler.name} className="border-2 border-zinc-500" />
                    </div>
                    <div className="w-96">
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
                        <p className=''>Nationality: {wrestler.nationality}</p>
                        <p className="">Height (cm): {wrestler.height}</p>
                        <p className="">Weight (Kg): {wrestler.weight}</p>
                        <p className="">Finisher: {wrestler.finisher}</p>
                        <p className="">Style: {wrestler.style}</p>
                        <button className="bg-black hover:bg-zinc-700 text-white font-bold px-4 py-1 mt-2 border-zinc-500 border-2" onClick={handleClick}>Edit</button>
                    </div>
                </div>

            </div>
            {/* <p className="text-slate-400">Created At: {wrestler.created_at}</p> */}
            {/* <p className="text-slate-400">Updated At: {wrestler.updated_at}</p> */}
            <div className='mx-4 flex'>
                <div className='w-80 border-l-2 pl-2 border-t-2'>
                    <h3 className=' text-pretty text-slate-500'>Popularity</h3>
                    <div className='border-l-2 '>
                        <span className='border-b-2' >&nbsp;</span><span className="text-slate-400 pl-2">Overness: {wrestler.overness}</span>&nbsp;{starRating(wrestler.overness)}<br></br>
                        <span className='border-b-2' >&nbsp;</span><span className="text-slate-400 pl-2">Momentum: {wrestler.momentum}</span>&nbsp;{starRating(wrestler.momentum)}
                    </div>
                    <h3 className=' text-pretty text-slate-500'>Performance Statistics</h3>
                    <div className='border-l-2 '>
                        <span className='border-b-2' >&nbsp;</span><span className="text-slate-400 pl-2">Technical: {wrestler.technical}</span>&nbsp;{starRating(wrestler.technical)}<br></br>
                        <span className='border-b-2' >&nbsp;</span><span className="text-slate-400 pl-2">Aerial: {wrestler.aerial}</span>&nbsp;{starRating(wrestler.aerial)}<br></br>
                        <span className='border-b-2' >&nbsp;</span><span className="text-slate-400 pl-2">Psychology: {wrestler.psychology}</span>&nbsp;{starRating(wrestler.psychology)}<br></br>
                        <span className='border-b-2' >&nbsp;</span><span className="text-slate-400 pl-2">Charisma: {wrestler.charisma}</span>&nbsp;{starRating(wrestler.charisma)}<br></br>
                        <span className='border-b-2' >&nbsp;</span><span className="text-slate-400 pl-2">Acting: {wrestler.acting}</span>&nbsp;{starRating(wrestler.acting)}<br></br>
                        <span className='border-b-2' >&nbsp;</span><span className="text-slate-400 pl-2">Stamina: {wrestler.stamina}</span>&nbsp;{starRating(wrestler.stamina)}<br></br>
                        <span className='border-b-2' >&nbsp;</span><span className="text-slate-400 pl-2">Power: {wrestler.power}</span>&nbsp;{starRating(wrestler.power)}<br></br>
                        <span className='border-b-2' >&nbsp;</span><span className="text-slate-400 pl-2">Condition: {wrestler.condition}</span>&nbsp;{starRating(wrestler.condition)}<br></br>
                    </div>
                </div>
                <div className='w-80 border-l-2 pl-2 border-t-2'>
                    <h3 className=' text-pretty text-slate-500'>Non Wrestling Statistics</h3>
                    <div className='border-l-2 '>
                        <span className='border-b-2' >&nbsp;</span><span className="text-slate-400 pl-2">Referee: {wrestler.referee}</span>&nbsp;{starRating(wrestler.referee)}<br></br>
                        <span className='border-b-2' >&nbsp;</span><span className="text-slate-400 pl-2">Commentary: {wrestler.commentary}</span>&nbsp;{starRating(wrestler.commentary)}<br></br>
                        <span className='border-b-2' >&nbsp;</span><span className="text-slate-400 pl-2">Road Agent: {wrestler.road_agent}</span>&nbsp;{starRating(wrestler.road_agent)}<br></br>
                    </div>
                    <h3 className=' text-pretty text-slate-500'>Appearance</h3>
                    <div className='border-l-2 '>
                        <span className='border-b-2' >&nbsp;</span><span className="text-slate-400 pl-2">Sex Appeal:{wrestler.sex_appeal}</span>&nbsp;{starRating(wrestler.sex_appeal)}<br></br>
                        <span className='border-b-2' >&nbsp;</span><span className="text-slate-400 pl-2">Intimidating: {wrestler.intimidating}</span>&nbsp;{starRating(wrestler.intimidating)}<br></br>
                        <span className='border-b-2' >&nbsp;</span><span className="text-slate-400 pl-2">Star Quality: {wrestler.star_quality}</span>&nbsp;{starRating(wrestler.star_quality)}<br></br>
                    </div>
                    <h3 className=' text-pretty text-slate-500'>Personality</h3>
                    <div className='border-l-2 '>
                        <span className='border-b-2' >&nbsp;</span><span className="text-slate-400 pl-2">Ambitious: {wrestler.ambitious}</span>&nbsp;{starRating(wrestler.star_quality)}<br></br>
                        <span className='border-b-2' >&nbsp;</span><span className="text-slate-400 pl-2">Sociable: {wrestler.sociable}</span>&nbsp;{starRating(wrestler.star_quality)}<br></br>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WrestlerDetailComponent;
