import { Container, Row, Col } from "react-bootstrap";
import insurance from "../assets/img/insurance.png";
import "animate.css";
import "./css/Opportunity.css"

export const Projects = () => {
  return (
    <section className="project" id="project">
      <Container>
        <Row className="align-items-center">
          <Col className="text-center col-sm-4 mb-4 mb-md-0">
            <img src={insurance} alt="Insurance" className="img-fluid" />
          </Col>
          <Col className="col-sm-8">
            <h2>Opportunities in Insurance Sector</h2>
            <p>
              Insurance Sector is the fastest growing industry in India. Still,
              insurance awareness in India is low and penetration is extremely
              low as compared to the Developed Countries. Post Covid, awareness
              and demand for various Life and Medical Insurance products have
              surged.
            </p>
            <br></br>
            <p>
              Banks and Insurance companies have entered into partnerships where
              the banks sell the tied Insurance Company’s products to its
              clients. Many startups, Fintech companies, and Corporate Agents
              have entered this fast-growing space.
            </p>
            <br></br>
            <p>
              Ensueno Learning Insurance Program prepares students for the exact
              skills you need not only to start your career in the BFSI Sector
              but also to excel in it.
            </p>
          </Col>
        </Row>
        <Row>
          <div></div>
          <div></div>
        </Row>
      </Container>
    </section>
  );
};
