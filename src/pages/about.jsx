import stairs from "../assets/stairs.jpg";

export function About() {
  return (
    <div className="flex justify-center relative text-center">
      <img src={stairs} alt="" />
      <p class="absolute text-5xl text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        ABOUT US
      </p>
    </div>
  );
}
