import { Topbar } from "../components/Topbar";
import Slider from "../components/slider";
import sliderArr from "../components/sliderArr";
import { LatestProducts } from "../components/LatestProducts";
import { GeneralInformation } from "../components/generalInformation";
import { Footer } from "../components/footer";

export function Home() {
  return (
    <>
      <Topbar />
      <Slider sliderArray={sliderArr} />
      <LatestProducts />
      <GeneralInformation />
      <Footer />
    </>
  );
}