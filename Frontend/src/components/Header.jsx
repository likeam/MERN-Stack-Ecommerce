
import {Link} from 'react-router-dom';
import Logo from '../assets/logo.svg';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className=' fixed top-0 left-0 m-auto max_padd_container w-full bg-white ring-4 ring-slate-900/5 z-10 '>
        <div className=' px-4 flexBetween py-3 max-xs:px-2'> 
            {/* LOGO */}
            <Link> <img src={Logo} alt="" height={66} width={66} /></Link>
        
            {/* Navbar */}
            <Navbar />
            {/* Button */}
            <div>Button</div>
        </div>
    </header>
  )
}

export default Header