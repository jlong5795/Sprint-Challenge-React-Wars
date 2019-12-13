import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

const CharacterList = () => {
    const [peopleList, setPeopleList] = useState([]);
    
    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
            .then(response => {
            setPeopleList(response.data.results);
            })//end of .then

            .catch(error => {
                console.log('The data was not returned.', error);
            })
        }, []);//end of useEffect

        return(
           <div className='characters'>
                {peopleList.map(element => {
                    return (
            <CharacterCard key={element.name} name={element.name} height={element.height} mass={element.mass} gender={element.gender} hair_color={element.hair_color} skin_color={element.skin_color} eye_color={element.eye_color} birth_year={element.birth_year}/>)})}
            </div>
        )
}

export default CharacterList;