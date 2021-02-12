import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'




function Header(props) {


    return (


        <div className="navbar">
            <div className="navbar__logo">
                <img src="" alt="logo"/>
            </div>
            <div className="container navbar__menu">
                <div class="navbar__menu-item">
                    <Link to="/">
                        home
                    </Link>
                </div>
                <div class="navbar__menu-item">
                    <Link to="/favorites">
                        favorites
                    </Link>
                </div>
            </div>
        </div>




    )
}

export default withRouter(Header)
