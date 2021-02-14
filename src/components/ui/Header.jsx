import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import  { ReactComponent as HomeIcon } from '../../assets/icons/home.svg'
import  { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg'
import Toggler from './Toggler'



function Header() {


    return (


        <div className="navbar">
            <div className="navbar__menu">
                <div className="navbar__menu-item">
                    <Link to="/">
                        <HomeIcon className="navbar__menuitem--icon"/>
                        
                    </Link>
                </div>
                <div className="navbar__menu-item">
                    <Link to="/favorites">
                        <HeartIcon className="navbar__menu-item--icon" />
                    </Link>
                </div>
                <div className="navbar__menu-item">
                    
                        <Toggler />
                    
                </div>
            </div>
        </div>




    )
}

export default withRouter(Header)
