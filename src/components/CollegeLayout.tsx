import { useState, useEffect } from 'react';

export default function CollageLayout() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <div
        style={{
          position: "relative",
          width: "95%",
          maxWidth: "960px",
          height: "auto",
          margin: "40px auto",
          minHeight: isMobile ? "1150px" : "750px",
          transition: "all 0.3s ease"
        }}
      >
        {/* First row */}
        <div
          style={{
            position: isMobile ? "relative" : "absolute",
            top: isMobile ? "0" : "0",
            left: isMobile ? "0" : "0",
            width: isMobile ? "100%" : "28%",
            height: isMobile ? "250px" : "300px",
            marginBottom: isMobile ? "20px" : "0",
            zIndex: 2,
            overflow: "hidden",
            borderRadius: "12px",
            transition: "all 0.3s ease",
            boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
          }}
        >
          <img
            src="/images.jpg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          />
        </div>

        <div
          style={{
            position: isMobile ? "relative" : "absolute",
            top: isMobile ? "0" : "0",
            left: isMobile ? "0" : "24%",
            width: isMobile ? "100%" : "28%",
            height: isMobile ? "250px" : "300px",
            marginTop: isMobile ? "20px" : "0",
            marginBottom: isMobile ? "20px" : "0",
            zIndex: 1,
            overflow: "hidden",
            borderRadius: "12px",
            transition: "all 0.3s ease",
            boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
          }}
        >
          <img
            src="/images.jpg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          />
        </div>

        {/* Third image in vertical card with yellowish overlay */}
        <div
          style={{
            position: isMobile ? "relative" : "absolute",
            top: isMobile ? "0" : "0",
            left: isMobile ? "0" : "52%",
            width: isMobile ? "100%" : "44%",
            height: isMobile ? "250px" : "300px",
            marginTop: isMobile ? "20px" : "0",
            marginBottom: isMobile ? "20px" : "0",
            zIndex: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            overflow: "hidden",
            borderRadius: "12px",
            transition: "all 0.3s ease",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(255, 250, 205, 0.4)", // Light yellowish overlay
              zIndex: 2,
              mixBlendMode: "multiply",
              borderRadius: "12px",
            }}
          />
          <img
            src="/images.jpg"
            style={{
              width: "85%",
              height: "90%",
              objectFit: "cover",
              borderRadius: "12px",
              transition: "transform 0.3s ease",
              boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          />
        </div>

        {/* Second row diagonal */}
        <div
          style={{
            position: isMobile ? "relative" : "absolute",
            top: isMobile ? "0" : "220px",
            left: isMobile ? "0" : "18%",
            width: isMobile ? "100%" : "28%",
            height: isMobile ? "250px" : "300px",
            marginTop: isMobile ? "20px" : "0",
            marginBottom: isMobile ? "20px" : "0",
            zIndex: 5,
            overflow: "hidden",
            borderRadius: "12px",
            transition: "all 0.3s ease",
            boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
          }}
        >
          <img
            src="/images.jpg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          />
        </div>

        <div
          style={{
            position: isMobile ? "relative" : "absolute",
            top: isMobile ? "0" : "220px",
            left: isMobile ? "0" : "46%",
            width: isMobile ? "100%" : "28%",
            height: isMobile ? "250px" : "300px",
            marginTop: isMobile ? "20px" : "0",
            marginBottom: isMobile ? "20px" : "0",
            zIndex: 3,
            overflow: "hidden",
            borderRadius: "12px",
            transition: "all 0.3s ease",
            boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
          }}
        >
          <img
            src="/images.jpg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          />
        </div>

        <div
          style={{
            position: isMobile ? "relative" : "absolute",
            top: isMobile ? "0" : "220px",
            left: isMobile ? "0" : "74%",
            width: isMobile ? "100%" : "28%",
            height: isMobile ? "250px" : "300px",
            marginTop: isMobile ? "20px" : "0",
            marginBottom: isMobile ? "20px" : "0",
            zIndex: 4,
            overflow: "hidden",
            borderRadius: "12px",
            transition: "all 0.3s ease",
            boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
          }}
        >
          <img
            src="/images.jpg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          />
        </div>

        {/* Overlay cards */}
        <div
          style={{
            position: isMobile ? "relative" : "absolute",
            top: isMobile ? "0" : "250px",
            left: isMobile ? "0" : "0px",
            width: isMobile ? "100%" : "22%",
            height: isMobile ? "auto" : "330px",
            minHeight: isMobile ? "120px" : "auto",
            backgroundColor: "#d0f0c0",
            color: "#000",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "15px",
            textAlign: "center",
            marginTop: isMobile ? "20px" : "0",
            marginBottom: isMobile ? "20px" : "0",
            borderRadius: "12px",
            transition: "all 0.3s ease",
            boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
          }}
        >
          <p style={{ margin: 0, fontSize: "14px", fontWeight: "bold" }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
          </p>
        </div>

        <div
          style={{
            position: isMobile ? "relative" : "absolute",
            top: isMobile ? "0" : "10px",
            left: isMobile ? "0" : "24%",
            width: isMobile ? "100%" : "12%",
            height: isMobile ? "auto" : "40px",
            minHeight: isMobile ? "40px" : "auto",
            backgroundColor: "#d0f0c0",
            color: "#000",
            zIndex: 11,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: isMobile ? "20px" : "0",
            marginBottom: isMobile ? "20px" : "0",
            borderRadius: "8px",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          <p style={{ margin: 0, fontSize: "12px" }}>Lorem Ipsum</p>
        </div>

        <div
          style={{
            position: isMobile ? "relative" : "absolute",
            top: isMobile ? "0" : "90px",
            left: isMobile ? "0" : "92%",
            width: isMobile ? "100%" : "18%",
            height: isMobile ? "auto" : "140px",
            minHeight: isMobile ? "100px" : "auto",
            backgroundColor: "#ff4d4f",
            color: "#fff",
            zIndex: 12,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
            textAlign: "center",
            marginTop: isMobile ? "20px" : "0",
            marginBottom: isMobile ? "20px" : "0",
            borderRadius: "12px",
            transition: "all 0.3s ease",
            boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          }}
        >
          <p style={{ margin: 0, fontWeight: "bold", fontSize: "14px" }}>Our High</p>
          <p style={{ margin: 0, fontWeight: "bold", fontSize: "14px" }}>Quality</p>
          <p style={{ margin: 0, fontWeight: "bold", fontSize: "14px" }}>Production</p>
          <p style={{ margin: 0, fontWeight: "bold", fontSize: "14px" }}>Process</p>
        </div>

        <div
          style={{
            position: isMobile ? "relative" : "absolute",
            top: isMobile ? "0" : "450px",
            left: isMobile ? "0" : "94%",
            width: isMobile ? "100%" : "18%",
            height: isMobile ? "auto" : "120px",
            minHeight: isMobile ? "100px" : "auto",
            backgroundColor: "#d0f0c0",
            color: "#000",
            zIndex: 13,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
            textAlign: "center",
            marginTop: isMobile ? "20px" : "0",
            marginBottom: isMobile ? "20px" : "0",
            borderRadius: "12px",
            transition: "all 0.3s ease",
            boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
          }}
        >
          <p style={{ margin: 0, fontSize: "14px", fontWeight: "bold" }}>
            Lorem ipsum dolor sit amet
          </p>
        </div>
      </div>

      {/* Description text */}
      <p
        style={{
          textAlign: "justify",
          lineHeight: "1.8",
          fontSize: "16px",
          color: "#333",
          margin: "20px auto",
          fontFamily: "cursive",
          wordSpacing: "2px",
        
          padding: "0 20px",
        }}
      >
        Using the best ingredients for every product and ensuring the best quality in every bite.
        Before being served, products go through strict inspection to ensure quality standards.
        Every step in production is carefully monitored to achieve the perfect texture and taste.
      </p>
    </div>
  );
}