import { Container, Row, Col } from "react-bootstrap";
import insurance from "../assets/img/insurance.png";
import "animate.css";
import "./css/Opportunity.css";
import partner1 from "../assets/img/Max_Life_Insurance_logo.webp";
import application from "../assets/img/application.webp";
import application1 from "../assets/img/application1.webp";
import application2 from "../assets/img/application2.webp";
import application3 from "../assets/img/application3.webp";
import partner2 from "../assets/img/BHARTI.webp";
import Card from "./Card";
import SmallCard from "./SmallCard";
import career from "../assets/img/career.webp";
import "./CourseContent"
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
            <br />
            <p>
              Banks and Insurance companies have entered into partnerships where
              the banks sell the tied Insurance Company’s products to its
              clients. Many startups, Fintech companies, and Corporate Agents
              have entered this fast-growing space.
            </p>
            <br />
            <p>
              Ensueno Learning Insurance Program prepares students for the exact
              skills you need not only to start your career in the BFSI Sector
              but also to excel in it.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="align-items-center placement">
          <h2 className="text-center">Our Placement Partner</h2>
          <Col className="col-sm-6 text-center">
            <img
              src={partner1}
              alt="Placement Partner 1"
              className="img-fluid"
            />
          </Col>
          <Col className="col-sm-6 px-2 text-center">
            <img
              src={partner2}
              alt="Placement Partner 2"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="align-items-center placement">
          <h2 className="text-center">Insurance Placement Program</h2>
          <Col className="text-center">
            <p>
              Our unique Self Learning Modules will not only ensure the comfort
              of learning from your home but also the efficiency for maximum
              learning. This course will provide you with the domain knowledge
              and soft skills needed for a successful career in Insurance
              Sector. This is an programme in which you are responsible for self
              learning, upskilling, successfully completing the course, and
              earning your certification.
            </p>
          </Col>
        </Row>
        <div className="pad">
          <Row className="align-items-center placement pl-5">
            <Col>
              <Card
                imageSrc={insurance} // Add image source if available
                heading="Placement Opportunities"
                paragraph="Our students get to interview for full-time and internship positions with our placement partners, serving as a bridge to the professional world. It’s a "
              />
            </Col>
            <Col>
              <Card
                imageSrc={insurance}
                heading="Pathway to Success"
                paragraph="We teach you not only the basic skills required for the job, but also how to build your career faster and get promoted, which no one else will teach you."
              />
            </Col>
            <Col>
              <Card
                imageSrc={insurance}
                heading="Complete Transparency"
                paragraph="You will gain a clear picture of your day-to-day work life, as well as strategies for dealing with it. We only provide the knowledge you need to succeed!"
              />
            </Col>
          </Row>
        </div>
        <Row>
          <span className="navbar-text justify-content-center">
            <button className="vvd">
              <span>Apply Here</span>
            </button>
          </span>
        </Row>
      </Container>
      <Container className="pt-5">
        <Col className="align-items-center pt-5">
          <h2 className="text-center">How can I Join The Insurance Program?</h2>
          <Row className="justify-content-center">
            <SmallCard
              imageSrc={application}
              subheading="Fill the registration form"
            />
            <SmallCard
              imageSrc={application1}
              subheading="Clear an online entrance test & interview"
            />
            <SmallCard
              imageSrc={application2}
              subheading="Get access to the course"
            />
            <SmallCard
              imageSrc={application2}
              subheading="Complete the course & get certificate"
            />
            <SmallCard
              imageSrc={application3}
              subheading="
              Get Placement Opportunity"
            />
          </Row>
          <Row>
            <span className="navbar-text justify-content-center pt-5">
              <button className="vvd">
                <span>register Now</span>
              </button>
            </span>
          </Row>
        </Col>
      </Container>
      <Container className="pt-5">
        <Col className="align-items-center pt-5">
          <h2 className="text-center">
            What other career support will i get ?
          </h2>
          <p className="text-center">
            Improve your career by taking advantage of our strong relationships
            with top-tier banking and finance hiring firms.
          </p>
        </Col>
        <Col className="pt-5 d-flex justify-content-center align-items-center">
          <img alt="" src={career} className="img-fluid" />
        </Col>
      </Container>
    </section>
  );
};
