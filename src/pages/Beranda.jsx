import Navbar from '../components/Navbar'
import About from '../components/About';
import Home from '../components/Home';
import Skill from '../components/Skill';
import Footer from '../components/Footer';
import Project from '../components/Project'

export default function Beranda() {
    return (
        <div className='font-Inter'>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"></link>
            <Navbar></Navbar>
            <Home />
            <About />
            <Skill />
            <Project />
            <Footer />
        </div>
    )
}