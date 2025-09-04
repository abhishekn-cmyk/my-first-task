import type { FC } from "react";
import { Container } from "react-bootstrap";

const Images: FC = () => {
  return (
    <Container fluid className="p-0 relative">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden">
        {/* Hero Image */}
        <img
          src="/images.jpg" // Make sure this image is in /public
          alt="Hero Banner"
          className="
            w-full
            h-[520px] sm:h-[280px] md:h-[360px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px]
            object-cover
            transition-transform duration-700 ease-in-out
            hover:scale-105
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/20 transition-opacity duration-500"></div>

        {/* Optional Hero Text */}
       
      </div>
    </Container>
  );
};

export default Images;

