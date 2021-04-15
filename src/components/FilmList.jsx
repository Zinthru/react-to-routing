import React, { useState,useEffect} from 'react';
import FilmCard from './FilmCard';

const Films = () => {
    const [films, setFilms] = useState(null);

    useEffect(()=> {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(data => setFilms(data));
    }, []);

    return (
        <>
            {films?.map(film => (
                <FilmCard key={'peopleCard-id-${people.id}'} title={film.title} description={film.description} />
            ))}
        </>
    );
};

export default Films;