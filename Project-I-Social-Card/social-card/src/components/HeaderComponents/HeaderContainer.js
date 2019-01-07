import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';


function HeaderContainer() {
    return (
        <div className='HeaderContainer'>
       <ImageThumbnail />
       <HeaderTitle />
       <HeaderContent />
       </div>
    )
}



export default HeaderContainer;