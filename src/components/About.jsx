import { Link } from "react-router-dom";
import DecayCard from './DecayCard';
import pict from '../assets/images/pict-about.webp';

export default function About() {
    return (
        <div className="hero min-h-screen gap-30 px-4 sm:px-8" id="about">
            <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center lg:items-start text-center lg:text-left">

                {/* TEKS SECTION */}
                <div className="max-w-md mx-auto lg:mx-40 mt-8 lg:mt-0" data-aos="fade-left">
                    <div>
                        <p className="py-2 font-bold text-black text-2xl">Tentang Saya</p>
                    </div>
                    <div>
                        <div class="overflow-x-auto pt-4 w-180">
                            <table class="table mb-4">
                                <tbody>
                                    {/*Row 1 */}
                                    <tr>
                                        <td class="text-xl"><i class="bi bi-person-fill"></i> Nama</td>
                                        <td class="text-xl">: Nanda Rezqy Agyun Putra</td>
                                    </tr>
                                    {/* Row 2 */}
                                    <tr>
                                        <td class="text-xl"><i class="bi bi-geo-alt-fill"></i> Tempat Lahir</td>
                                        <td class="text-xl">: Pasuruan</td>
                                    </tr>
                                    {/* Row 3 */}
                                    <tr>
                                        <td class="text-xl"><i class="bi bi-calendar3"></i> Tanggal Lahir</td>
                                        <td class="text-xl">: 12 Desember 2008</td>
                                    </tr>
                                    {/* row 4 */}
                                    <tr>
                                        <td class="text-xl"><i class="bi bi-building-fill"></i> Sekolah</td>
                                        <td class="text-xl">: SMK Negeri 1 Purwosari</td>
                                    </tr>
                                    {/* row 5   */}
                                    <tr>
                                        <td class="text-xl"><i class="bi bi-envelope"></i> Gmail</td>
                                        <td class="text-xl">: nandareski33@gmail.com</td>
                                    </tr>
                                    {/* row 6  */}
                                    <tr>
                                        <td class="text-xl"><i class="bi bi-person-lines-fill"></i> No Hp</td>
                                        <td class="text-xl">: +62-857-7827-8119</td>
                                    </tr>
                                    {/* row 7  */}
                                    <tr>
                                        <td class="text-xl"><i class="bi bi-github"></i> GitHub</td>
                                        <td class="text-xl">: Nanda4356</td>
                                    </tr>
                                </tbody>
                            </table>
                            <Link
                                className="btn bg-info text-white border-none hover:bg-gray-800 rounded-lg w-full sm:w-auto"
                                to="/more"
                            >
                                Kenali saya lebih dekat
                            </Link>
                        </div>
                    </div>
                </div>

                {/* GAMBAR SECTION */}
                <div className="flex justify-center mb-6 lg:mb-0">
                    <DecayCard width={300} height={400} image={pict}>
                        <span>
                            {/* HTML Logo */}
                            <svg
                                className="absolute animate-[bounce_5s_ease-in-out_infinite] transform-50 z-index-10 left-0 bottom-20 w-[50px] sm:w-[65px]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                            >
                                <path fill="#e44f26" d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30z"></path>
                                <path fill="#f1662a" d="m16 27.858l8.17-2.265l1.922-21.532H16z"></path>
                                <path fill="#ebebeb" d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004z"></path>
                                <path fill="#fff" d="M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83z"></path>
                            </svg>

                            {/* CSS Logo */}
                            <svg
                                className="absolute animate-[bounce_5s_ease-in-out_infinite] transform-50 z-index-10 left-40 sm:left-40 bottom-28 sm:bottom-28 w-[50px] sm:w-[65px]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                            >
                                <path fill="#1572b6" d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30z"></path>
                                <path fill="#33a9dc" d="m16 27.858l8.17-2.265l1.922-21.532H16z"></path>
                                <path fill="#fff" d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829l-.759 8.518H16z"></path>
                                <path fill="#ebebeb" d="m16.019 21.218l-.014.004l-3.442-.93l-.22-2.465H9.24l.433 4.853l6.331 1.758l.015-.004z"></path>
                                <path fill="#fff" d="m19.827 16.151l-.372 4.139l-3.447.93v3.216l6.336-1.756l.047-.522l.537-6.007z"></path>
                                <path fill="#ebebeb" d="M16.011 6.935v3.091H8.545l-.062-.695l-.141-1.567l-.074-.829zM16 13.191v3.091h-3.399l-.062-.695l-.14-1.567l-.074-.829z"></path>
                            </svg>
                        </span>
                    </DecayCard>
                </div>
            </div>
        </div>
    );
}
