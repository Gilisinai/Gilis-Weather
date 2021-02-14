import React from 'react'
import { connect } from 'react-redux'

function SideView({ children, darkMode}) {
    return (
        <div className={`sideview ${darkMode ? 'sideview-dark' : ''}`}>
            {children}
        </div>
    )
}

const mapStateToProps = state => ({
    darkMode: state.ui.darkMode
})

export default connect(mapStateToProps)(SideView)
