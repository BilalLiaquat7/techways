import sofaChair from "./../assets/sofa_chair.png";

function Product() {
  return (

      <div className="flex flex-col w-1/4">
        <img className="p-12 rounded-md bg-gray-200" src={sofaChair} alt="" />
        <div className="flex flex-row justify-between py-3">
          <p>Sofa Chair</p>
          <div className="flex flex-row space-x-2 items-center">
            <span className="">$48.5</span>
            <span className="text-red-600 text-sm line-through"> $55.5</span>
          </div>
        </div>
      </div>
  );
}

export default Product;
