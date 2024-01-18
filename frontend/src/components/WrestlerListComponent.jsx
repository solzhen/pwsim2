import React, { useEffect, useState, useMemo } from 'react';
import { getWrestlers } from '../api/wrestlers.api';
import WrestlerCard from './WrestlerCardComponent';
import { Link } from "react-router-dom";

const SortTypes = {
    NONE: 0,
    ASCENDING_NAME: 1,
    DESCENDING_NAME: 2,
    ASCENDING_WEIGHT: 3,
    DESCENDING_WEIGHT: 4,
    ASCENDING_HEIGHT: 5,
    DESCENDING_HEIGHT: 6,
    ASCENDING_AGE: 7,
    DESCENDING_AGE: 8,
    // Add more sort types as needed
};

const getAge = (wrestler) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const age = currentYear - wrestler.year_of_birth - (wrestler.month_of_birth > currentMonth ? 1 : 0);
    return age;
};

const WrestlerList = () => {
    const [wrestlers, setWrestlers] = useState([]);
    const [sortBy, setSortBy] = useState(SortTypes.ASCENDING_NAME);

    const [nameFilter, setNameFilter] = useState('');
    const [weightFilter, setWeightFilter] = useState(0);
    const [heightFilter, setHeightFilter] = useState(0);


    useEffect(() => {
        const fetchWrestlers = async () => {
            try {
                const wrestlersData = await getWrestlers();
                if (sortBy == SortTypes.ASCENDING_NAME) {
                    wrestlersData.sort((a, b) => a.name.localeCompare(b.name));
                }
                setWrestlers(wrestlersData);
            } catch (error) {
                console.error('Error fetching wrestlers:', error);
            }
        };

        fetchWrestlers();
    }, []);

    const sortedAndFilteredWrestlers = useMemo(() => {
        let wrestlersData = [...wrestlers];

        switch (sortBy) {
            case SortTypes.ASCENDING_NAME:
                wrestlersData.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case SortTypes.DESCENDING_NAME:
                wrestlersData.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case SortTypes.ASCENDING_WEIGHT:
                wrestlersData.sort((a, b) => a.weight - b.weight);
                break;
            case SortTypes.DESCENDING_WEIGHT:
                wrestlersData.sort((a, b) => b.weight - a.weight);
                break;
            case SortTypes.ASCENDING_AGE:
                wrestlersData.sort((a, b) => getAge(a) - getAge(b));
                break;
            case SortTypes.DESCENDING_AGE:
                wrestlersData.sort((a, b) => getAge(b) - getAge(a));
                break;
            case SortTypes.ASCENDING_HEIGHT:
                wrestlersData.sort((a, b) => a.height - b.height);
                break;
            case SortTypes.DESCENDING_HEIGHT:
                wrestlersData.sort((a, b) => b.height - a.height);
                break;
            default:
                break;
        }

        if (nameFilter.length > 0) {
            wrestlersData = wrestlersData.filter(wrestler => wrestler.name.toLowerCase().includes(nameFilter.toLowerCase()));
        }
        if (weightFilter > 0) {
            wrestlersData = wrestlersData.filter(wrestler => wrestler.weight >= weightFilter);
        }
        if (heightFilter > 0) {
            wrestlersData = wrestlersData.filter(wrestler => wrestler.height >= heightFilter);
        }

        return wrestlersData;
    }, [wrestlers, sortBy, weightFilter, heightFilter, nameFilter]);

    const sortButtonGenerator = (sortTypeAscend, sortTypeDescend, text) => (
        <button
            className="w-48 border-2 px-1 border-white hover:bg-zinc-700"
            onClick={() => setSortBy(
                prev => (
                    prev == sortTypeAscend ?
                        sortTypeDescend :
                        sortTypeAscend)
            )}
        >
            <span>{text}</span>
            <span className='font-black px-1'>
                {sortBy == sortTypeAscend ?
                    '▲' :
                    sortBy == sortTypeDescend ?
                        '▼' :
                        ''}
            </span>
        </button>
    );

    const filterInputGenerator = (filter, setFilter, text) => (
        <div className="w-72 border-l-2 border-b-2 border-zinc-400 flex flex-row justify-start">
            <label className="text-zinc-400 h-5 px-2 leading-8">{text}</label>
            <input
                className='bg-black text-white border-2 border-zinc-400 w-full'
                type="text"
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
            />
        </div>
    );

    return (
        <div>
            <div className='grid-cols-1'>
                <div className='my-1 flex justify-between'>
                    <div className=''>
                        {sortButtonGenerator(SortTypes.ASCENDING_NAME, SortTypes.DESCENDING_NAME, 'Sort by name')}
                        {sortButtonGenerator(SortTypes.ASCENDING_WEIGHT, SortTypes.DESCENDING_WEIGHT, 'Sort by weight')}
                        {sortButtonGenerator(SortTypes.ASCENDING_HEIGHT, SortTypes.DESCENDING_HEIGHT, 'Sort by height')}
                        {sortButtonGenerator(SortTypes.ASCENDING_AGE, SortTypes.DESCENDING_AGE, 'Sort by age')}
                    </div>
                    <div className='flex justify-normal'>
                        <div>
                            <Link
                                to="/wrestler-create"
                                className="text-black"
                            >
                                <h1 className="py-0 w-[136px] font-bold p-2 hover:bg-white bg-black hover:text-black text-zinc-100 border-2 hover:border-black border-white">
                                    NEW WRESTLER
                                </h1>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-between">
                    <div className='flex flex-row flex-wrap gap-1'>
                        <p className="text-zinc-400 h-5 px-2 leading-8">Filters:</p>
                        {filterInputGenerator(nameFilter, setNameFilter, 'Name')}
                        {filterInputGenerator(weightFilter, setWeightFilter, 'Weight(Kg)')}
                        {filterInputGenerator(heightFilter, setHeightFilter, 'Height(cm)')}
                        {/* clear filters button */}

                    </div>
                    <button
                        className="w-36 border-2 border-white hover:bg-zinc-700"
                        onClick={() => {
                            setNameFilter('');
                            setWeightFilter(0);
                            setHeightFilter(0);
                        }}
                    >
                        Clear Filters
                    </button>
                </div>


            </div>
            <div className="flex flex-wrap">
                {sortedAndFilteredWrestlers.map(wrestler => (
                    <WrestlerCard key={wrestler.id} wrestler={wrestler} />
                ))}
            </div>
        </div>
    );
};

export default WrestlerList;
