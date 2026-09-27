import logo from '../../../assets/Dogs/Logo_patitas.png'
import '../../../styles/Dogs/Logo.css'

export default function Logo(){
    return(
        <>
            <a href="#" className='logo'>
                <img src={logo} alt="imagen de logo"/>
            </a>
        </>
    )
}