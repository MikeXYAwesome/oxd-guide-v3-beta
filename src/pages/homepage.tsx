// import { Link } from "react-router-dom";
import "../css/homepage.css";
import MainbentoBox from "./bentoBox/bentoMainBox";
import OimBentoBox from "./bentoBox/oimBentoBox";
import FigmaBentoBox from "./bentoBox/figmaBentoBox";
import UxBentoBox from "./bentoBox/bentoboxux";
import DesignBentoBox from "./bentoBox/designbentobox";
import MadebybentoBox from "./bentoBox/madebyBentoBox";
import OXDComBentoBox from "./bentoBox/oxdcomBentoBox";
import IconsBentoBox from "./bentoBox/iconbentobox";
import QaBentoBox from "./bentoBox/qabentobox";
import WidgetsBentoBox from "./bentoBox/oxdWidgetbentobox";
// import SvgExam from "../assets/svgs/exams.svg";
// import SvgBlog from "../assets/svgs/blog.svg";
// import SvgCetificate from "../assets/svgs/achieve.svg";
import SvgOXDlogo from "../assets/img/oxdlogo.png";
import SvgMagnificatGalss from "../assets/img/magnificatglass.png";
import SvgOhrmLogo from "../assets/svgs/OrangeHRM_Logo.svg";
import Svgswingarrow from "../assets/svgs/swingarrow.svg";
import Svgpentool from "../assets/svgs/pen.svg";
import Footer from "../components/footer";

function HomePage() {
  return (
    <>
      <div className="homePageWrap">
        <div className="homeBannerWarp">
          <div className="Ohrmlogo">
            <img src={SvgOhrmLogo} alt="" className="OhrmLogo" />
          </div>
          <div className="oxdlogo">
            <img src={SvgOXDlogo} alt="" className="heroLogo" />
          </div>
          <h1 className="oxdtxt"></h1>
          <h1 className="JamboTitle">
            Experience the Next Gen <br></br>Design System
          </h1>
          <div>
            <img src={Svgswingarrow} alt="" className="Swingarrow" />
          </div>
          <div>
            <img src={Svgpentool} alt="" className="pentool" />
          </div>
        </div>
        <div className="bentoMainwarp">
          <div className="bentowrpa1">
            <MainbentoBox />
            <div className="TitleExplore">
              <div>Explore</div>
              <div>
                <img src={SvgMagnificatGalss} className="MgGlass" />
              </div>
            </div>
          </div>

          <div className="bentosidea">
            <div className="bentowrpa2">
              <OimBentoBox />
            </div>
            <div className="bentowrpa3">
              <FigmaBentoBox />
            </div>
            <div className="bentowrpa4">
              <UxBentoBox />
            </div>
          </div>
          <div className="bentosideb">
            <div className="bentowrpa5">
              <DesignBentoBox />
            </div>
          </div>
          <div className="bentosidebc">
            <div className="bentowrpa6">
              <MadebybentoBox />
            </div>
            <div className="bentowrpa7">
              <OXDComBentoBox />
            </div>
          </div>
          <div className="bentowrpa8">
            <IconsBentoBox />
          </div>
          <div className="bentowrpa9">
            <QaBentoBox />
          </div>
          <div className="bentowrpa10">
            <WidgetsBentoBox />
          </div>
          {/* <div className="OtherLinkCard" data-aos="fade-right">
            <Link to="/exampage" className="Olinks">
              <img src={SvgExam} />
              OXD Exam
            </Link>
            <Link to="/design/colorpage" className="Olinks">
              <img src={SvgCetificate} />
              OXD Certifications
            </Link>
            <Link to="/oxdblogpage" className="Olinks">
              <img src={SvgBlog} />
              OXD Blogs
            </Link>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
