import React from 'react';
import './Header.css';

const Header = () => {
    
    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    const today = new Date();
    
    return (
        <div className="Header__field">
            <div className="Header__date">
                {today.toLocaleDateString(undefined, options)}
            </div>
        </div>
    )
}

export default Header;