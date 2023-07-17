import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

export const Footer = () => {
  return (
    
    <MDBFooter className='text-center text-white'>
    <footer className="footer bg-dark text-center text-white">
      <Container>
        <MailchimpForm />
        <Row className="align-items-center">
          <Row className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <h1>Sign up for our newsletter</h1>
                  </p>
                </div>

                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example21"
                      className="form-control"
                    />
                    <label className="form-label" for="form5Example21" />
                  </div>
                </div>

                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </Row>

          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="/">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="/">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            
          </Col>
        </Row>
      </Container>
    </footer>
    <MDBContainer className='p-4'></MDBContainer>

    <div className='text-center p-3'>
      © 2023  Copyright:
    </div>
  </MDBFooter>
  );
};
