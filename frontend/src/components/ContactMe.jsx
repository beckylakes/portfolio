import email from "../images/email_icon.png";
import linkedin from "../images/linkedin_icon.png";
import github from "../images/github_icon.png";

const ContactMe = () => {
  return (
    <div>
      <div id="contact">
        <h1>You Can Reach Me Here.</h1>
        <p>Please click on any icons below to send me an email, view my LinkedIn or connect on GitHub.</p>

        <a href="mailto:beckylake@gmail.com">
          <img className="Social-Icons"
          src={email}
          alt="email_icon"></img>
        </a>
        <a href="https://www.linkedin.com/in/rebecca-lake-15a03915a/" target="_blank">
          <img
            className="Social-Icons"
            src={linkedin}
            alt="linkedin_icon"
          ></img>
        </a>
        <a href="https://github.com/beckylakes" target="_blank">
          <img className="Social-Icons"
          src={github}
          alt="github_icon"></img>
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
