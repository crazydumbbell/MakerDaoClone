const Footer = () => {
  return (
    <footer className="flex justify-center items-center translate-x-[140px] pb-20">
      <div>
        <div className="flex justify-center gap-28">
          <div className="flex flex-col gap-1">
            <span className="font-bold ">Resources</span>
            <span>Whitepaper</span>
            <span>Brand Assets</span>
            <span>Service Status</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-bold ">Products</span>
            <span>Migrate</span>
            <span>Governance</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-bold ">Developers</span>
            <span>Documentation</span>
            <span>Dai.js</span>
            <span>Developer Guides</span>
            <span>Bug Bounty</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-bold ">Foundation</span>
            <span>Contact</span>
            <span>Job Opportunities</span>
          </div>
          <div className="w-[320px] h-[40px] border flex flex-col justify-center items-center gap-11">
            <input className="" />
            <button className="pr-4 h-[30px] w-[50px]">
              <div className="">
                <svg
                  className="h-[30px] z-index:20  translate-x-[150px] translate-y-5 "
                  width="15"
                  height="13"
                  viewBox="0 0 15 13"
                  fill="none"
                >
                  <path
                    d="M14 6.5L1 6.5"
                    stroke="#989898"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M9 12L13.7929 7.20711C14.1834 6.81658 14.1834 6.18342 13.7929 5.79289L9 1"
                    stroke="#989898"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </button>
            <div className="-translate-x-7">
              <div className="z-index:30 flex justify-center items-center gap-5">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M14.238 15.348c.085.084.085.221 0 .306-.465.462-1.194.687-2.231.687l-.008-.002-.008.002c-1.036 0-1.766-.225-2.231-.688-.085-.084-.085-.221 0-.305.084-.084.222-.084.307 0 .379.377 1.008.561 1.924.561l.008.002.008-.002c.915 0 1.544-.184 1.924-.561.085-.084.223-.084.307 0zm-3.44-2.418c0-.507-.414-.919-.922-.919-.509 0-.923.412-.923.919 0 .506.414.918.923.918.508.001.922-.411.922-.918zm13.202-.93c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-.129c0-.851-.695-1.543-1.55-1.543-.417 0-.795.167-1.074.435-1.056-.695-2.485-1.137-4.066-1.194l.865-2.724 2.343.549-.003.034c0 .696.569 1.262 1.268 1.262.699 0 1.267-.566 1.267-1.262s-.568-1.262-1.267-1.262c-.537 0-.994.335-1.179.804l-2.525-.592c-.11-.027-.223.037-.257.145l-.965 3.038c-1.656.02-3.155.466-4.258 1.181-.277-.255-.644-.415-1.05-.415-.854.001-1.549.693-1.549 1.544 0 .566.311 1.056.768 1.325-.03.164-.05.331-.05.5 0 2.281 2.805 4.137 6.253 4.137s6.253-1.856 6.253-4.137c0-.16-.017-.317-.044-.472.486-.261.82-.766.82-1.353zm-4.872.141c-.509 0-.922.412-.922.919 0 .506.414.918.922.918s.922-.412.922-.918c0-.507-.413-.919-.922-.919z"></path>
                </svg>

                <img className="h-6" src="./images/55.png" />
                <img className="h-6" src="./images/66.png" />
                <img className="h-6" src="./images/77.png" />
                <img className="h-6" src="./images/88.png" />
              </div>
              <div className="flex items-center mt-5">
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                  <path
                    d="M1.36217 7.63636C1.636 10.0144 3.4264 11.9536 5.7843 12.5429C4.77611 11.0874 4.16383 9.40315 4.01221 7.63636H1.36217ZM1.36217 6.36364H4.01048C4.1591 4.60524 4.77213 2.91736 5.78409 1.45716C3.42629 2.04653 1.63599 3.9857 1.36217 6.36364ZM13.2212 6.36364C12.9473 3.98563 11.1569 2.04641 8.79904 1.45711C9.80723 2.9126 10.4195 4.59685 10.5711 6.36364H13.2212ZM13.2212 7.63636H10.5729C10.4242 9.39476 9.8112 11.0826 8.79925 12.5428C11.157 11.9535 12.9473 10.0143 13.2212 7.63636ZM5.33934 6.36364H9.24213C9.07562 4.63707 8.39846 2.99213 7.29165 1.62322C6.18068 2.99704 5.5026 4.64714 5.33934 6.36364ZM9.244 7.63636H5.34121C5.50772 9.36293 6.18488 11.0079 7.29168 12.3768C8.40266 11.003 9.08074 9.35286 9.244 7.63636ZM7.29167 14C3.26459 14 0 10.866 0 7C0 3.13401 3.26459 0 7.29167 0C11.3187 0 14.5833 3.13401 14.5833 7C14.5833 10.866 11.3187 14 7.29167 14Z"
                    fill="#000"
                  ></path>
                </svg>
                <span>English</span>
              </div>
            </div>
          </div>

          <div className="z-index:10 -translate-x-[410px] translate-y-[9px] text-sm text-gray-400">
            Sign up for our newsletter
          </div>
        </div>
      </div>
      <div></div>
    </footer>
  );
};
export default Footer;
