import React from 'react'
import { Card } from 'react-bootstrap';
import image from '../assets/avengers.jpeg' 

const MovieItem = (props) => {
    return (
        <Card className="no-gutters">
            <div className="col-4">
                <Card.Img clasvariant="top" src={image} />
            </div>
            <Card.Body className="col p-0">
                <Card.Title className="mb-0">{props.title}</Card.Title>
                <small>{props.release_date.substring(0,4)}</small>
                <Card.Text>
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
