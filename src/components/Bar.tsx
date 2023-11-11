import { padZeroes } from "../utils/padZeroes";

export default function Bar({
	name,
	stat,
	type,
}: {
	name: string;
	stat: number;
	type: string;
}) {
	// let width = Math.floor()
	console.log(name);
	return (
		<div className='flex items-center justify-center gap-4'>
			<p
				className='font-bold after:border-gray-500 border-r-2 w-[50px]'
				style={{ color: `var(--type-${type})` }}>
				{name.toUpperCase()}
			</p>
			<div className='flex flex-1  gap-2 items-center w-full'>
				<p>{padZeroes(stat, 3)}</p>
				<div
					className='border-1 w-full h-2 rounded  relative'
					style={{
						background: `lighten(var(--type-${type}),100%)`,
					}}>
					<div
						className='absolute h-full rounded'
						style={{
							background: `var(--type-${type})`,
							width: `${stat / 4}%`,
						}}></div>
				</div>
			</div>
		</div>
	);
}
