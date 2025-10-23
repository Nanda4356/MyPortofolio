import Logo from '../assets/images/logo.png'

export default function Navbar() {
    return (
        <div class="navbar bg-white h-20 pt-15 pl-25">
            <a href="#"><img src={Logo} alt="logo" className='w-50'/></a>
        </div>
    )
}