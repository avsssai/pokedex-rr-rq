import React from "react";
// import Bulbasaur from "../assets/images/1.svg";
interface Props {
	name: string;
	src: string;
	id: string;
}

export default function PokeCard({ name, src, id }: Props) {
	return (
		<div className='rounded shadow-lg border-2 px-4 py-2 flex flex-col items-center justify-center h-full relative'>
			<p className='text-sm text-gray-400 text-right mb-4 absolute top-0 right-0'>
				#{id}
			</p>
			<img
				src={src}
				alt='bulbasaur'
				className='min-w-[50px] aspect-square lg:max-w-[200px] p-2'
			/>
			<div className='text-center'>{name}</div>
		</div>
	);
}
