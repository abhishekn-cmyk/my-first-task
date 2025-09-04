import { Container, Row, Col, Image } from "react-bootstrap";

export default function Screen() {
  return (
    <div style={{ backgroundColor: "#f8f6f2", minHeight: "100vh", padding: "40px" }}>
      {/* Heading */}
      

      {/* Image Grid */}
      <Container fluid>
        <Row>
          <Col md={4} style={{ marginBottom: "20px" }}>
            <Image src="https://via.placeholder.com/300" fluid />
            <div style={{ backgroundColor: "#fff2d9", padding: "20px", marginTop: "-30px" }}>
              <h5>Lorem Ipsum</h5>
            </div>
          </Col>

          <Col md={4} style={{ marginBottom: "20px" }}>
            <Image src="https://via.placeholder.com/300" fluid />
            <div style={{ backgroundColor: "#e5d7c3", padding: "20px", marginTop: "-30px" }}>
              <h5>Our High Quality Production Process</h5>
            </div>
          </Col>

          <Col md={4} style={{ marginBottom: "20px" }}>
            <Image src="https://via.placeholder.com/300" fluid />
            <div style={{ backgroundColor: "#fbe9c7", padding: "20px", marginTop: "-30px" }}>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={4} style={{ marginBottom: "20px" }}>
            <Image src="https://via.placeholder.com/300" fluid />
            <div style={{ backgroundColor: "#fff2d9", padding: "20px", marginTop: "-30px" }}>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed diam nonummy nibh.
              </p>
            </div>
          </Col>

          <Col md={4} style={{ marginBottom: "20px" }}>
            <Image src="https://via.placeholder.com/300" fluid />
          </Col>

          <Col md={4} style={{ marginBottom: "20px" }}>
            <Image src="https://via.placeholder.com/300" fluid />
          </Col>
        </Row>
      </Container>

      {/* Footer Text */}
      <div style={{ marginTop: "40px", textAlign: "center", color: "#444", fontSize: "15px" }}>
        <p>
          Using the best ingredients for every product and ensuring the best quality in every bite.
          Before being served, products go through strict inspection to ensure quality standards.
          Every step in production is carefully monitored to achieve the perfect texture and taste.
        </p>
      </div>
    </div>
  );
}
