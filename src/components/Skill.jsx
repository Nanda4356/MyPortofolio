export default function Skill() {
    return (
        <div className="hero min-h-screen" id="skills">
            <div className="tools text-center">
                <div className="max-w-md">
                    <div className="text-center mb-40">
                        <p>Skills</p>
                        <h1 className="text-2xl font-bold">Some of My Learn Tools</h1>
                    </div>
                    <div className="hero-content flex-col lg:flex-row">

                        {/* C++ */}
                        <div className="animate-[bounce_5s_ease-in-out_infinite] card hover:bg-black hover:text-white transition   duration-300 ease-in-out hover:-translate-y-1 hover:scale-104 tools bg-base-300 min-w-50 h-40 shadow-md">
                            <div className="card-body items-center text-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} viewBox="0 0 32 32"><path fill="#659ad2" d="M29 10.232a2.4 2.4 0 0 0-.318-1.244a2.45 2.45 0 0 0-.936-.879q-5.194-2.868-10.393-5.733a2.64 2.64 0 0 0-2.763.024c-1.378.779-8.275 4.565-10.331 5.706A2.29 2.29 0 0 0 3 10.231V21.77a2.4 2.4 0 0 0 .3 1.22a2.43 2.43 0 0 0 .954.9c2.056 1.141 8.954 4.927 10.332 5.706a2.64 2.64 0 0 0 2.763.026q5.19-2.871 10.386-5.733a2.44 2.44 0 0 0 .955-.9a2.4 2.4 0 0 0 .3-1.22V10.232"></path><path fill="#00599c" d="M28.549 23.171a2 2 0 0 0 .147-.182a2.4 2.4 0 0 0 .3-1.22V10.232a2.4 2.4 0 0 0-.318-1.244c-.036-.059-.089-.105-.13-.16L16 16Z"></path><path fill="#004482" d="M28.549 23.171L16 16L3.451 23.171a2.4 2.4 0 0 0 .809.72c2.056 1.141 8.954 4.927 10.332 5.706a2.64 2.64 0 0 0 2.763.026q5.19-2.871 10.386-5.733a2.4 2.4 0 0 0 .808-.719"></path><path fill="#fff" d="M19.6 18.02a4.121 4.121 0 1 1-.027-4.087l3.615-2.073A8.309 8.309 0 0 0 7.7 16a8.2 8.2 0 0 0 1.1 4.117a8.319 8.319 0 0 0 14.411-.017z"></path><path fill="#fff" d="M24.076 15.538h-.926v-.921h-.925v.921h-.926v.923h.926v.92h.925v-.92h.926zm3.473 0h-.926v-.921h-.926v.921h-.926v.923h.926v.92h.926v-.92h.926z"></path></svg>
                                </span>
                                <h2 className="card-title text-l font-bold">C++</h2>
                            </div>
                        </div>

                        {/* HTML */}
                        <div className="animate-[bounce_4s_ease-in-out_infinite] card hover:bg-black hover:text-white transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-104 bg-base-300 min-w-50 h-40 shadow-md">
                            <div className="card-body items-center text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} viewBox="0 0 32 32"><path fill="#e44f26" d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30z"></path><path fill="#f1662a" d="m16 27.858l8.17-2.265l1.922-21.532H16z"></path><path fill="#ebebeb" d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004z"></path><path fill="#fff" d="M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83z"></path></svg>
                                <h2 className="card-title text-l font-bold">HTML</h2>
                            </div>
                        </div>

                        {/* CSS */}
                        <div className="animate-[bounce_3s_ease-in-out_infinite] hover:bg-black hover:text-white transition   duration-300 ease-in-out hover:-translate-y-1 hover:scale-104 card bg-base-300 min-w-50 h-40 shadow-md">
                            <div className="card-body items-center text-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} viewBox="0 0 32 32"><path fill="#1572b6" d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30z"></path><path fill="#33a9dc" d="m16 27.858l8.17-2.265l1.922-21.532H16z"></path><path fill="#fff" d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829l-.759 8.518H16z"></path><path fill="#ebebeb" d="m16.019 21.218l-.014.004l-3.442-.93l-.22-2.465H9.24l.433 4.853l6.331 1.758l.015-.004z"></path><path fill="#fff" d="m19.827 16.151l-.372 4.139l-3.447.93v3.216l6.336-1.756l.047-.522l.537-6.007z"></path><path fill="#ebebeb" d="M16.011 6.935v3.091H8.545l-.062-.695l-.141-1.567l-.074-.829zM16 13.191v3.091h-3.399l-.062-.695l-.14-1.567l-.074-.829z"></path></svg>
                                </span>
                                <h2 className="card-title text-l font-bold">CSS</h2>
                            </div>
                        </div>

                        {/* JS */}
                        <div className="animate-[bounce_4s_ease-in-out_infinite] card hover:bg-black hover:text-white transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-104 bg-base-300 min-w-50 h-40 shadow-md">
                            <div className="card-body items-center text-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} viewBox="0 0 32 32"><path fill="#f5de19" d="M2 2h28v28H2z"></path><path d="M20.809 23.875a2.87 2.87 0 0 0 2.6 1.6c1.09 0 1.787-.545 1.787-1.3c0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964c0-1.973 1.5-3.476 3.853-3.476a3.89 3.89 0 0 1 3.742 2.107L25 18.128A1.79 1.79 0 0 0 23.311 17a1.145 1.145 0 0 0-1.259 1.128c0 .789.489 1.109 1.618 1.6l.658.282c2.236.959 3.5 1.936 3.5 4.133c0 2.369-1.861 3.667-4.36 3.667a5.06 5.06 0 0 1-4.795-2.691Zm-9.295.228c.413.733.789 1.353 1.693 1.353c.864 0 1.41-.338 1.41-1.653v-8.947h2.631v8.982c0 2.724-1.6 3.964-3.929 3.964a4.085 4.085 0 0 1-3.947-2.4Z"></path></svg>
                                </span>
                                <h2 className="card-title text-l font-bold">JS</h2>
                            </div>
                        </div>

                        {/* PHP */}
                        <div className="animate-[bounce_5s_ease-in-out_infinite] card hover:bg-black hover:text-white transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-104 bg-base-300 min-w-50 h-40 shadow-md">
                            <div className="card-body items-center text-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} viewBox="0 0 32 32"><defs><radialGradient id="SVG96V4AedI" cx={-16.114} cy={20.532} r={18.384} gradientTransform="translate(26.52 -9.307)" gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#fff"></stop><stop offset={0.5} stopColor="#4c6b96"></stop><stop offset={1} stopColor="#231f20"></stop></radialGradient></defs><ellipse cx={16} cy={16} fill="url(#SVG96V4AedI)" rx={14} ry={7.365}></ellipse><ellipse cx={16} cy={16} fill="#6280b6" rx={13.453} ry={6.818}></ellipse><path fill="#fff" d="m18.725 18.2l.667-3.434a1.75 1.75 0 0 0-.372-1.719a2.93 2.93 0 0 0-2-.525h-1.153l.331-1.7a.22.22 0 0 0-.215-.26h-1.6a.22.22 0 0 0-.215.177l-.709 3.646a2.05 2.05 0 0 0-.477-1.054a2.78 2.78 0 0 0-2.2-.807H7.7a.22.22 0 0 0-.215.177l-1.434 7.38a.22.22 0 0 0 .215.26h1.603a.22.22 0 0 0 .215-.177l.347-1.785h1.2a5.2 5.2 0 0 0 1.568-.2a3.1 3.1 0 0 0 1.15-.689a3.5 3.5 0 0 0 .68-.844l-.287 1.475a.22.22 0 0 0 .215.26h1.6a.22.22 0 0 0 .215-.177l.787-4.051h1.094c.466 0 .6.093.64.133s.1.165.025.569l-.635 3.265a.22.22 0 0 0 .215.26h1.62a.22.22 0 0 0 .207-.18m-7.395-2.834a1.75 1.75 0 0 1-.561 1.092a2.17 2.17 0 0 1-1.315.321h-.712l.515-2.651h.921c.677 0 .949.145 1.059.266a1.18 1.18 0 0 1 .093.972m14.216-2.034a2.78 2.78 0 0 0-2.2-.807h-3.091a.22.22 0 0 0-.215.177l-1.434 7.38a.22.22 0 0 0 .215.26h1.608a.22.22 0 0 0 .215-.177l.347-1.785h1.2a5.2 5.2 0 0 0 1.568-.2a3.1 3.1 0 0 0 1.15-.689a3.43 3.43 0 0 0 1.076-1.927a2.51 2.51 0 0 0-.439-2.232m-1.667 2.034a1.75 1.75 0 0 1-.561 1.092a2.17 2.17 0 0 1-1.318.32h-.71l.515-2.651h.921c.677 0 .949.145 1.059.266a1.18 1.18 0 0 1 .094.973"></path><path fill="#000004" d="M10.178 13.908a1.65 1.65 0 0 1 1.221.338a1.34 1.34 0 0 1 .145 1.161a1.95 1.95 0 0 1-.642 1.223a2.36 2.36 0 0 1-1.448.37h-.978l.6-3.089Zm-3.917 6.216h1.608l.381-1.962h1.377a5 5 0 0 0 1.5-.191a2.84 2.84 0 0 0 1.07-.642a3.2 3.2 0 0 0 1.01-1.808a2.3 2.3 0 0 0-.385-2.044a2.57 2.57 0 0 0-2.035-.732H7.7Zm8.126-9.342h1.6l-.387 1.962h1.421a2.77 2.77 0 0 1 1.85.468a1.55 1.55 0 0 1 .305 1.516l-.667 3.434H16.89l.635-3.265a.89.89 0 0 0-.08-.76a1.12 1.12 0 0 0-.8-.2H15.37l-.822 4.228h-1.6Zm8.34 3.126a1.65 1.65 0 0 1 1.221.338a1.34 1.34 0 0 1 .145 1.161a1.95 1.95 0 0 1-.642 1.223A2.36 2.36 0 0 1 22 17h-.978l.6-3.089Zm-3.917 6.216h1.608l.381-1.962h1.377a5 5 0 0 0 1.5-.191a2.84 2.84 0 0 0 1.07-.642a3.2 3.2 0 0 0 1.01-1.808a2.3 2.3 0 0 0-.385-2.044a2.57 2.57 0 0 0-2.035-.732h-3.092Z"></path></svg>
                                </span>
                                <h2 className="card-title text-l font-bold">PHP</h2>
                            </div>
                        </div>
                        {/* End Card */}
                    </div>
                </div>
            </div>
        </div>
    )
}