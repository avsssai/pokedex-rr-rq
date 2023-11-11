import { Link } from "react-router-dom";
import Image from "../components/Image";
import PokeBall from "../assets/images/pokeball.jpg";
import PokeCard from "../components/PokeCard";
import Bulbasaur from "../assets/images/1.svg";
import Charmander from "../assets/images/4.svg";
import Squirtle from "../assets/images/7.svg";
import Butterfree from "../assets/images/12.svg";
import Pikachu from "../assets/images/25.svg";
import Gastly from "../assets/images/92.svg";
import Ditto from "../assets/images/132.svg";
import Mew from "../assets/images/151.svg";
import Aron from "../assets/images/304.svg";
// import axios from 'axios'

// export const loader = async() => {
// 	try {
// 		const data = (await axios.get('https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg')).data
// 	} catch (error) {
// 		throw new Error("Error fetching data")
// 	}
// }

const LANDING_PAGE_DATA = [
	{
		id: "001",
		name: "Bulbasaur",
		image: Bulbasaur,
	},
	{
		id: "004",
		name: "Charmander",
		image: Charmander,
	},
	{
		id: "007",
		name: "Squirtle",
		image: Squirtle,
	},
	{
		id: "012",
		name: "Butterfree",
		image: Butterfree,
	},
	{
		id: "025",
		name: "Pikachu",
		image: Pikachu,
	},
	{
		id: "092",
		name: "Gastly",
		image: Gastly,
	},
	{
		id: "132",
		name: "Ditto",
		image: Ditto,
	},
	{
		id: "151",
		name: "Mew",
		image: Mew,
	},
	{
		id: "304",
		name: "Aron",
		image: Aron,
	},
];

export default function Root() {
	return (
		<div className='min-h-screen bg-primary container m-auto'>
			<div className='p-4'>
				<div className='flex gap-4 mb-4 items-center'>
					<Image src={PokeBall} size='sm' alt='pokeball' />
					<span className='text-white tracking-wide font-bold text-2xl'>
						Pokemon
					</span>
				</div>
				<div className='flex gap-4'>
					<input
						type='text'
						className='rounded-full w-full flex-1 px-4 text-md'
					/>
					<button className='text-red rounded-[50px] w-[50px] h-[50px] flex items-center justify-center bg-white'>
						#
					</button>
				</div>
			</div>
			<section className=''>
				<div className='card bg-white mx-1 gap-1 rounded-sm grid-cols-3 grid'>
					{LANDING_PAGE_DATA.map((item) => (
						<Link to={`/pokemon/${item.name.toLowerCase()}`}>
							<PokeCard
								key={item.id}
								name={item.name}
								id={item.id}
								src={item.image}
							/>
						</Link>
					))}
				</div>
			</section>
		</div>
	);
}
