export function Topbar() {
	return (
		<>
			<nav className="mx-36 text-white flex justify-between h-24 items-center">
				<span className="text-xl flex items-center mx-3 font-bold text-slate-900">
					Techways
				</span>
				<ul className=" flex space-x-12 justify-end ">
					<li className="cursor-pointer text-slate-900">Home</li>
					<li className="cursor-pointer text-slate-900">About</li>
					<li className="cursor-pointer text-slate-900">Catalogue</li>
					<li className="cursor-pointer text-slate-900">Contact Us</li>
				</ul>
			</nav>
		</>
	);
}
