import sofa from "./../assets/sofa.png";

function Slider() {
  return (
    <>
      <div className="container slider bg-gray-200 flex items-center justify-center">
        <div className="left w-1/2 mx-14 ">
          <p className="text-sm text-pink-600">
            Best Furniture For Your Castle....
          </p>
          <h1 className="text-4xl ">New Furniture Collection 2023</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <div className="my-4 space-x-2">
            <button className="bg-purple-800 px-3 py-2 rounded-2xl text-white hover:text-white hover:bg-fuchsia-700">
              Buy Sofa
            </button>
          </div>
        </div>
        <div className="right">
          <img className="w-1/3" src={sofa} alt="" />
        </div>
      </div>
    </>
  );
}

export default Slider;
