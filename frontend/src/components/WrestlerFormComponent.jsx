import React, { useEffect, useState } from 'react';
import { createWrestler } from '../api/wrestlers.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-hot-toast";
import axios from 'axios';
import { getNationalities, getStyles, getMoves } from '../api/wrestlers.api';
import { getWrestler, updateWrestler } from '../api/wrestlers.api';

const WrestlerFormComponent = () => {

    const { id } = useParams();

    const months = [[1, 'January'], [2, 'February'], [3, 'March'], [4, 'April'], [5, 'May'], [6, 'June'], [7, 'July'], [8, 'August'], [9, 'September'], [10, 'October'], [11, 'November'], [12, 'December'],]
    const [isFocused, setIsFocused] = useState(false);
    const [moves, setMoves] = useState([]);
    //Wrestler info
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [yearOfBirth, setYearOfBirth] = useState('');
    const [monthOfBirth, setMonthOfBirth] = useState('');
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
                <div className="grid grid-cols-4 gap-4 p-6">
                    <div className='col-span-2'>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-400">
                            Name
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-slate-800 rounded-md"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor='gender' className="block text-sm font-medium text-slate-400">
                            Gender
                        </label>
                        <div className="mt-1">
                            <select
                                id='gender'
                                name='gender'
                                value={gender}
                                onChange={(event) => setGender(event.target.value)}
                                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-slate-800 rounded-md"
                            >
                                <option value="male">Male</option>
                                <option value='female'>Female</option>
                                <option value='other'>Other</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='nationality' className="block text-sm font-medium text-slate-400">
                            Nationality
                        </label>
                        <div className="mt-1">
                            <select
                                id='nationality'
                                name='nationality'
                                value={nationality}
                                onChange={(event) => setNationality(event.target.value)}
                                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-slate-800 rounded-md"
                            >
                                {nationalities && nationalities.map((nation) => (
                                    <option key={nation[0]} value={nation[0]}>
                                        {nation[1]}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="year_of_birth" className="block text-sm font-medium text-slate-400">
                            Year of Birth
                        </label>
                        <div className="mt-1">
                            <input
                                type="number"
                                name="year_of_birth"
                                id="year_of_birth"
                                value={yearOfBirth}
                                onChange={(event) => setYearOfBirth(event.target.value)}
                                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-slate-800 rounded-md"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="month_of_birth" className="block text-sm font-medium text-slate-400">
                            Month of Birth
                        </label>
                        <div className="mt-1">
                            <select
                                id="month_of_birth"
                                name="month_of_birth"
                                value={monthOfBirth}
                                onChange={(event) => setMonthOfBirth(event.target.value)}
                                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-slate-800 rounded-md"
                            >
                                {/* generate options using the MONTH_CHOICES in constants */}
                                {months.map((month) => (
                                    <option key={month[0]} value={month[0]}>
                                        {month[1]}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="height" className="block text-sm font-medium text-slate-400">
                            Height (cm.)
                        </label>
                        <div className="mt-1">
                            <input
                                type="number"
                                name="height"
                                id="height"
                                value={height}
                                onChange={(event) => setHeight(event.target.value)}
                                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-slate-800 rounded-md"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="weight" className="block text-sm font-medium text-slate-400">
                            Weight (Kg.)
                        </label>
                        <div className="mt-1">
                            <input
                                type="number"
                                name="weight"
                                id="weight"
                                value={weight}
                                onChange={(event) => setWeight(event.target.value)}
                                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-slate-800 rounded-md"
                            />
                        </div>
                    </div>
                    {/* <div> */}
                    {/* <label htmlFor="finisher" className="block text-sm font-medium text-slate-400">
                            Finisher
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="finisher"
                                id="finisher"
                                value={finisher}
                                onChange={(event) => setFinisher(event.target.value)}
                                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-slate-800 rounded-md"
                            />
                        </div>
                    </div> */}

                    <div>
                        <label htmlFor="finisher" className="block text-sm font-medium text-slate-400">
                            Finisher
                        </label>
                        <div className="mt-1 relative">
                            <input
                                type="text"
                                value={finisher}
                                onChange={e => setFinisher(e.target.value)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => {
                                    // Use a timeout to delay the execution of setIsFocused(false)
                                    setTimeout(() => setIsFocused(false), 200);
                                }} 
                                className='shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-slate-800 rounded-md'
                            />
                            {isFocused && finisher && (
                                <div className="border-x-2 border-b-2 absolute z-10 bg-slate-900" >
                                    {filteredOptions.map((option, index) => (
                                        <div key={index} onClick={() => setFinisher(option[1])}>
                                            {option[1]}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="style" className="block text-sm font-medium text-slate-400">
                            Style
                        </label>
                        <div className="mt-1">
                            <select
                                id="style"
                                name="style"
                                value={style}
                                onChange={(event) => setStyle(event.target.value)}
                                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-slate-800 rounded-md"
                            >
                                {/* generate options using the styles */}
                                {styles && styles.map((style) => (
                                    <option key={style[0]} value={style[0]}>
                                        {style[1]}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <label htmlFor="image" className="block text-sm font-medium text-slate-400">
                            Image
                        </label>
                        <div className="mt-1">
                            <input
                                type="file"
                                name="image"
                                id="image"
                                onChange={(event) => setImage(event.target.files[0])}
                                className="text-slate-500 shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-slate-800 rounded-md"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="brawl" className="block text-sm font-medium text-slate-400">
                            Brawl
                        </label>
                        <div className="mt-1">
                            <input
                                type="number"
                                name="brawl"
                                id="brawl"
                                value={brawl}
                                onChange={(event) => setBrawl(event.target.value)}
                                min="0"
                                max="100"
                                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-1/2 sm:text-sm border-slate-800 rounded-md"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="technical" className="block text-sm font-medium text-slate-400">
                            Technical
                        </label>
                        <div className="mt-1">
                            <input
                                type="number"
                                name="technical"
                                id="technical"
                                value={technical}
                                onChange={(event) => setTechnical(event.target.value)}
                                min="0"
                                max="100"
                                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-1/2 sm:text-sm border-slate-800 rounded-md"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="aerial" className="block text-sm font-medium text-slate-400">
                            Aerial
                        </label>
                        <div className="mt-1">
                            <input
                                type="number"
                                name="aerial"
                                id="aerial"
                                value={aerial}
                                onChange={(event) => setAerial(event.target.value)}
                                min="0"
                                max="100"
                                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-1/2 sm:text-sm border-slate-800 rounded-md"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="psychology" className="block text-sm font-medium text-slate-400">
                            Psychology
                        </label>
                        <div className="mt-1">
                            <input
                                type="number"
                                name="psychology"
                                id="psychology"
                                value={psychology}
                                onChange={(event) => setPsychology(event.target.value)}
                                min="0"
                                max="100"
                                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-1/2 sm:text-sm border-slate-800 rounded-md"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="charisma" className="block text-sm font-medium text-slate-400">
                            Charisma
                        </label>
                        <div className="mt-1">
                            <input
                                type="number"
                                name="charisma"
                                id="charisma"
                                value={charisma}
                                onChange={(event) => setCharisma(event.target.value)}
                                min="0"
                                max="100"
                                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-1/2 sm:text-sm border-slate-800 rounded-md"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="acting" className="block text-sm font-medium text-slate-400">
                            Acting
                        </label>
                        <div className="mt-1">
                            <input
                                type="number"
                                name="acting"
                                id="acting"
                                value={acting}
                                onChange={(event) => setActing(event.target.value)}
                                min="0"
                                max="100"
                                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-1/2 sm:text-sm border-slate-800 rounded-md"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="sex_appeal" className="block text-sm font-medium text-slate-400">
                            Sex Appeal
                        </label>
                        <div className="mt-1">
                            <input
                                type="number"
                                name="sex_appeal"
                                id="sex_appeal"
                                value={sex_appeal}
                                onChange={(event) => setSexAppeal(event.target.value)}
                                min="0"
                                max="100"
                                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-1/2 sm:text-sm border-slate-800 rounded-md"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="intimidating" className="block text-sm font-medium text-slate-400">
                            Intimidating
                        </label>
                        <div className="mt-1">
                            <input
                                type="number"
                                name="intimidating"
                                id="intimidating"
                                value={intimidating}
                                onChange={(event) => setIntimidating(event.target.value)}
                                min="0"
                                max="100"
                                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-1/2 sm:text-sm border-slate-800 rounded-md"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="star_quality" className="block text-sm font-medium text-slate-400">
                            Star Quality
                        </label>
                        <div className="mt-1">
                            <input
                                type="number"
                                name="star_quality"
                                id="star_quality"
                                value={star_quality}
                                onChange={(event) => setStarQuality(event.target.value)}
                                min="0"
                                max="100"
                                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-1/2 sm:text-sm border-slate-800 rounded-md"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="stamina" className="block text-sm font-medium text-slate-400">
                            Stamina
                        </label>
                        <div className="mt-1">
                            <input
                                type="number"
                                name="stamina"
                                id="stamina"
                                value={stamina}
                                onChange={(event) => setStamina(event.target.value)}
                                min="0"
                                max="100"
                                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-1/2 sm:text-sm border-slate-800 rounded-md"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="power" className="block text-sm font-medium text-slate-400">
                            Power
                        </label>
                        <div className="mt-1">
                            <input
                                type="number"
                                name="power"
                                id="power"
                                value={power}
                                onChange={(event) => setPower(event.target.value)}
                                min="0"
                                max="100"
                                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-1/2 sm:text-sm border-slate-800 rounded-md"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="referee" className="block text-sm font-medium text-slate-400">
                            Referee
                        </label>
                        <div className="mt-1">
                            <input
                                type="number"
                                name="referee"
                                id="referee"
                                value={referee}
                                onChange={(event) => setReferee(event.target.value)}
                                min="0"
                                max="100"
                                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-1/2 sm:text-sm border-slate-800 rounded-md"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="commentary" className="block text-sm font-medium text-slate-400">
                            Commentary
                        </label>
                        <div className="mt-1">
                            <input
                                type="number"
                                name="commentary"
                                id="commentary"
                                value={commentary}
                                onChange={(event) => setCommentary(event.target.value)}
                                min="0"
                                max="100"
                                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-1/2 sm:text-sm border-slate-800 rounded-md"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="road_agent" className="block text-sm font-medium text-slate-400">
                            Road Agent
                        </label>
                        <div className="mt-1">
                            <input
                                type="number"
                                name="road_agent"
                                id="road_agent"
                                value={roadAgent}
                                onChange={(event) => setRoadAgent(event.target.value)}
                                min="0"
                                max="100"
                                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-1/2 sm:text-sm border-slate-800 rounded-md"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="sociable" className="block text-sm font-medium text-slate-400">
                            Sociable
                        </label>
                        <div className="mt-1">
                            <input
                                type="number"
                                name="sociable"
                                id="sociable"
                                value={sociable}
                                onChange={(event) => setSociable(event.target.value)}
                                min="0"
                                max="100"
                                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-1/2 sm:text-sm border-slate-800 rounded-md"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="ambitious" className="block text-sm font-medium text-slate-400">
                            Ambitious
                        </label>
                        <div className="mt-1">
                            <input
                                type="number"
                                name="ambitious"
                                id="ambitious"
                                value={ambitious}
                                onChange={(event) => setAmbitious(event.target.value)}
                                min="0"
                                max="100"
                                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-1/2 sm:text-sm border-slate-800 rounded-md"
                            />
                        </div>
                    </div>
                </div>
                <button className="bg-red-500 p-3 rounded-lg w-48 ml-5 font-bold text-2xl" type="submit">{(id)? "Update" : "Submit"}</button>
                <div>
                    <button className="p-3 rounded-lg w-48 m-5 bg-purple-600 text-sm" type="button" onClick={fillRandomValues}>Fill with random values</button>
                </div>
            </form>
        </div>

    );
};

export default WrestlerFormComponent;
