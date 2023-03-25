export function Topbar() {
	return (
		<div className="w-4/5">
			<nav className="text-white flex justify-between h-24 items-center">
				<span className="text-xl flex items-center mx-3 font-bold text-slate-900 cursor-pointer hover:text-pink-600">
					Techways
				</span>
				<ul className=" flex space-x-12 justify-end">
					<li className="cursor-pointer text-slate-900 hover:text-pink-600">Home</li>
					<li className="cursor-pointer text-slate-900 hover:text-pink-600">About</li>
					<li className="cursor-pointer text-slate-900 hover:text-pink-600">Catalogue</li>
					<li className="cursor-pointer text-slate-900 hover:text-pink-600">Contact Us</li>
				</ul>
			</nav>
		</div>
	);
}
