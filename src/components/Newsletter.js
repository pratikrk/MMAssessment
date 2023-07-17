
import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp project bg-dark">
        <Row className="align-items-center pt-5">
          <Col className="text-center text-light col-sm-4 mb-4 mb-md-0">
            <h2>How much does it cost and what will I get?</h2>
            <span className="navbar-text justify-content-center">
              <button className="vvd">
                <span>Apply Here</span>
              </button>
            </span>
          </Col>
          <Col className="col-sm-8">
            <h2 className="text-light">
              Joining the course is completely free! Simply register and pass
              the online test and interview
            </h2>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
