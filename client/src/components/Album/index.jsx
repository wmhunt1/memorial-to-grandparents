import React from "react";
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Img1 from "../../assets/album/img1.jpg"
import Img2 from "../../assets/album/img2.jpg"
import Img3 from "../../assets/album/img3.jpeg"
import Img4 from "../../assets/album/img4.jpeg"
import Img5 from "../../assets/album/img5.jpeg"
import Img6 from "../../assets/album/img6.jpg"
function Album() {
    return (
        <div className="carouselPad">
            <Row className="justify-content-center mb-4">
                <Carousel>
                    <Carousel.Item>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Img1} />
                            <Card.Body></Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Img2} />
                            <Card.Body></Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Img3} />
                            <Card.Body></Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Img4} />
                            <Card.Body></Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Img5} />
                            <Card.Body></Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Img6} />
                            <Card.Body></Card.Body>
                        </Card>
                    </Carousel.Item>
                </Carousel>

            </Row>


        </div>
    )
}
export default Album;