import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { changeBackgroundByTemperature } from '../../redux/ui/ui.actions'

function Layout({ children, darkMode, temperature ,changeBackgroundByTemperature }) {
    
    return (
        <>
            <Header />
            <div className={`main-layout ${darkMode ? 'main-layout-dark' : ''} ${temperature}`}>
                {children}

            </div>
        </>
    )
}

const mapStateToProps = state => ({
    darkMode: state.ui.darkMode,
})

export default connect(mapStateToProps)(Layout)
