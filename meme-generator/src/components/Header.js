import React from 'react';

import SiteLogo from './SiteLogo'

function Header() {
    return(
        <header className="site-header">
            <div className="container">
                <SiteLogo />                
                <h1 className="site-title">Meme-Generator</h1>
            </div>
            
        </header>
    )
}

export default Header;