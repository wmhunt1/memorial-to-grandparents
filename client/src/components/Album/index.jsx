import React from "react";
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Test from "../../assets/IMG_1260.jpg"
import Test2 from "../../assets/Resized_597680540.jpeg"
function Album() {
    return (
        <div className="carouselPad">

            <Row className="justify-content-center mb-4">
                <Carousel>
                    <Carousel.Item>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Test} />
                            <Card.Body></Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Test2} />
                        </Card>
                    </Carousel.Item>
                </Carousel>

            </Row>


        </div>
    )
}
export default Album;