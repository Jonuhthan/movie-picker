import Link from 'next/link';
import './Header.css';

const Header = () => {
    return (
      <div className='header'>
        <h1 className='logo'>Movie Picker</h1>
        <div className='links'>
          <Link href='/'>Movie Catalog</Link>
          <Link href='/movie'>Pick Movie</Link>
          <Link href='/add'>Add a Movie</Link>
        </div>
      </div>
    );
  };

export default Header;