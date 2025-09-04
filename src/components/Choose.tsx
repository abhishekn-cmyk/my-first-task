// Choose.tsx
import { Container, Row, Col, ProgressBar, Form, Button } from "react-bootstrap";

export default function Choose() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12">
      <Container style={{ fontFamily: "cursive" }}>
        {/* Section: Why Choose Us */}
        <h4 className="mb-3 text-start">Why Choose Us</h4>
        <p
          className="mb-5"
          style={{
          
            textAlign: "justify",
            margin: "0 auto 40px 0",
            lineHeight: "1.8",
          }}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
          tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
          quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
          consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie.
        </p>

        {/* Section: Stats */}
        <Row className="text-center mb-5 justify-content-center">
          {[
            { value: "87%", label: "Satisfied Customers" },
            { value: "93%", label: "Organic Customers" },
            { value: "83%", label: "Skilled Staff" },
          ].map((item, idx) => (
            <Col lg={4} md={6} xs={12} key={idx} className="mb-4">
              <div
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  border: "4px solid blue",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  color: "purple",
                  fontWeight: "bold",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                }}
                className="hover-scale"
              >
                <span style={{ fontSize: "24px" }}>{item.value}</span>
                <small>{item.label}</small>
              </div>
            </Col>
          ))}
        </Row>

        {/* Section: Meet the Team */}
        <h4 className="mb-4 text-start">Meet The Team</h4>
        <Row className="justify-content-start mb-5">
          {["/images.jpg", "/images.jpg", "/images.jpg"].map((img, idx) => (
            <Col lg={4} md={6} xs={12} key={idx} className="mb-4 d-flex justify-content-center">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "260px",
                  height: "300px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                }}
                className="hover-scale"
              >
                <img
                  src={img}
                  alt="team"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                {idx === 1 && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      width: "100%",
                      textAlign: "center",
                      background: "rgba(0,0,0,0.5)",
                      padding: "10px",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Full Name
                    <br /> Lorem Ipsum
                  </div>
                )}
              </div>
            </Col>
          ))}
        </Row>

        {/* Section: Subscribe Card */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "purple",
            color: "white",
            borderRadius: "12px",
            padding: "30px",
            boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
            gap: "20px",
          }}
        >
          {/* Left side */}
          <div style={{ flex: "1", minWidth: "200px" }}>
            <h5>Subscribe to the latest</h5>
            <p style={{ margin: 0 }}>from Naughty Jars</p>
          </div>

          {/* Right side */}
          <div style={{ flex: "2", minWidth: "250px" }}>
            <Form className="d-flex mb-2" style={{ gap: "10px" }}>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                style={{ flex: 1, borderRadius: "6px" }}
              />
              <Button variant="light" style={{ color: "purple", fontWeight: "bold" }}>
                Subscribe
              </Button>
            </Form>
            <ProgressBar
              now={75}
              style={{ height: "4px", backgroundColor: "#f1f1f1" }}
              variant="danger"
            />
          </div>
        </div>
      </Container>

      {/* Smooth hover scaling */}
      <style>
        {`
          .hover-scale:hover {
            transform: scale(1.07);
            box-shadow: 0 8px 16px rgba(0,0,0,0.3);
          }
        `}
      </style>
    </div>
  );
}
