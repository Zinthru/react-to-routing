import React from 'react';
import { Link } from 'react-router-dom';

const PeopleCard = ({Name,age,gender,id}) => {
    return (
        <div className ='card'>
            <div className='card-header'>{Name}</div>
            <div className='card-body'>{age}</div>
            <div><p>{gender}</p></div>
            <Link to ={'/people/${id}'} className="btn">Go to wiki...(Does not route!)</Link>
        </div>
    )
}

export default PeopleCard;

// ID wont seperate from string in Link
// Might not be importing