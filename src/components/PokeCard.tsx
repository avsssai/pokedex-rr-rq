import React from "react";
// import Bulbasaur from "../assets/images/1.svg";
interface Props {
	name: string;
	src: string;
	id: string;
}

export default function PokeCard({ name, src, id }: Props) {
	return (
		<div className='rounded shadow-lg border-2 px-4 py-2'>
			<p className='text-sm text-gray-400 text-right mb-4'>#{id}</p>
			<img src={src} alt='bulbasaur' className='aspect-square' />
			<div className='text-center'>{name}</div>
		</div>
	);
}
