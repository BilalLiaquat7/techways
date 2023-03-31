// import logo from './logo.svg';
import "./App.css";
import Slider from "./components/slider";
import { Topbar } from "./components/Topbar";
import sliderArr from "./components/sliderArr";
import { LatestProducts } from "./components/LatestProducts";
import { GeneralInformation } from "./components/generalInformation";
import { Footer } from "./components/footer";

function App() {
	return (
		<div className="h-screen flex flex-col items-center ">
			<Topbar />
			<Slider sliderArray={sliderArr} />
			<LatestProducts />
			<GeneralInformation />
			<Footer />
		</div>
	);
}

export default App;
