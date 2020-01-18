import React from 'react';
import {Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../assets/crown.svg';

import './header.style.scss';

const Header = ({currentUser}) =>(
    <div className='header'>
        <Link  className='logo-container' to='/' >
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop' >SHOP</Link>
            <Link className='option' to='/shop' >CONTACT</Link>
            {
                currentUser ?(
                    <div >
                        <Link className='option' to='/' >Sign as {currentUser.displayName.toUpperCase()}</Link>
                        <Link className='option' to='/' onClick={()=>auth.signOut()}>SIGN OUT</Link>
                    </div>
                )
                :(
                    <Link className='option' to='/signin'>SIGN IN</Link>
                )
            }
        </div>
    </div>
)
export default Header;