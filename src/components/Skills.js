import "react-multi-carousel/lib/styles.css";
import './css/Skills.css'
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
            <div className="projectFactsWrap ">
          <div className="item wow fadeInUpBig animated bg-transparent" data-number="12" style={{ visibility: 'visible' }}>
            <i className="fa fa-calendar"></i>
            <p>Start Date</p>
            <p className='number'></p>

          </div>
          <div className="item wow fadeInUpBig animated bg-transparent" data-number="55" style={{ visibility: 'visible' }}>
            <i className="fas fa-book-open"></i>
            <p>Mode Of Learning</p>
            <p className='number'></p>

          </div>
          <div className="item wow fadeInUpBig animated bg-transparent" data-number="359" style={{ visibility: 'visible' }}>
            <i className="fas fa-user-graduate"></i>
            <p>For Whome</p>
            <p className='number'></p>

          </div>
          <div className="item wow fadeInUpBig animated bg-transparent" data-number="359" style={{ visibility: 'visible' }}>
            <i className="fas fa-clock"></i>
            <p>Duration</p>
            <p className='number'></p>
          </div>
        </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt=""/>
    </section>
  );
};
