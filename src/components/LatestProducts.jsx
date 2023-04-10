import Product from "./product";
import living_room from "../assets/living_room.jpg";
import kitchen from "../assets/Kitchen.jpg";
import bathroom from "../assets/bathroom.jpg";
import furniture from "../assets/furniture.jpg";
import bed from "../assets/Bed.jpg";
// import furniture from "../assets/furniture.jpg";

export function LatestProducts() {
  return (
    <div className="bg-white w-11/12 flex-col justify-center">
      <div className="Furniture flex flex-row items-center">
        <div className="left my-14 w-1/2">
          <img className="w-auto" src={furniture} alt="" />
        </div>
        <div className="right my-14 w-1/2 pl-40">
          <h1 className=" text-3xl font-bold "> FURNITURE</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            atque tempore voluptatem blanditiis, ea consequuntur sequi esse
            aliquam, sed in iure modi placeat et consectetur eligendi magnam ex
            fugit qui!
          </p>
          <button className=" bg-pink-600 px-12 py-3 my-8 rounded-[4px] text-white hover:text-white hover:bg-pink-700">
            View More
          </button>
        </div>
      </div>
      <div className="BedSet flex flex-row items-center">
        <div className="left my-14 w-1/2 pr-40">
          <h1 className=" text-3xl font-bold ">Bed</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            atque tempore voluptatem blanditiis, ea consequuntur sequi esse
            aliquam, sed in iure modi placeat et consectetur eligendi magnam ex
            fugit qui!
          </p>
          <button className=" bg-pink-600 px-12 py-3 my-8 rounded-[4px] text-white hover:text-white hover:bg-pink-700">
            View More
          </button>
        </div>
        <div className="right my-4 w-1/2">
          <img className="w-auto" src={bed} alt="" />
        </div>
      </div>
      <div className="MainOptions flex flex-row h-2/6 my-20">
        <div className="flex-1 h-2/5 justify-center relative text-center">
          <img className="filter contrast-75" src={kitchen} alt="" />
          <p class="absolute text-xl text-white top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
            KITCHEN
          </p>
        </div>
        <div className="flex-1 h-2/5 justify-center relative text-center">
          <img className="filter contrast-75" src={bathroom} alt="" />
          <p class="absolute text-xl text-white top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
            BATHROOM
          </p>
        </div>
        <div className="flex-1 h-2/5 justify-center relative text-center">
          <img className="filter contrast-75" src={living_room} alt="" />
          <p class="absolute text-xl text-white top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
            LIVING ROOM
          </p>
        </div>
      </div>
    </div>
  );
}
