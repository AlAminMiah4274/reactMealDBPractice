import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';

const Meal = ({ meal }) => {
    const { strMeal, idMeal } = meal;

    const navigate = useNavigate();
    const btnHandler = () => {
        navigate('/home');
    }
    return (
        <Container>
            <Row>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{strMeal}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Link to={`/mealdb/${idMeal}`}>Meal</Link>
                            <Link to={`/mealdb/${idMeal}`}>
                                <Button variant="primary">Go somewhere</Button>
                            </Link>
                            <Button onClick={btnHandler} variant="primary">Go</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Meal;