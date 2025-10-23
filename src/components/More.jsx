import pict from '../assets/images/pict-about.webp'

export default function About() {
    return (
        <div className='bg-base-200'>
            <h1 className='text-4xl font-bold flex align-center justify-center relative top-40'>LEBIH BANYAK TENTANG SAYA</h1>
            {/* Educational Background */}
            <div className="hero min-h-screen gap-30" id="about">
                <div className='flex mt-20 gap-4 w-250'>
                    <div className="stack absolute top-70 right-40">
                        <div className="card shadow-md bg-base-100">
                            <div className="card-body">
                                <h2 className="card-title">Latar Belakang Pendidikan</h2>
                                <ul>
                                    <li>SD : 2015-2021</li>
                                    <li>SMP : 2021-2024</li>
                                    <li>SD : 2024 - Sekarang</li>
                                </ul>
                                <p className='w-90'></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Personal Profile */}
                <div className='flex mt-20 gap-4 w-250'>
                    <div className="stack absolute top-70 left-40">
                        <div className="card shadow-md bg-base-100">
                            <div className="card-body">
                                <h2 className="card-title">Profile Pribadi</h2>
                                <p className='w-90'>Saya adalah seorang Junior Backend Developer yang berfokus pada pengembangan sistem berbasis web dengan performa tinggi dan keamanan yang baik. Terampil menggunakan Node.js, Laravel, dan MySQL, serta memiliki minat besar pada pengembangan API dan arsitektur server.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background & Motivation */}
                <div className='flex mt-20 gap-4 w-250'>
                    <div className="stack absolute top-130 left-20">
                        <div className="card shadow-md bg-base-100">
                            <div className="card-body">
                                <h2 className="card-title">Latar Belakang dan Motivasi</h2>
                                <p className='w-90'>Dengan latar belakang pendidikan Rekayasa Perangkat Lunak, saya terbiasa mengerjakan berbagai proyek yang membutuhkan pemikiran logis, kreativitas, dan kerja sama tim. Motivasi utama saya adalah menggunakan keterampilan ini sebagai fondasi untuk berkontribusi bagi industri dan komunitas.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Goals & Aspirations */}
                <div className='flex mt-20 gap-4 w-250'>
                    <div className="stack absolute top-130 right-20">
                        <div className="card shadow-md bg-base-100">
                            <div className="card-body">
                                <h2 className="card-title">Tujuan & Aspirasi</h2>
                                <p className='w-90'>Tujuan saya adalah menjadi seorang profesional yang kompeten di bidang pengembangan aplikasi, yang mampu menghasilkan karya yang inovatif dan berkualitas tinggi. Saya percaya bahwa upaya dan dedikasi yang konsisten akan membawa saya lebih dekat untuk mencapai impian saya.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-content lg:flex-row-reverse">
                    <div className="max-w-md mx-40" data-aos="fade-left">
                        <img src={pict} className='relative top-20' />
                        <span>
                            {/* HTML */}
                            <svg className='absolute animate-[bounce_5s_ease-in-out_infinite] transform-50 z-index-10 left-0 bottom-55' xmlns="http://www.w3.org/2000/svg" width={80} height={80} viewBox="0 0 32 32"><path fill="#e44f26" d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30z"></path><path fill="#f1662a" d="m16 27.858l8.17-2.265l1.922-21.532H16z"></path><path fill="#ebebeb" d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004z"></path><path fill="#fff" d="M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83z"></path></svg>

                            {/* CSS */}
                            <span>
                                <svg className='absolute animate-[bounce_5s_ease-in-out_infinite] transform-50 z-index-10 left-80 bottom-55' xmlns="http://www.w3.org/2000/svg" width={80} height={80} viewBox="0 0 32 32"><path fill="#1572b6" d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30z"></path><path fill="#33a9dc" d="m16 27.858l8.17-2.265l1.922-21.532H16z"></path><path fill="#fff" d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829l-.759 8.518H16z"></path><path fill="#ebebeb" d="m16.019 21.218l-.014.004l-3.442-.93l-.22-2.465H9.24l.433 4.853l6.331 1.758l.015-.004z"></path><path fill="#fff" d="m19.827 16.151l-.372 4.139l-3.447.93v3.216l6.336-1.756l.047-.522l.537-6.007z"></path><path fill="#ebebeb" d="M16.011 6.935v3.091H8.545l-.062-.695l-.141-1.567l-.074-.829zM16 13.191v3.091h-3.399l-.062-.695l-.14-1.567l-.074-.829z"></path></svg>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}