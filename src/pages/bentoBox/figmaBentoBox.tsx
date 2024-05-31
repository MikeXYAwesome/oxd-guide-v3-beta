import "../../css/bentobox.css";
import { Link } from "react-router-dom";
import Figma3d from "../../assets/img/figma3d.png";

function FigmaBentoBox() {
  return (
    <>
      <div className="bentobox figmabetobox">
        <h1>Figma UI Library</h1>
        <img src={Figma3d} className="figmaLogo" />
        <Link
          to="https://www.figma.com/resource-library/design-basics/"
          className="mainPagelinks"
        >
          Open in Figma
        </Link>
      </div>
    </>
  );
}

export default FigmaBentoBox;
