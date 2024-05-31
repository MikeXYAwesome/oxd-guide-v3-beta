import OxdCard from "./oxdcard";
import { SidebarData } from "../data/sidebardata";

function CardGrid() {
  return (
    <>
      <div className="gridwrap">
        <div className="gridTitle">
          <div></div>
        </div>
        <div className="cardGrid">
          {SidebarData.map((val, key) => {
            return (
              <OxdCard
                head={val.title}
                imagepath={val.imagepath}
                discrip={val.disp}
                comlink={val.link}
                key={key}
              ></OxdCard>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CardGrid;
