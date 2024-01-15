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

    return (
        <div className="max-w-md mx-auto bg-black shadow-md p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{wrestler.name}</h2>
            <img src={wrestler.image} alt={wrestler.name} className="mb-4" />
            <p className="mb-2">Year of Birth: {wrestler.year_of_birth}</p>
            <p className="mb-2">Month of Birth: {wrestler.month_of_birth}</p>
            <p className="mb-2">Height: {wrestler.height}</p>
            <p className="mb-2">Weight: {wrestler.weight}</p>
            <p className="mb-2">Finisher: {wrestler.finisher}</p>
            <p className="mb-2">Style: {wrestler.style}</p>
        </div>
    );
};

export default WrestlerDetailComponent;
