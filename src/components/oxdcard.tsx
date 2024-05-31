import { NavLink } from "react-router-dom";
import "../css/card.css";

interface Props {
  head: string;
  discrip: string;
  imagepath: string;
  comlink: string;
}

function OxdCard({ head, imagepath, discrip, comlink }: Props) {
  return (
    <>
      <div className="oxdCard">
        <div className="oxdCardHead">{head}</div>
        <div className="oxdCardImg">
          <NavLink to={comlink}>
            {imagepath === "" ? (
              <div className="notFoundCom">
                <p> Not found </p>
              </div>
            ) : (
              <div className="notFoundCom">
                <img src={imagepath} alt="" className="cardDefultimg" />
              </div>
            )}
          </NavLink>
        </div>
        <div className="oxdCardDiscrip">
          <p>{discrip}</p>
        </div>
      </div>
    </>
  );
}

export default OxdCard;
