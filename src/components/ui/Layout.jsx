import React from 'react'
import Header from './Header'


function Layout({children}) {
    return (
        <>
            <Header />
            <div class="main-layout">
                {children}
                
             </div>


        </>
    )
}

export default Layout
