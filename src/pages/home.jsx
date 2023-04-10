import Slider from "../components/slider";
import sliderArr from "../components/sliderArr";
import { LatestProducts } from "../components/LatestProducts";
import { GeneralInformation } from "../components/generalInformation";

export function Home() {
  return (
    <>
      <Slider sliderArray={sliderArr} />
      <LatestProducts />
      <GeneralInformation />
    </>
  );
}
