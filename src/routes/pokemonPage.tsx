import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";

import { LoaderFunctionArgs } from "react-router-dom";
import { PokeApiResp } from "../types/pokeApiResp";
import { ArrowLeft } from "react-feather";
import { Scale, Ruler } from "lucide-react";
import { padZeroes } from "../utils/padZeroes";
import Tag from "../components/Tag";
import { PokeDescResp } from "../types/pokeDescResp";
import Bar from "../components/Bar";

interface StringObject {
	[key: string]: string;
}
const NAMES: StringObject = {
	hp: "hp",
	attack: "atk",
	defense: "def",
	"special-attack": "satk",
	"special-defense": "sdef",
	speed: "spd",
};

export async function loader({ params }: LoaderFunctionArgs) {
	const pokemonName = params.pokemonName;
	const data = (
		await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
	).data;
	const descriptionData = (
		await axios.get("https://pokeapi.co/api/v2/pokemon-species/1")
	).data;

	// const imageData = (
	// 	await axios.get(
	// 		"https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/304.svg"
	// 	)
	// ).data;
	return { data, descriptionData };
}
export default function PokemonPage() {
	const { data, descriptionData } = useLoaderData() as {
		data: PokeApiResp;
		descriptionData: PokeDescResp;
	};
	// console.log(data);
	// const constructedClass = `min-h-screen bg-type_${data.types[0].type.name}`;
	function removeEscapeCharacters(inputString: string): string {
		// Using regular expression to remove escape characters
		const cleanedString = inputString.replace(/\\./g, "");
		return cleanedString;
	}
	const type = data.types[0].type.name;
	return (
		<div
			className='min-h-screen relative isolate'
			style={{ background: `var(--type-${type})` }}>
			<div className='py-3'>
				<div className='flex gap-2 items-center absolute justify-between w-full px-3'>
					<span className='flex gap-2 items-center'>
						<Link to={"/"}>
							<ArrowLeft color='white' strokeWidth={4} />
						</Link>
						<h2 className='tracking-wide font-bold text-white text-xl'>
							{data.species.name.toLocaleUpperCase()}
						</h2>
					</span>
					<span className='font-black text-white'>
						#{padZeroes(data.id, 3)}
					</span>
				</div>
			</div>
			<div className='flex-1'>
				<img
					src={data.sprites.other.dream_world.front_default}
					alt={"image of pokemon " + data.species.name}
					className='aspect-square m-auto mb-[-3rem] mt-12 min-h-[100px]'
				/>
			</div>
			<div className='flex-2 bg-white mx-2 rounded-lg shadow-sm capitalize p-4'>
				<div className='flex gap-2 m-auto justify-center items-center pt-16 mb-4'>
					{data.types.map((type) => (
						<Tag type={type.type.name} key={type.type.name} />
					))}
				</div>
				<div
					style={{ color: `var(--type-${type}` }}
					className='font-bold text-xl text-center mb-4'>
					About
				</div>

				<div className='flex justify-evenly [&:not(:last-child)]:border border-r-2 mb-4'>
					<div className='text-center flex-1 flex flex-col gap-2 justify-between'>
						<p className='flex items-center justify-center gap-2'>
							<Scale color='gray' strokeWidth={2} size={20} />
							<span className='text-md'>{data.weight} kg</span>
						</p>
						<p className='text-gray-600 text-sm'>Weight</p>
					</div>
					<div className='text-center flex-1 flex flex-col gap-2 justify-between'>
						<p className='flex items-center justify-center gap-2'>
							<Ruler color='gray' strokeWidth={2} size={20} />
							<span className='text-md'>{data.height} m</span>
						</p>
						<p className='text-gray-600 text-sm'>Height</p>
					</div>
					<div className='text-center flex-1 flex flex-col gap-2'>
						<p className='flex items-center justify-center gap-2'>
							<span className='text-md'>
								{data.abilities.map((item) => (
									<p
										key={item.ability.name}
										className='text-[12px]'>
										{item.ability.name}
									</p>
								))}
							</span>
						</p>
						<p className='text-gray-600 text-sm'>Moves</p>
					</div>
				</div>
				<div className='text-gray-700 text-sm mb-4'>
					{removeEscapeCharacters(
						descriptionData.flavor_text_entries[0].flavor_text
					)}
				</div>
				<div>
					<h2
						style={{ color: `var(--type-${type}` }}
						className='font-bold text-xl text-center mb-4'>
						Base Stats
					</h2>
					{data.stats.map((stat) => (
						<Bar
							key={stat.stat.name}
							name={NAMES[stat.stat.name]}
							stat={stat.base_stat}
							type={type}
						/>
					))}
					{/* <Bar name='hp' stat={39} type={type} /> */}
				</div>
			</div>
		</div>
	);
}
