import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology, Computer Science Engineering</h4>
                <h5>Technocrats Institute of Technology and Excellence, Bhopal</h5>
              </div>
              <h3>2022 - 2026</h3>
            </div>
            <p>
              Undergoing a Bachelor of Technology degree in Computer Science Engineering, focusing on building strong fundamentals in software development and emerging technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary Education</h4>
                <h5>Suditi Global Academy, (CBSE)</h5>
              </div>
              <h3>2021-2022</h3>
            </div>
            <p>
              Completed Higher Secondary Education following the CBSE curriculum, demonstrating a strong academic foundation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary Education</h4>
                <h5>UP Board</h5>
              </div>
              <h3>2019-2020</h3>
            </div>
            <p>
              Completed Secondary Education, establishing a strong base in core subjects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
