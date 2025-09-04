// About.tsx
import { Container, Image } from "react-bootstrap";
import Choose from "./Choose";
import CollageLayout from "./CollegeLayout";


export default function About() {
  return (
    <>
      {/* Green Background Section */}
      <div className="min-h-screen bg-green-200">
        {/* Hero Banner */}
        <Container fluid className="p-0">
          <Image
            src="/images.jpg"
            alt="Banner Hero"
            fluid
            className="w-full h-[550px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[600px] object-cover"
          />
        </Container>

        {/* About Content */}
        <Container
          className="py-12 px-4 sm:px-6 md:px-12 lg:px-20"
          style={{ fontFamily: "cursive" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-left">
            About Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-justify ml-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie.
          </p>
           <br/>
        <CollageLayout/>



        </Container>
      </div>
      
      {/* Sandal Background Section (Choose Component) */}
      <div
        className="min-h-screen"
        style={{ backgroundColor: "#E4C59E", borderRadius: "20px" }}
      >
        <Choose />
      </div>
    </>
  );
}
