import "../../css/bentobox.css";
// import { Link } from "react-router-dom";
// import OhrmIcon from "../../assets/img/oxd-icon.png";
// import Spine1 from "../../assets/img/spine4.png";

function MainbentoBox() {
  return (
    <>
      <div className="bentobox mainBentoBox">
        <div>
          <h1>
            Orange <br />
            eXperience <br />
            Design
          </h1>
          <p>
            OXD Design Guide Get in-depth information and design resources for
            designing UI, OXD (Orange eXperience Design) based on the
            user-centered design system, crafted with latest UX research to give
            user-friendly and modern symmetrical looking UI, inline with
            OrangeHRM brand guide.
          </p>
        </div>
        {/* <img src={OhrmIcon} className="orangeIcon" /> */}
        {/* <img src={Spine1} className="mainSpine" /> */}
        {/* <Link to="/aboutpage" className="mainPagelinks">
          Learn More
        </Link> */}
      </div>
    </>
  );
}

export default MainbentoBox;
