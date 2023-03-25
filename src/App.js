// import logo from './logo.svg';
import "./App.css";
import Slider from "./components/slider";
import { Topbar } from "./components/Topbar";

function App() {
	return (
		<div className="h-screen flex flex-col items-center ">
			<Topbar />
			<Slider />
		</div>
	);
}

export default App;
