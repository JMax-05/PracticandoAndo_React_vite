import Logo from '../features/dogs/Navbar/Logo.tsx'
import Navbar from '../features/dogs/Navbar/Navbar.tsx'
import Hero from '../features/dogs/Hero/Hero.tsx'
import '../styles/Dogs.css'

function Dogs() {
  return (
    <>
      <header className='header_container'>
        <Logo></Logo>
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
    </>
  );
}

export default Dogs;