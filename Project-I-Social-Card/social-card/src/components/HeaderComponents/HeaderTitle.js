import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import moment from 'moment';

function HeaderTitle () {
    return (
        <div>
        <ImageThumbnail />
            <strong>Lambda School</strong>
            <span> @Lambdaschool</span>
            {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
    )
}

export default HeaderTitle;