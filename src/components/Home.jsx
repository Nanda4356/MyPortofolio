import TextType from '../components/TextType';
import Pict1 from "../assets/images/pict1.png";

export default function Home() {
    return (
        <div>
            <div className="hero bg-white min-h-screen gap-30" id="home">
                <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='relative'>
                <svg className='absolute -bottom-10 -right-10 -z-10' width="450" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#BAE6FF" d="M45.2,-70.3C57.8,-62.3,66.6,-48.4,73.5,-33.5C80.5,-18.6,85.5,-2.8,84.2,12.7C82.9,28.2,75.2,43.4,64.1,54.8C53,66.2,38.4,73.8,23,78.3C7.5,82.8,-8.8,84.3,-23.8,80.3C-38.8,76.3,-52.5,66.8,-64.5,54.8C-76.6,42.9,-86.9,28.4,-89.7,12.6C-92.5,-3.3,-87.7,-20.6,-78.6,-34.1C-69.6,-47.6,-56.4,-57.4,-42.6,-64.9C-28.8,-72.3,-14.4,-77.5,1,-79C16.3,-80.5,32.7,-78.4,45.2,-70.3Z" transform="translate(100 100)" />
                </svg>
                        <img src={Pict1} className='w-200 rounded-full' />
                    </div>
                    <div className='py-6 px-4'>
                        <div className=''>
                            <h1 className="text-5xl font-bold py-2">YO JAN</h1>
                            <p className="text-l badge my-2 badge-info text-white">JUNIOR FULLSTACK DEVELOPER</p><br />
                            <TextType
                                text={["Siswa SMK Negeri 1 Purwosari", "Gantenk Person", "Ngoding Yoman With Me"]}
                                typingSpeed={75}
                                pauseDuration={1500}
                                showCursor={true}
                                cursorCharacter="|"
                                className='font-bold py-2 text-2xl'
                            />
                        </div>
                        <p className='py-4 text-base-500'>Hi, Saya Nanda seorang junior fullstack developer, saya mempunyai keinginan besar menjadi seorang fullstack developer yang andal.Saya juga mempunyai minat besar dalam bidang pengembangan web, pengelolaan serverdan database, serta debugging.</p>
                        <button className='btn btn-info text-white rounded-lg'>Hubungi Saya</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
