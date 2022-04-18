import React from 'react';
import { Card } from 'react-bootstrap';
import img from '../../Images/AboutMe/IMG_20211211_163000__02.jpg';

const AboutMe = () => {
    return (
        <div>
            <Card className='w-50 mx-auto' style={{ width: '30rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> Name : Razib Debnath</Card.Title>
                    <Card.Text>
                        <strong>My Goal </strong>:
                        I am the owner as well as the trainer of Thor GYM.Without this i have a long cherished desire to be a full stack web developer.Now, i am taking and participate a course from programming hero which is based on web development.I am fully focused on this course.To rich my goal i need to be focused ,attentive and hardworking.Without hard work it is impossible to achieve something.I will try my best to be a good web developer and won't stop my effort until i reach my goal.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AboutMe;