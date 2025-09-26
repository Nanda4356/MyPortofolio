import TextType from '../components/TextType';
import Pict1 from "../assets/images/pict1.webp";
import Pict2 from "../assets/images/pict2.webp";
import Pict3 from "../assets/images/pict3.webp";

export default function Home() {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen gap-30" id="home">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card card-sm bg-base-200 max-w-80 shadow m-8 rounded-full">
                        <figure className="hover-gallery rounded-full">
                            <img src={Pict1} className='rounded-full' />
                            <img src={Pict2} className='rounded-full' />
                            <img src={Pict3} className='rounded-full' />
                        </figure>
                    </div>
                    <div className='py-6 px-4'>
                        <div className='font-bold'>
                            <h2 className="text-4xl font-bold">Hello, It's Me</h2>
                            <h1 className="text-8xl font-bold py-2">Nanda</h1>
                            <TextType
                                text={["And Im a Student in SMKN 1 Purwosari", "Gantenk Person", "Ngoding Yoman With Me"]}
                                typingSpeed={75}
                                pauseDuration={1500}
                                showCursor={true}
                                cursorCharacter="|"
                                className='font-bold py-2 text-4xl'
                            />
                        </div>
                        <p className='py-4 text-base-500'>I am Nanda, a student at SMKN 1 Purwosari who wants to continue studying in more depth in the software engineering department.</p>
                        <button className='btn btn-primary rounded-lg'>Hire Me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

