import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';

function HeaderTitle () {
    return (
        <div>
            <ImageThumbnail />
            <strong>Lambda School</strong>
            <span> @Lambdaschool</span>
            <span> Jan 7</span>
        </div>
    )
}

export default HeaderTitle;