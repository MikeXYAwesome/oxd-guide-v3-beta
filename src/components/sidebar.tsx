import { useState } from "react";
import { NavLink } from "react-router-dom";
import { SidebarData } from "../data/sidebardata";
import "../css/sidenav.css";

function Sidebar() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter sidebar data based on the search query
  const filteredSidebarData = SidebarData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="SideNav">
        <h1 className="navTitle">Components</h1>
        {/* Search input */}
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="ComSearchInput"
        />
        <div className="topFade"></div>

        <ul className="list-group">
          {filteredSidebarData
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((val, key) => {
              return (
                <NavLink
                  to={val.link}
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#fff",
                          background: "#000",
                        }
                      : { color: "#545e6f" }
                  }
                  key={key}
                >
                  <li onClick={() => {}}>{val.title}</li>
                </NavLink>
              );
            })}
        </ul>
        <div className="bottomFade"></div>
      </div>
    </>
  );
}
export default Sidebar;
