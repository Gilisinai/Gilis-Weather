import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg'
import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg'
import { toggleDarkMode } from '../../redux/ui/ui.actions'
import Toggler from './Toggler'



function Header({darkMode, toggleDarkMode}) {


    return (


        <div className={`navbar ${darkMode ? 'navbar-dark': ''}`}>
            <div className="navbar__menu">
                <div className="navbar__menu-item">
                    <Link to="/">
                        <HomeIcon className="navbar__menuitem--icon" />

                    </Link>
                </div>
                <div className="navbar__menu-item">
                    <Link to="/favorites">
                        <HeartIcon className="navbar__menu-item--icon" />
                    </Link>
                </div>
                <div className="navbar__menu-item" onClick={() =>toggleDarkMode(darkMode)}>

                    <Toggler />

                </div>
            </div>
        </div>




    )
}

const mapStateToProps = state => ({
    darkMode: state.ui.darkMode
})

const mapDispatchToProps = dispatch => ({
    toggleDarkMode: (mode) => dispatch(toggleDarkMode(mode))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))
