import React, { useEffect, useState } from 'react';
import { createWrestler } from '../api/wrestlers.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-hot-toast";
import axios from 'axios';
import { getNationalities, getStyles, getMoves } from '../api/wrestlers.api';
import { getWrestler, updateWrestler } from '../api/wrestlers.api';
import Select, { components } from 'react-select';
import { Tooltip } from 'react-tooltip';


const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "black",
        color: "white",
        borderColor: 'white',
        padding: '0.5rem',
        borderRadius: '0.0rem',
    }),
    option: (provided, state) => ({
        color: state.isSelected ? 'white' : '#9CA3AF',
        cursor: 'pointer',
        backgroundColor: state.isFocused ? state.isSelected ? 'Brown' : 'DarkRed' : state.isSelected ? 'ForestGreen' : 'black',
    }),
    singleValue: (provided) => ({
        ...provided,
        color: 'white', // This sets the text color of the selected value
        // Add more styles...
    }),
};

function formatFileName(name) {
    if (name.length > 18) {
      return '...' + name.slice(-15);
    } else {
      return name;
    }
  }

const WrestlerFormComponent = () => {

    const { id } = useParams();

    const months = [[1, 'January'], [2, 'February'], [3, 'March'], [4, 'April'], [5, 'May'], [6, 'June'], [7, 'July'], [8, 'August'], [9, 'September'], [10, 'October'], [11, 'November'], [12, 'December'],]
    const [isFocused, setIsFocused] = useState(false);
    const [moves, setMoves] = useState([]);
    //Wrestler info
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [yearOfBirth, setYearOfBirth] = useState('');
    const [monthOfBirth, setMonthOfBirth] = useState('1');
    const [nationality, setNationality] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [finisher, setFinisher] = useState('');
    const [image, setImage] = useState(null);
    const [style, setStyle] = useState('Brawler');
    //Performance stats
    const [brawl, setBrawl] = useState(50);
    const [technical, setTechnical] = useState(50);
    const [aerial, setAerial] = useState(50);
    const [psychology, setPsychology] = useState(50);
    const [charisma, setCharisma] = useState(50);
    const [acting, setActing] = useState(50);
    const [sex_appeal, setSexAppeal] = useState(50);
    const [intimidating, setIntimidating] = useState(50);
    const [star_quality, setStarQuality] = useState(50);
    const [stamina, setStamina] = useState(50);
    const [power, setPower] = useState(50);
    const [referee, setReferee] = useState(50);
    const [commentary, setCommentary] = useState(50);
    const [roadAgent, setRoadAgent] = useState(50);
    const [sociable, setSociable] = useState(50);
    const [ambitious, setAmbitious] = useState(50);
    const [condition, setCondition] = useState(50);
    const [overness, setOverness] = useState(50);
    const [momentum, setMomentum] = useState(50);

    const navigate = useNavigate();

    // Set the form values if we are editing a wrestler
    useEffect(() => {
        if (id) {
            const fetchWrestler = async () => {
                try {
                    const wrestlerData = await getWrestler(id);
                    console.log(wrestlerData);

                    setName(wrestlerData.name);
                    setGender(wrestlerData.gender);
                    setNationality(wrestlerData.nationality);
                    setYearOfBirth(wrestlerData.year_of_birth);
                    setMonthOfBirth(wrestlerData.month_of_birth);
                    setHeight(wrestlerData.height);
                    setWeight(wrestlerData.weight);
                    setFinisher(wrestlerData.finisher);
                    setStyle(wrestlerData.style);

                    setBrawl(wrestlerData.brawl);
                    setTechnical(wrestlerData.technical);
                    setAerial(wrestlerData.aerial);
                    setPsychology(wrestlerData.psychology);
                    setCharisma(wrestlerData.charisma);
                    setActing(wrestlerData.acting);
                    setStamina(wrestlerData.stamina);
                    setPower(wrestlerData.power);

                    setSexAppeal(wrestlerData.sex_appeal);
                    setIntimidating(wrestlerData.intimidating);
                    setStarQuality(wrestlerData.star_quality);

                    setReferee(wrestlerData.referee);
                    setCommentary(wrestlerData.commentary);
                    setRoadAgent(wrestlerData.road_agent);

                    setSociable(wrestlerData.sociable);
                    setAmbitious(wrestlerData.ambitious);

                    setCondition(wrestlerData.condition);
                    setOverness(wrestlerData.overness);
                    setMomentum(wrestlerData.momentum);
                } catch (error) {
                    console.error('Error fetching wrestler:', error);
                }
            };
            fetchWrestler();
        }
    }, [id]);



    const [styles, setStyles] = useState(null);
    useEffect(() => {
        const fetchStyles = async () => {
            try {
                const styleData = await getStyles();
                setStyles(styleData.styles);
            } catch (error) {
                console.error('Error fetching styles:', error);
            }
        };
        fetchStyles();
    }, []);


    const filteredOptions = moves.filter(option => option[1].toLowerCase().includes(finisher.toLowerCase()));


    useEffect(() => {
        const fetchMoves = async () => {
            try {
                const moveData = await getMoves();
                setMoves(moveData.moves);
            } catch (error) {
                console.error('Error fetching moves:', error);
            }
        };
        fetchMoves();
    }, []);

    const [nationalities, setNationalities] = useState(null);
    useEffect(() => {
        const fetchNationalities = async () => {
            try {
                const nationalityData = await getNationalities();
                setNationalities(nationalityData.nationalities);
            } catch (error) {
                console.error('Error fetching nationalities:', error);
            }
        };
        fetchNationalities();
    }, []);


    const fillRandomValues = () => {
        axios.get('https://randomuser.me/api/')
            .then(response => {
                //console.log(response.data.results[0])
                //const results = response.data.results[0];
                const { name, gender, location, dob } = response.data.results[0];
                const fullName = `${name.first} ${name.last}`;
                setName(fullName);
                setGender(gender);
                setNationality(location.country);
                setYearOfBirth(dob.date.slice(0, 4));
                setMonthOfBirth(parseInt(dob.date.slice(5, 7), 10));
                // females should in general be shorter than male
                setHeight(
                    gender == 'male' ?
                        Math.floor(Math.random() * (50)) + 150 :
                        Math.floor(Math.random() * (45)) + 145
                );
                // set weight in Kg. to a reasonable human range, i the future, use Height as part of the equation
                setWeight(
                    gender == 'male' ?
                        Math.floor(Math.random() * (100)) + 60 :
                        Math.floor(Math.random() * (70)) + 40
                );
                setStyle(styles[Math.floor(Math.random() * styles.length)][0]);
                setFinisher(moves[Math.floor(Math.random() * moves.length)][1]);
                // Randomize performance stats
                setBrawl(Math.floor(Math.random() * (100)));
                setTechnical(Math.floor(Math.random() * (100)));
                setAerial(Math.floor(Math.random() * (100)));
                setPsychology(Math.floor(Math.random() * (100)));
                setCharisma(Math.floor(Math.random() * (100)));
                setActing(Math.floor(Math.random() * (100)));
                setSexAppeal(Math.floor(Math.random() * (100)));
                setIntimidating(Math.floor(Math.random() * (100)));
                setStarQuality(Math.floor(Math.random() * (100)));
                setStamina(Math.floor(Math.random() * (100)));
                setPower(Math.floor(Math.random() * (100)));
                setReferee(Math.floor(Math.random() * (100)));
                setCommentary(Math.floor(Math.random() * (100)));
                setRoadAgent(Math.floor(Math.random() * (100)));
                setSociable(Math.floor(Math.random() * (100)));
                setAmbitious(Math.floor(Math.random() * (100)));
                setCondition(Math.floor(Math.random() * (100)));
                setOverness(Math.floor(Math.random() * (100)));
                setMomentum(Math.floor(Math.random() * (100)));
            });
    };



    // Handle form submission: create a wrestler using ../api/wrestlers.api.js
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('gender', gender);
        formData.append('year_of_birth', yearOfBirth);
        formData.append('month_of_birth', monthOfBirth);
        formData.append('nationality', nationality);
        formData.append('height', height);
        formData.append('weight', weight);
        formData.append('finisher', finisher);
        //image should only be added if we are creating new wrestler
        if (!id) formData.append('image', image);
        formData.append('style', style);
        formData.append('brawl', brawl);
        formData.append('technical', technical);
        formData.append('aerial', aerial);
        formData.append('psychology', psychology);
        formData.append('charisma', charisma);
        formData.append('acting', acting);
        formData.append('sex_appeal', sex_appeal);
        formData.append('intimidating', intimidating);
        formData.append('star_quality', star_quality);
        formData.append('stamina', stamina);
        formData.append('power', power);
        formData.append('referee', referee);
        formData.append('commentary', commentary);
        formData.append('road_agent', roadAgent);
        formData.append('sociable', sociable);
        formData.append('ambitious', ambitious);
        formData.append('condition', condition);
        formData.append('overness', overness);
        formData.append('momentum', momentum);

        // If we are editing a wrestler, we need to use the updateWrestler function
        // otherwise, we use the createWrestler function. After, navigate to "/wrestlers"
        if (id) {
            updateWrestler(id, formData)
                .then((response) => {
                    console.log('Wrestler updated:', response);
                    navigate("/wrestlers");
                })
                .catch((error) => {
                    console.error('Error updating wrestler:', error);
                });
            return;
        }
        createWrestler(formData)
            .then((response) => {
                console.log('Wrestler created:', response);
                navigate("/wrestlers");
            })
            .catch((error) => {
                console.error('Error creating wrestler:', error);
            });
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex gap-3 p-6 flex-wrap">
                    <div className='w-96 col-span-2'>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-200">
                            Name
                        </label>
                        <div className="mt-1">
                            <input
                                className="bg-black text-white shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm p-4 border-[1px] border-white"
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className='w-96 col-span-2'>
                        <label htmlFor='gender' className="block text-sm font-medium text-slate-200">
                            Gender
                        </label>
                        <div className="mt-1">
                            <Select
                                styles={customStyles}
                                id='gender'
                                name='gender'
                                value={{ value: gender, label: gender.toUpperCase()[0] + gender.slice(1) }}
                                onChange={(selectedOption) => setGender(selectedOption.value)}
                                options={[
                                    { value: 'male', label: 'Male' },
                                    { value: 'female', label: 'Female' },
                                    { value: 'other', label: 'Other' }
                                ]}
                            />
                        </div>
                    </div>
                    <div className='w-96'>
                        <label htmlFor='nationality' className="block text-sm font-medium text-slate-200">
                            Nationality
                        </label>
                        <div className="mt-1" data-tooltip-id='nationailty-tooltip' data-tooltip-content={nationality}>
                            <Select
                                styles={customStyles}
                                id='nationality'
                                name='nationality'
                                //value={nationality}
                                value={{ value: nationality, label: nationality }}
                                onChange={(selectedOption) => setNationality(selectedOption.value)}
                                options={nationalities && nationalities.map((nation) => ({
                                    value: nation[0],
                                    label: nation[1]
                                }))}
                            />
                            <Tooltip id="nationailty-tooltip" />
                        </div>
                    </div>
                    <div className='w-96'>
                        <label htmlFor="year_of_birth" className="block text-sm font-medium text-slate-200">
                            Year of Birth
                        </label>
                        <div className="mt-1">
                            <input
                                className="bg-black text-white shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm p-4 border-[1px] border-white"
                                type="number"
                                name="year_of_birth"
                                id="year_of_birth"
                                value={yearOfBirth}
                                onChange={(event) => setYearOfBirth(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className='w-96'>
                        <label htmlFor="month_of_birth" className="block text-sm font-medium text-slate-200">
                            Month of Birth
                        </label>
                        <div className="mt-1">
                            <Select
                                styles={customStyles}
                                id="month_of_birth"
                                name="month_of_birth"
                                value={{ value: monthOfBirth, label: months[monthOfBirth - 1][1] }}
                                onChange={(selectedOption) => setMonthOfBirth(selectedOption.value)}
                                options={months.map((month) => ({
                                    value: month[0],
                                    label: month[1]
                                }))}
                            />
                        </div>
                    </div>
                    <div className='w-96'>
                        <div className="flex w-full justify-between">
                            <label htmlFor="height" className="block text-sm font-medium text-slate-200">
                                Height (cm)
                            </label>
                            <label htmlFor="height" className="block text-sm font-medium text-slate-200">
                                Height (ft)
                            </label>
                        </div>
                        <div className="mt-1 flex w-full">
                            <input
                                className="bg-black text-white shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm p-4 border-[1px] border-white"
                                type="number"
                                name="height"
                                id="height"
                                value={height}
                                onChange={(event) => setHeight(event.target.value)}
                            />
                            <input
                                className="bg-black text-white shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm p-4 border-[1px] border-white"
                                type="number"
                                name="height_feet"
                                id="height_feet"
                                value={Math.round(height / 30.48 * 1000) / 1000}
                                onChange={(event) => setHeight(event.target.value * 30.48)}
                            />
                        </div>
                    </div>
                    <div className='w-96'>
                        <div className="flex w-full justify-between">
                            <label htmlFor="weight" className="block text-sm font-medium text-slate-200">
                                Weight (Kg)
                            </label>
                            <label htmlFor="weight" className="block text-sm font-medium text-slate-200">
                                Weight (Lbs)
                            </label>
                        </div>

                        <div className="mt-1 flex w-full">
                            <input
                                className="bg-black text-white shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm p-4 border-[1px] border-white"
                                type="number"
                                name="weight"
                                id="weight"
                                value={weight}
                                onChange={(event) => setWeight(event.target.value)}
                            />
                            <input
                                className='bg-black text-white shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm p-4 border-[1px] border-white'
                                type="number"
                                name="weight_lbs"
                                id="weight_lbs"
                                value={Math.round(weight * 2.20462 * 1000) / 1000}
                                onChange={(event) => setWeight(event.target.value / 2.20462)}
                            />
                        </div>
                    </div>

                    <div className='w-96'>
                        <label htmlFor="finisher" className="block text-sm font-medium text-slate-200">
                            Finisher
                        </label>
                        <div className="mt-1" data-tooltip-id="finisher-tooltip" data-tooltip-content={finisher}>
                            {/* <Select
                                styles={customStyles}
                                id="finisher"
                                name="finisher"
                                value={{ value: moves.find(option => option.value === finisher), label: finisher }}
                                onChange={(option) => setFinisher(option.value)}
                                options={moves && moves.map(move => ({ value: move[1], label: move[1] }))} /
                            > */}
                            <Select
                                styles={customStyles}
                                id="finisher"
                                name="finisher"
                                value={{ value: moves.find(option => option.value === finisher), label: finisher }}
                                onChange={(option) => setFinisher(option.value)}
                                options={moves && moves.map(move => ({ value: move[1], label: move[1] }))}
                            />
                            <Tooltip id="finisher-tooltip" />
                        </div>

                    </div>

                    <div className='w-96'>
                        <label htmlFor="style" className="block text-sm font-medium text-slate-200">
                            Style
                        </label>
                        <div className="mt-1" data-tooltip-id='style-tooltip' data-tooltip-content={style.toLocaleUpperCase()[0] + style.slice(1)}>
                            <Select
                                styles={customStyles}
                                id="style"
                                name="style"
                                //value={style}
                                value={{ value: style, label: style[0].toUpperCase() + style.slice(1) }}
                                onChange={(selectedOption) => setStyle(selectedOption.value)}
                                options={styles && styles.map((style) => ({
                                    value: style[0],
                                    label: style[1]
                                }))}
                            />
                            <Tooltip id="style-tooltip" />
                        </div>
                    </div>

                    <div className='w-96'>
                        <label htmlFor="image" className="block text-sm font-medium text-slate-200">
                            Image
                        </label>
                        <div className="mt-1">
                            {/* <input
                                className="bg-black text-white shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm pt-3 pb-3 px-3 border-[1px] border-white"
                                type="file"
                                name="image"
                                id="image"
                                onChange={(event) => setImage(event.target.files[0])}
                            /> */}
                            <div className="w-full">
                                <label className="flex flex-row gap-2 justify-between items-center pt-2 pb-1 bg-black text-blue tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-gray-500">
                                    <div className='flex flex-row'>
                                        <svg className="w-10 h-10 px-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M10 4a2 2 0 00-2 2v4a2 2 0 104 0V6a2 2 0 00-2-2zm0 12a6 6 0 100-12 6 6 0 000 12z" />
                                        </svg>
                                        <a className="mt-2 text-base leading-normal px-1">Select a file</a>
                                    </div>
                                    <a className="leading-normal text-zinc-800 p-2">{image ? formatFileName(image.name) : ''}</a>
                                    <input type='file' className="hidden" onChange={(event) => setImage(event.target.files[0])}/>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Line break */}
                    <div className='basis-full'></div>


                    <div className='w-32'>
                        <label htmlFor="brawl" className="block text-sm font-medium text-slate-200">
                            Brawl
                        </label>
                        <div className="mt-1">
                            <input
                                className="bg-black text-white shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm p-4 border-[1px] border-white"
                                type="number"
                                name="brawl"
                                id="brawl"
                                value={brawl}
                                onChange={(event) => setBrawl(event.target.value)}
                                min="0"
                                max="100"
                                required
                            />
                        </div>
                    </div>
                    <div className='w-32'>
                        <label htmlFor="technical" className="block text-sm font-medium text-slate-200">
                            Technical
                        </label>
                        <div className="mt-1">
                            <input
                                className="bg-black text-white shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm p-4 border-[1px] border-white"
                                type="number"
                                name="technical"
                                id="technical"
                                value={technical}
                                onChange={(event) => setTechnical(event.target.value)}
                                min="0"
                                max="100"
                                required
                            />
                        </div>
                    </div>
                    <div className='w-32'>
                        <label htmlFor="aerial" className="block text-sm font-medium text-slate-200">
                            Aerial
                        </label>
                        <div className="mt-1">
                            <input
                                className="bg-black text-white shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm p-4 border-[1px] border-white"
                                type="number"
                                name="aerial"
                                id="aerial"
                                value={aerial}
                                onChange={(event) => setAerial(event.target.value)}
                                min="0"
                                max="100"
                                required
                            />
                        </div>
                    </div>
                    <div className='w-32'>
                        <label htmlFor="psychology" className="block text-sm font-medium text-slate-200">
                            Psychology
                        </label>
                        <div className="mt-1">
                            <input
                                className="bg-black text-white shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm p-4 border-[1px] border-white"
                                type="number"
                                name="psychology"
                                id="psychology"
                                value={psychology}
                                onChange={(event) => setPsychology(event.target.value)}
                                min="0"
                                max="100"
                                required
                            />
                        </div>
                    </div>
                    <div className='w-32'>
                        <label htmlFor="charisma" className="block text-sm font-medium text-slate-200">
                            Charisma
                        </label>
                        <div className="mt-1">
                            <input
                                className="bg-black text-white shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm p-4 border-[1px] border-white"
                                type="number"
                                name="charisma"
                                id="charisma"
                                value={charisma}
                                onChange={(event) => setCharisma(event.target.value)}
                                min="0"
                                max="100"
                                required
                            />
                        </div>
                    </div>
                    <div className='w-32'>
                        <label htmlFor="acting" className="block text-sm font-medium text-slate-200">
                            Acting
                        </label>
                        <div className="mt-1">
                            <input
                                className="bg-black text-white shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm p-4 border-[1px] border-white"
                                type="number"
                                name="acting"
                                id="acting"
                                value={acting}
                                onChange={(event) => setActing(event.target.value)}
                                min="0"
                                max="100"
                                required
                            />
                        </div>
                    </div>
                    <div className='w-32'>
                        <label htmlFor="sex_appeal" className="block text-sm font-medium text-slate-200">
                            Sex Appeal
                        </label>
                        <div className="mt-1">
                            <input
                                className="bg-black text-white shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm p-4 border-[1px] border-white"
                                type="number"
                                name="sex_appeal"
                                id="sex_appeal"
                                value={sex_appeal}
                                onChange={(event) => setSexAppeal(event.target.value)}
                                min="0"
                                max="100"
                            />
                        </div>
                    </div>
                    <div className='w-32'>
                        <label htmlFor="intimidating" className="block text-sm font-medium text-slate-200">
                            Intimidating
                        </label>
                        <div className="mt-1">
                            <input
                                className="bg-black text-white shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm p-4 border-[1px] border-white"
                                type="number"
                                name="intimidating"
                                id="intimidating"
                                value={intimidating}
                                onChange={(event) => setIntimidating(event.target.value)}
                                min="0"
                                max="100"
                            />
                        </div>
                    </div>
                    <div className='w-32'>
                        <label htmlFor="star_quality" className="block text-sm font-medium text-slate-200">
                            Star Quality
                        </label>
                        <div className="mt-1">
                            <input
                                className="bg-black text-white shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm p-4 border-[1px] border-white"
                                type="number"
                                name="star_quality"
                                id="star_quality"
                                value={star_quality}
                                onChange={(event) => setStarQuality(event.target.value)}
                                min="0"
                                max="100"
                            />
                        </div>
                    </div>
                    <div className='w-32'>
                        <label htmlFor="stamina" className="block text-sm font-medium text-slate-200">
                            Stamina
                        </label>
                        <div className="mt-1">
                            <input
                                className="bg-black text-white shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm p-4 border-[1px] border-white"
                                type="number"
                                name="stamina"
                                id="stamina"
                                value={stamina}
                                onChange={(event) => setStamina(event.target.value)}
                                min="0"
                                max="100"
                            />
                        </div>
                    </div>
                    <div className='w-32'>
                        <label htmlFor="power" className="block text-sm font-medium text-slate-200">
                            Power
                        </label>
                        <div className="mt-1">
                            <input
                                className="bg-black text-white shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm p-4 border-[1px] border-white"
                                type="number"
                                name="power"
                                id="power"
                                value={power}
                                onChange={(event) => setPower(event.target.value)}
                                min="0"
                                max="100"
                            />
                        </div>
                    </div>
                    <div className='w-32'>
                        <label htmlFor="referee" className="block text-sm font-medium text-slate-200">
                            Referee
                        </label>
                        <div className="mt-1">
                            <input
                                className="bg-black text-white shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm p-4 border-[1px] border-white"
                                type="number"
                                name="referee"
                                id="referee"
                                value={referee}
                                onChange={(event) => setReferee(event.target.value)}
                                min="0"
                                max="100"
                            />
                        </div>
                    </div>
                    <div className='w-32'>
                        <label htmlFor="commentary" className="block text-sm font-medium text-slate-200">
                            Commentary
                        </label>
                        <div className="mt-1">
                            <input
                                className="bg-black text-white shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm p-4 border-[1px] border-white"
                                type="number"
                                name="commentary"
                                id="commentary"
                                value={commentary}
                                onChange={(event) => setCommentary(event.target.value)}
                                min="0"
                                max="100"
                            />
                        </div>
                    </div>
                    <div className='w-32'>
                        <label htmlFor="road_agent" className="block text-sm font-medium text-slate-200">
                            Road Agent
                        </label>
                        <div className="mt-1">
                            <input
                                className="bg-black text-white shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm p-4 border-[1px] border-white"
                                type="number"
                                name="road_agent"
                                id="road_agent"
                                value={roadAgent}
                                onChange={(event) => setRoadAgent(event.target.value)}
                                min="0"
                                max="100"
                            />
                        </div>
                    </div>
                    <div className='w-32'>
                        <label htmlFor="sociable" className="block text-sm font-medium text-slate-200">
                            Sociable
                        </label>
                        <div className="mt-1">
                            <input
                                className="bg-black text-white shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm p-4 border-[1px] border-white"
                                type="number"
                                name="sociable"
                                id="sociable"
                                value={sociable}
                                onChange={(event) => setSociable(event.target.value)}
                                min="0"
                                max="100"
                            />
                        </div>
                    </div>
                    <div className='w-32'>
                        <label htmlFor="ambitious" className="block text-sm font-medium text-slate-200">
                            Ambitious
                        </label>
                        <div className="mt-1">
                            <input
                                className="bg-black text-white shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm p-4 border-[1px] border-white"
                                type="number"
                                name="ambitious"
                                id="ambitious"
                                value={ambitious}
                                onChange={(event) => setAmbitious(event.target.value)}
                                min="0"
                                max="100"
                            />
                        </div>
                    </div>
                </div>
                <button className="bg-black text-white p-3 w-48 ml-5 font-bold text-2xl border-white border-4" type="submit">{(id) ? "Update" : "Submit"}</button>
                <div>
                    <button className="p-3 w-48 m-5 bg-black text-white text-sm" type="button" onClick={fillRandomValues}>Fill with random values</button>
                </div>
            </form>
        </div>

    );
};

export default WrestlerFormComponent;
