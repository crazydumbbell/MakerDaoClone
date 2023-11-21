const Main3 = () => {
  return (
    <div className="px-[500px]">
      <div>
        <div className="flex pt-36 ">
          <div className="flex flex-col items-start w-full gap gap-5">
            <span className="text-3xl">
              Financial freedom with no volatility
            </span>
            <span className="text-xl">
              A price-stable currency that you control. Generate Dai on your
              terms, instantly.
            </span>
            <button className="text-emerald-600 hover:text-emerald-900">
              Read the whitepaper
            </button>
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <div className="flex justify-center items-center gap-4 ">
              <span className="text-4xl text-orange-300 -translate-y-0.5">1</span>
              <img className="h-[30px]" src="./images/Dai.png" />
              <img className="h-[30px]" src="./images/1010.png" />
              <img className="h-[30px]" src="./images/Doller.png" />
              <span className="text-4xl text-emerald-300 -translate-y-0.5">1</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex pt-36 ">
          <div className="flex flex-col items-start w-full gap gap-5">
            <span className="text-3xl">Decentralized governance</span>
            <span className="text-xl">
              A community of MKR token holders govern the Maker Protocol, the
              smart contracts that power Dai.
            </span>
            <button className="text-emerald-600 hover:text-emerald-900 ">
              Learn more
            </button>
          </div>
          <div className="w-full flex flex-col items-center ">
            <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
              <g opacity="0.1">
                <circle cx="75" cy="75" r="75" fill="#1AAB9B"></circle>
                <circle cx="75" cy="75" r="75" fill="#1AAB9B"></circle>
              </g>
              <g opacity="0.1">
                <circle cx="75" cy="75" r="65" fill="#1AAB9B"></circle>
                <circle cx="75" cy="75" r="65" fill="#1AAB9B"></circle>
              </g>
              <circle cx="75" cy="75" r="50" fill="#1AAB9B"></circle>
              <path
                d="M53.1008 88V66.8208L69.1623 78.9078V88H73.2632V78.0552C73.2632 77.3036 72.91 76.5957 72.3094 76.1438L52.8305 61.4851C51.2541 60.2987 49 61.4235 49 63.3965V88H53.1008Z"
                fill="white"
              ></path>
              <path
                d="M97.5221 88V66.8208L81.4605 78.9078V88H77.3597V78.0552C77.3597 77.3036 77.7129 76.5957 78.3135 76.1438L97.7923 61.4851C99.3688 60.2987 101.623 61.4235 101.623 63.3965V88H97.5221Z"
                fill="white"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div>
        <div className="flex pt-36 ">
          <div className="flex flex-col w-full gap gap-5">
            <span className="text-3xl">A growing ecosystem</span>
            <span className="text-xl">
              Over 400 apps and services have integrated Dai, including wallets,
              DeFi platforms, games and more.
            </span>
          </div>
          <div className="w-full flex flex-col items-center">
            <img className="w-80" src="./images/ecosystem.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main3;
