import Header from "./components/Header";
import "animate.css";

const App = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-start p-48 -translate-x-30 gap gap-5 ">
        <span className="text-6xl ">A better,smarter currency</span>
        <span className="text-2xl ">
          Dai can be used by anyone,anywhere,anytime
        </span>
        <div className="">
          <button className="border b-10 rounded-full text-2xl px-16 py-4 font-bold bg-emerald-500 text-white">
            {" "}
            Use Dai
          </button>
          <button className="text-emerald-500 px-10">Play video</button>
        </div>
      </div>
    </div>
  );
};

export default App;
