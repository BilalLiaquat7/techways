import { Link } from "react-router-dom";

export function Topbar() {
  return (
    <div className="w-4/5">
      <nav className="text-white flex justify-between h-24 items-center">
        <span className="text-xl flex items-center mx-3 font-bold text-slate-900 cursor-pointer hover:text-pink-600">
          Techways
        </span>
        <ul className=" flex space-x-12 justify-end">
          <li className="cursor-pointer text-slate-900 hover:text-pink-600">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer text-slate-900 hover:text-pink-600">
            <Link to="/about">About</Link>
          </li>
          <li className="cursor-pointer text-slate-900 hover:text-pink-600">
          <Link to="/catalogue">Catalogue</Link>
          </li>
          <li className="cursor-pointer text-slate-900 hover:text-pink-600">
          <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
