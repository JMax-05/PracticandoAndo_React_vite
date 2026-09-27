import user from '../../../assets/Dogs/icons/user_icon.svg'
import '../../../styles/Dogs/Navbar.css'

function Navbar(){
    return (
        <>
            <div className='Navbar_container'>
                <nav className='Navbar'>
                    <a href="#">Dueños</a>
                    <a href="#">Adoptame</a>
                    <a href="#">Historias</a>
                    <a href="#">Nosotrosciones</a>
                    <a href="#">Contacto</a>
                </nav>
                <div className='Nav_actions'>
                    <button className='btn_donar'>Donar</button>
                    <a href='#'>
                        <img src={user} alt="user_icon" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar;