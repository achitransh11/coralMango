import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../Context/UserContext';
import './nav.scss';

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>

      <div className='top'>
        <div className='topLeft'>
          <Link className="linkTop" to="/" style={{ textDecoration: "none" }}>
            <img
              className='coral-logo'
              src='https://www.coralmango.com/_next/image?url=%2Fimages%2Flogo-white-small.png&w=32&q=75'
              alt='CoralMango Solutions'
            />
          </Link>
        </div>

        <div className='topRight'>
          <ul className='top-list'>
            <li className='topListItem'><Link className="linkTop" to="/list" style={{ textDecoration: "none" }}>List</Link></li>
            <li className='topListItem'><Link className="linkTop" to="/card" style={{ textDecoration: "none" }}>Card</Link></li>
            <li className='topListItem'>
              {user && <Link className="linkTop" to="/login" style={{ textDecoration: "none" }} onClick={() => setUser(false)}>Sign Out</Link>}</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavBar