import "../../css/bentobox.css";
import { Link } from "react-router-dom";
import WidgetsMan from "../../assets/img/WidgetsMan.png";

function WidgetsBentoBox() {
  return (
    <>
      <div className="bentobox widgetsbentowrap">
        <h1> OXD Widgets</h1>
        <p></p>
        <img src={WidgetsMan} className="WidgetsMan" />
        <Link to="/widgetspage" className="mainPagelinks">
          See The Magic
        </Link>
      </div>
    </>
  );
}

export default WidgetsBentoBox;
