import React, { useState,useEffect} from 'react';
import PeopleCard from '../views/PeopleCard';

const People = () => {
    const [People, setPeople] = useState(null);

    useEffect(()=> {
        fetch('https://ghibliapi.herokuapp.com/people')
        .then(res => res.json())
        .then(data => setPeople(data));
    }, []);

    return (
        <>
            {People?.map(person => (
                <PeopleCard key={'peopleCard-id-${people.id}'} title={person.name} description={person.age} gender={person.gender} />
            ))}
        </>
    );
};

export default People;