import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'

function Layout({ children, darkMode }) {
    return (
        <>
            <Header />
            <div className={`main-layout ${darkMode ? 'main-layout-dark' : ''}`}>
                {children}

            </div>
        </>
    )
}

const mapStateToProps = state => ({
    darkMode: state.ui.darkMode
})

export default connect(mapStateToProps)(Layout)
