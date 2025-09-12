import { FC, useState, useEffect } from "react";
import { Navbar, Nav, Container, Image, Badge } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Search, User, ShoppingBag, X, Menu } from "lucide-react";

import logo from "./download.jpg";

const Header: FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  return (
   <Navbar
  expanded={expanded}
  expand="md"
//   fixed="top"
  className={`${scrolled ? "bg-[#6a1b9a] shadow-lg py-1" : "bg-[#6a1b9a]/95 py-2"} backdrop-blur-md transition-all duration-500 w-full z-50`}
  style={{ fontFamily: "cursive" }}
>
      <Container fluid className="px-2 sm:px-3 md:px-4 lg:px-6 flex items-center justify-between max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="flex items-center mr-4">
          <Image
            src={logo}
            alt="Logo"
            height={40}
            width={50}
            className="drop-shadow-lg cursor-pointer transition-transform duration-500 hover:scale-110 object-contain"
          />
          <span className="hidden sm:inline-block text-white font-bold text-xl ml-2">
            YourBrand
          </span>
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <div className="flex items-center md:order-3">
          {/* Icons visible on mobile */}
          {/* <div className="flex md:hidden items-center space-x-3 mr-2">
            {[
              { Icon: Search, to: "/search" },
              { Icon: User, to: "/account" },
              { Icon: ShoppingBag, to: "/cart"},
            ].map(({ Icon, to, badge }, idx) => (
              <Link
                key={idx}
                to={to}
                className="relative p-1 group rounded-full transition-all duration-300"
              >
                <Icon className="w-5 h-5 cursor-pointer text-white transition-all duration-300 transform group-hover:scale-110 group-hover:text-yellow-400" />
                {badge && (
                  <Badge pill bg="danger" className="position-absolute translate-middle p-0" style={{top: '2px', right: '-2px', fontSize: '0.5rem', width: '14px', height: '14px'}}>
                    {badge}
                  </Badge>
                )}
              </Link>
            ))}
          </div> */}

          <Navbar.Toggle
            aria-controls="main-navbar"
            onClick={() => setExpanded(!expanded)}
            className="border-0 bg-transparent text-white p-1 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-transform duration-300 hover:rotate-12 hover:scale-110"
          >
            {expanded ? <X size={24} /> : <Menu size={24} />}
          </Navbar.Toggle>
        </div>

        {/* Collapsible Menu */}
        {/* Collapsible Menu */}
<Navbar.Collapse
  id="main-navbar"
  className="transition-all duration-300 ease-in-out md:flex-grow-0"
>
  <Nav className="ms-auto flex flex-col md:flex-row items-center md:space-x-2 lg:space-x-6 space-y-3 md:space-y-0 text-white font-medium py-4 md:py-0 text-base md:text-sm lg:text-base">
    
    {/* Nav Links */}
   {[
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/blogs", label: "Blogs" },
].map(({ to, label }, idx) => (
  <Nav.Link
    key={idx}
    as={Link}
    to={to}
    className={`text-white text-center md:text-left hover:text-yellow-400 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white/10 transform hover:-translate-y-0.5 md:w-auto ${location.pathname === to ? "text-yellow-400 font-bold" : ""}`}
    onClick={() => setExpanded(false)}
  >
    {label}
  </Nav.Link>
))}


    {/* Icons inside toggle (mobile dropdown) */}
    <div className="flex md:hidden items-center justify-center space-x-6 mt-4">
      {[
        { Icon: Search, to: "/search" },
        { Icon: User, to: "/account" },
        { Icon: ShoppingBag, to: "/cart", badge: 3 },
      ].map(({ Icon, to, badge }, idx) => (
        <Link
          key={idx}
          to={to}
          className="relative p-2 group rounded-full transition-all duration-300"
          onClick={() => setExpanded(false)}
        >
          <Icon className="w-6 h-6 cursor-pointer text-white transition-all duration-300 transform group-hover:scale-110 group-hover:text-yellow-400" />
          {badge && (
            <Badge
              pill
              bg="danger"
              className="position-absolute translate-middle p-0"
              style={{
                top: "5px",
                right: "2px",
                fontSize: "0.6rem",
                width: "16px",
                height: "16px",
              }}
            >
              {badge}
            </Badge>
          )}
          <div className="absolute inset-0 bg-white/0 rounded-full transition-all duration-300 group-hover:bg-white/15 -z-10 scale-90 group-hover:scale-100"></div>
        </Link>
      ))}
    </div>
  </Nav>
</Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default Header;

