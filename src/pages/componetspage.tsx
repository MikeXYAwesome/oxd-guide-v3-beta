import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import "../css/oxdcomponets.css";

function ComPage() {
  return (
    <>
      <div className="comwrap">
        <div className="leftblock">
          <Sidebar></Sidebar>
        </div>
        <div className="rightblock">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}

export default ComPage;
