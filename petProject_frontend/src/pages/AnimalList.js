import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AnimalList = () => {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        axios.get('/api/animals')
            .then(response => setAnimals(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Animals</h1>
            <ul>
                {animals.map(animal => (
                    <li key={animal.id}>{animal.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default AnimalList;