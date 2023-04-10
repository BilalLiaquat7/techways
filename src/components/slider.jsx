function Slider({ sliderArray }) {
	return sliderArray.map((slide) => {
		return (
			<div
				key={slide.id}
				className="w-fit bg-purple-100 flex justify-center h-full"
			>
				<div className="w-11/12 flex justify-between align-center">
					<div className="left w-1/2 flex flex-col justify-center space-y-4 ">
						<p className="text-sm text-pink-600">{slide.tag}</p>
						<h1 className="text-5xl ">{slide.title}</h1>
						<p>{slide.dis}</p>
						<div className="my-4 space-x-2">
							<button className=" bg-pink-600 px-12 py-3 rounded-[4px] text-white hover:text-white hover:bg-pink-700">
								{slide.buttonText}
							</button>
						</div>
					</div>
					<div className="right w-1/2 h-full flex justify-end align-center">
						<img className="w-auto py-4" src={slide.image} alt="" />
					</div>
				</div>
			</div>
		);
	}); // return { renderSlider };
}

export default Slider;
