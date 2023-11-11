export default function Tag({ type }: { type: string }) {
	return (
		<div
			className='w-fit px-3 py-1 rounded-full text-white font-bold flex items-center justify-center'
			style={{ background: `var(--type-${type})` }}>
			{type}
		</div>
	);
}
