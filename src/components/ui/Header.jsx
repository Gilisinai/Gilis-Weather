import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import homeIcon from '../../assets/icons/home.svg'
import heartIcon from '../../assets/icons/heart.svg'




function Header(props) {


    return (


        <div className="navbar">
            <div className="navbar__menu">
                <div class="navbar__menu-item">
                    <Link to="/">
                        <img className="navbar__menu-item--icon" src={homeIcon} alt="home icon"/>
                    </Link>
                </div>
                <div class="navbar__menu-item">
                    <Link to="/favorites">
                        <img className="navbar__menu-item--icon" src={heartIcon} alt="home icon"/>
                    </Link>
                </div>
            </div>
        </div>




    )
}

export default withRouter(Header)
