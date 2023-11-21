const Main1 = () => {
  return (
    <div className="flex flex-col justify-center items-start py-[80px] px-[500px] -translate-x-30 gap gap-5 ">
      <span className="text-6xl ">A better,smarter currency</span>
      <span className="text-2xl ">
        Dai can be used by anyone,anywhere,anytime
      </span>
      <div className="">
        <button className="border b-10 rounded-full text-2xl px-16 py-4 font-bold bg-emerald-500 text-white">
          {" "}
          Use Dai
        </button>
        <button className="text-emerald-500 px-10 text-2xl font-bold ">
          Play video
        </button>
      </div>
    </div>
  );
};
export default Main1;
