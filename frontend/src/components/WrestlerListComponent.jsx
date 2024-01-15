import React, { useEffect, useState } from 'react';
import { getWrestlers } from '../api/wrestlers.api';
import WrestlerCard from './WrestlerCardComponent';

const WrestlerList = () => {
    const [wrestlers, setWrestlers] = useState([]);

    useEffect(() => {
        const fetchWrestlers = async () => {
            try {
                const wrestlersData = await getWrestlers();
                const sortedWrestlers = wrestlersData.sort((a, b) => a.name.localeCompare(b.name));
                setWrestlers(sortedWrestlers);
            } catch (error) {
                console.error('Error fetching wrestlers:', error);
            }
        };

        fetchWrestlers();
    }, []);

    return (
        <div>
            <div className="grid grid-cols-3 gap-3">
                {wrestlers.map(wrestler => (
                    <WrestlerCard key={wrestler.id} wrestler={wrestler} />
                ))}
            </div>
        </div>
    );
};

export default WrestlerList;
