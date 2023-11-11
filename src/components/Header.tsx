export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='min-h-screen bg-primary'>
			<div className='min-h-screen container m-auto'>{children}</div>
		</div>
	);
}
