import React, { useState } from 'react';
import { createWrestler } from '../api/wrestlers.api';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast";

const WrestlerFormComponent = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [yearOfBirth, setYearOfBirth] = useState('');
    const [monthOfBirth, setMonthOfBirth] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [finisher, setFinisher] = useState('');
    const [image, setImage] = useState(null);
    const [style, setStyle] = useState('Brawler');
    const [brawl, setBrawl] = useState(50);
    const [technical, setTechnical] = useState(50);
    const [aerial, setAerial] = useState(50);
    const [psychology, setPsychology] = useState(50);
    const [charisma, setCharisma] = useState(50);
    const [acting, setActing] = useState(50);
    const [physique, setPhysique] = useState(50);
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

    // Handle form submission: create a wrestler using ../api/wrestlers.api.js
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('year_of_birth', yearOfBirth);
        formData.append('month_of_birth', monthOfBirth);
        formData.append('height', height);
        formData.append('weight', weight);
        formData.append('finisher', finisher);
        formData.append('image', image);
        formData.append('style', style);
        formData.append('brawl', brawl);
        formData.append('technical', technical);
        formData.append('aerial', aerial);
        formData.append('psychology', psychology);
        formData.append('charisma', charisma);
        formData.append('acting', acting);
        formData.append('physique', physique);
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
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 p-6">
                <div>
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
                        <input
                            type="number"
                            name="month_of_birth"
                            id="month_of_birth"
                            value={monthOfBirth}
                            onChange={(event) => setMonthOfBirth(event.target.value)}
                            className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-slate-800 rounded-md"
                        />
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
                <div>
                    <label htmlFor="finisher" className="block text-sm font-medium text-slate-400">
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
                </div>
                <div>
                    <label htmlFor="image" className="block text-sm font-medium text-slate-400">
                        Image
                    </label>
                    <div className="mt-1">
                        <input
                            type="file"
                            name="image"
                            id="image"
                            onChange={(event) => setImage(event.target.files[0])}
                            className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-slate-800 rounded-md"
                        />
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
                            <option value="Brawler">Brawler</option>
                            <option value="High Flyer">High Flyer</option>
                            <option value="Powerhouse">Powerhouse</option>
                            <option value="Technician">Technician</option>
                            <option value="All-Rounder">All-Rounder</option>
                            <option value="Gimmick">Gimmick</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Showman">Showman</option>
                            <option value="Hardcore">Hardcore</option>
                            <option value="Luchador">Luchador</option>
                            <option value="Strong Style">Strong Style</option>
                            <option value="Other">Other</option>
                        </select>
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
                            className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-slate-800 rounded-md"
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
                            className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-slate-800 rounded-md"
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
                            className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-slate-800 rounded-md"
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
                            className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-slate-800 rounded-md"
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
                            className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-slate-800 rounded-md"
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
                            className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-slate-800 rounded-md"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="physique" className="block text-sm font-medium text-slate-400">
                        Physique
                    </label>
                    <div className="mt-1">
                        <input
                            type="number"
                            name="physique"
                            id="physique"
                            value={physique}
                            onChange={(event) => setPhysique(event.target.value)}
                            min="0"
                            max="100"
                            className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-slate-800 rounded-md"

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
                            className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-slate-800 rounded-md"

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
                            className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-slate-800 rounded-md"

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
                            className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-slate-800 rounded-md"

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
                            className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-slate-800 rounded-md"

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
                            className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-slate-800 rounded-md"

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
                            className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-slate-800 rounded-md"

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
                            className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-slate-800 rounded-md"

                        />
                    </div>
                </div>                
            </div>
            <button className="bg-red-500 p-3 rounded-lg w-48 mt-3" type="submit">Submit</button>
        </form>
    );
};

export default WrestlerFormComponent;
