import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>GRG India</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built and maintained scalable SaaS solutions with React.js,
              Laravel, CI4, MySQL, MongoDB, and AWS. Implemented RESTful
              APIs, advanced Laravel libraries, and Amazon SQS to improve
              response times and reliability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Bynaric Services Pvt Ltd.</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developing scalable web applications with React.js, Next.js,
              Node.js, Laravel, MySQL, PostgreSQL, and Redis. Designing
              secure REST APIs, optimizing databases, and integrating
              Next.js as an independent microservice for better scalability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
