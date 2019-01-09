import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';



function HeaderContainer() {
    return (
        <div className='HeaderContainer'>

       <HeaderTitle />
       <HeaderContent />
       </div>
    )
}



export default HeaderContainer;