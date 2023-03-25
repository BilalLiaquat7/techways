export function Topbar() {
  return (
    <>
      <nav className="bg-gray-100 text-white flex justify-between">
        <span className="text-xl flex items-center mx-3 font-bold text-gray-700">
          Techways
        </span>
        <ul className="px-28 py-6 flex space-x-3 justify-end">
          <li className="cursor-pointer text-gray-700">Home</li>
          <li className="cursor-pointer text-gray-700">About</li>
          <li className="cursor-pointer text-gray-700">Catalogue</li>
          <li className="cursor-pointer text-gray-700">Contact Us</li>
        </ul>
      </nav>
    </>
  );
}
