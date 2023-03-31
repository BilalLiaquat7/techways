import Product from "./product";

export function LatestProducts() {
  return (
    <div className="bg-white w-4/5 flex flex-col">
      <h1 className="text-4xl my-14 font-bold text-blue-900 flex justify-center">
        Latest Products
      </h1>
      <div className="flex flex-wrap justify-between gap-3"></div>
    </div>
  );
}
