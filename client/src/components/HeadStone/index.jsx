import React from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import "./index.css"
import Papa from "../../assets/Harry-Evertz-III.jpg"
import Mama from "../../assets/Mary-Evertz.jpg"

function HeadStone() {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs="4">
                        <Card>
                            <Card.Title>Mary Gardiner Evertz</Card.Title>
                            {/* <Card.Subtitle>December 25, 1932 to December 5, 2020</Card.Subtitle> */}
                            <Card.Img src={Mama} size = "40px"></Card.Img>
                            <Card.Text>December 25, 1932 to December 5, 2020</Card.Text>
                        </Card>
                    </Col>
                    <Col xs="4"></Col>
                    <Col xs="4">
                        <Card>
                            <Card.Title>Harry Alexander Evertz III</Card.Title>
                            {/* <Card.Subtitle>January 10, 1931 to July 30, 2020</Card.Subtitle> */}
                            <Card.Img src={Papa}></Card.Img>
                            <Card.Text>January 10, 1931 to July 30, 2020</Card.Text>
                        </Card>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default HeadStone;