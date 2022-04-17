import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='service' >
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='text-center'>{name}</Card.Title>
                    <Card.Text>
                        <p>Product Description : {description}</p>
                    </Card.Text>
                    <Card.Text>
                        <p>Price : ${price}</p>
                    </Card.Text>
                    <Button className='Buy-btn' variant="primary">Buy Now</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Service;