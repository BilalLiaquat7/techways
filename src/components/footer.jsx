export function Footer() {
  return (
    <div className="w-screen flex justify-center bg-purple-100 h-full">
      <div className="w-4/5 py-12 flex flex-row">
        <div className="left w-1/2">
          <h1 className="text-2xl text-pink-600 font-bold">TECHWAYS</h1>
        </div>
        <div className="right w-1/2 flex flex-row justify-between items-start">
          <div className="flex flex-col justify-center">
            <h1 className="text-xl text-gray-800 font-bold">Shop</h1>
            <span className="py-1"></span>
            <span className="py-5">Log in</span>
            <span>Sign up</span>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-xl text-gray-800 font-bold">About</h1>
            <span className="py-1"></span>
            <span className="py-5">Team</span>
            <span >Investors</span>
            <span className="py-5">Career</span>
            <span>Press</span>

          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-xl text-gray-800 font-bold">Help</h1>
            <span className="py-1"></span>
            <span >Help Center</span>
            <span className="py-5">Trust and Safety</span>
            <span>Privacy settings</span>
          </div>
        </div>
      </div>
    </div>
  );
}
