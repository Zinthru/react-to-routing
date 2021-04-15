import React from 'react';
import { Link } from 'react-router-dom';

const FilmCard = ({title,description,id}) => {
    return (
        <div className ='card'>
            <div className='card-header'>{title}</div>
            <div className='card-body'>{description}</div>
            <Link to ={'/films/${id}'} className="btn">Go to wiki...(Does not route!)</Link>
        </div>
    )
}

export default FilmCard;

// ID wont seperate from string in Link
// Not importing
