import React from 'react';
import { Link } from 'react-router-dom';

const PeopleCard = ({Name,age,gender,id}) => {
    return (
        <div className ='card'>
            <div className='card-header'>{Name}</div>
            <div className='card-body'>{age}</div>
            <div className='card-body'>{gender}</div>
            <Link to ={'/people/${id}'} className="btn"></Link>
        </div>
    )
}

export default PeopleCard