const Header =()=>{
    return(<div className="w-full p-20">
    <div className="flex justify-between  ">
      <div className="">
        <svg width="38" height="20" viewBox="0 0 38 20" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.89486 4.10903V19.0599H0V1.69174C0 0.298924 1.59119 -0.495032 2.70406 0.342453L16.4546 10.6903C16.8786 11.0094 17.1279 11.5091 17.1279 12.0396V19.0599H14.2331V12.6415L2.89486 4.10903Z"
            fill="#333333"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34.5319 4.10903V19.0599H37.4268V1.69174C37.4268 0.298924 35.8356 -0.495032 34.7227 0.342453L20.9721 10.6903C20.5482 11.0094 20.2988 11.5091 20.2988 12.0396V19.0599H23.1937V12.6415L34.5319 4.10903Z"
            fill="#333333"
          ></path>
        </svg>
      </div>
      <div className="flex gap gap-10">
        <div className="text-xl p-25">Developers</div>
        <div className="text-xl">Learn</div>
        <div className="text-xl">Foundation</div>
        <div className="text-xl">Community</div>
        <div className="text-xl">Vote</div>
      </div>
    </div>
  </div>)
} 
export default Header;