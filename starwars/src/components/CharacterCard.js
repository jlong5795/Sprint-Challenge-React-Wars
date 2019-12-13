import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';


const CharacterCard = props => (

    <div className='character-card'>
        <h2>{props.name}</h2>
        <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>Toggle</Button>
        <UncontrolledCollapse toggler="#toggler"> 
        <Card>
            <CardBody className='card-body'>
            <p>Year of Birth: {props.birth_year}</p>
            <p>Height: {props.height}cm</p>
            <p>Mass: {props.mass}kg</p>
            <p>Gender: {props.gender}</p>
            <p>Hair Color: {props.hair_color}</p>
            <p>Skin Color: {props.skin_color}</p>
            <p>Eye Color: {props.eye_color}</p>
            
            </CardBody>
        </Card>
        </UncontrolledCollapse>
    </div>
);

export default CharacterCard;