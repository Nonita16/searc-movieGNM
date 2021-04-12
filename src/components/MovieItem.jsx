import React from 'react'
import { Card } from 'react-bootstrap';
import image from '../assets/avengers.jpeg' 

const MovieItem = (props) => {

    let date = props.release_date ? props.release_date.substring(0,4) : "";
    return (
        <Card className="mb-2">
            <div className="col my-auto">
                <Card.Img clasvariant="top" src={image} />
            </div>
            <Card.Body className="col p-0">
                <Card.Title className="mb-0">{props.title}</Card.Title>
                <small>{date}</small>
                <Card.Text className="mt-1 mb-1">
                   {props.overview}
                </Card.Text>
                <div className="rating">
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span> 
                    &nbsp;&nbsp;&nbsp;{props.vote_count} reviews
                </div>
            </Card.Body>  
        </Card>
    )
}

export default MovieItem
