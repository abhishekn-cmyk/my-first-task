import { Container, Row, Col, Button, Carousel, Image } from "react-bootstrap";
import Footer from "./Footer";

const dummyImages = ["/images.jpg", "/images.jpg", "/images.jpg"];

const reviews = [
  {
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    name: "John Doe",
  },
  {
    text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
    name: "Jane Smith",
  },
  {
    text: "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    name: "Alice Johnson",
  },
];

export default function Shop() {
  return (
    <>
    <div className="bg-green-200 min-h-screen pt-20 pb-20" style={{fontFamily:"cursive"}}>
      <Container>
        {/* Header Section */}
        <Row className="justify-content-start mb-12">
          <Col lg={8} className="px-4">
            <h4 className="text-3xl md:text-4xl mb-6 text-green-900 font-bold">
              Shop Online
            </h4>
            <p className="text-base md:text-lg leading-relaxed text-green-900 text-justify">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </p>
          </Col>
        </Row>

        {/* Image Grid Section */}
        <Row className="justify-content-center g-4 mb-12">
          {dummyImages.map((img, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="d-flex flex-column align-items-center">
              <div className="p-3 flex flex-col items-center w-100 transition-transform duration-500 ease-in-out hover:scale-105">
                <div
                  className="mb-3 w-full"
                  style={{
                    paddingBottom: "100%",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={img}
                    alt={`Product ${index + 1}`}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out"
                  />
                </div>
                <Button
                  className="px-4 py-2 text-lg"
                  style={{
                    backgroundColor: "#FFD700",
                    border: "none",
                    borderRadius: "8px",
                    color: "#000",
                    fontWeight: "normal",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FFC107")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFD700")}
                >
                  Shop Now
                </Button>
              </div>
            </Col>
          ))}
        </Row>

        {/* Behind the Scenes Section */}
        <Row className="justify-content-start mb-8">
          <Col lg={8} className="px-4">
            <h4 className="text-3xl md:text-4xl mb-6 text-green-900 font-bold">Behind the Scenes</h4>
            <p className="text-base md:text-lg leading-relaxed text-green-900 text-left">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
              autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie.
            </p>
          </Col>
        </Row>

        {/* Single Image Section */}
        <Row className="justify-content-center mb-12">
          <Col xs={12} md={10} className="d-flex justify-content-center">
            <div className="w-full">
              <img
                src="/images.jpg"
                alt="Behind the Scenes"
                className="w-full object-cover rounded-xl"
                style={{
                  maxHeight: "300px",
                  minHeight: "200px",
                  width: "100%",
                  transition: "all 0.5s ease-in-out",
                }}
              />
            </div>
          </Col>
        </Row>

        {/* Reviews Carousel */}
        <Row className="justify-content-start mt-12">
          <Col xs={12} md={8}>
            <h4 className="text-3xl md:text-4xl mb-6 text-green-900 font-bold">Reviews</h4>

            <Carousel
              fade
              controls={false}   // No arrows
              indicators={true}  // Three lines below
              interval={null}    // Manual sliding
              className="shadow-none"
            >
              {reviews.map((review, index) => (
                <Carousel.Item key={index}>
                  <div className="p-6 md:p-8 pl-8 md:pl-12 flex flex-col justify-between min-h-[220px] bg-transparent rounded-xl">
                    
                    {/* Review Text with Large Purple Quotes */}
                    <p className="text-green-900 text-justify relative text-base md:text-lg leading-relaxed">
                      <span
                        className="absolute text-purple-700 font-bold"
                        style={{
                          fontSize: "3.5rem",
                          lineHeight: "0.5",
                          left: "-1.5rem",
                          top: "-0.5rem",
                        }}
                      >
                        "
                      </span>
                      <span className="ml-14">{review.text}</span>
                      <span
                        className="absolute text-purple-700 font-bold"
                        style={{
                          fontSize: "3.5rem",
                          lineHeight: "0.5",
                          right: "-1.5rem",
                          bottom: "-0.5rem",
                        }}
                      >
                        "
                      </span>
                    </p>

                    {/* Reviewer Name aligned right */}
                    <p className="text-green-900 font-bold text-right mt-4 md:mt-6">
                      - {review.name}
                    </p>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>

        {/* Footer */}
       
      </Container>
      
    </div>
    
     </>
  );
}

