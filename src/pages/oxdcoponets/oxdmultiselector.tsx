import SvgOXDError from "../../assets/svgs/oxd-error.svg";
import SvgCodeIcon from "../../assets/svgs/codeIcon.svg";
import "../../css/componetspage.css";
import "../../css/common.css";

function OxdMultiselector() {
  return (
    <>
      <div className="ComPageWarp">
        <div className="ComTitleRow">
          <h4>Multiselector</h4>
          <div className="comName">
            <code>
              {"</"} OxdMultiselector {">"}{" "}
            </code>
          </div>
        </div>
        <div className="ComTitleRow bodernone">
          <h4>Variants</h4>
        </div>
        <div className="variantsWarp">
          <div className="VBox">
            <p className="Vtitle">Active</p>
            <img src="/img/comsvg/ms01.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">With Pills</p>
            <img src="/img/comsvg/ms02.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>

          <div className="VBox">
            <p className="Vtitle">Focus</p>
            <img src="/img/comsvg/ms03.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">ReadOnly</p>
            <img src="/img/comsvg/ms04.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Multiselect with ReadOnly Pils</p>
            <img src="/img/comsvg/ms05.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Error Value</p>
            <img src="/img/comsvg/ms06.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Dropdown Version</p>
            <img src="/img/comsvg/ms07.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
          <div className="VBox">
            <p className="Vtitle">Auto Generated</p>
            <img src="/img/comsvg/ms08.svg" className="Vimg" />
            <button className="codebt">
              <img src={SvgCodeIcon} />
            </button>
            <div className="StyleSnipit">Code</div>
          </div>
        </div>

        <div className="ComTitleRow">
          <h4>Styles</h4>
          <div>
            <button className="getCodeButton" id="openModal">
              Get The Css
            </button>
          </div>
        </div>

        <div className="ComTitleRow bodernone">
          <h4>Theme Support</h4>
          <div>
            <div className="CorrctTab">
              No
              <div className="IconSizeM">
                <img src={SvgOXDError}></img>
              </div>
            </div>
          </div>
        </div>

        <div className="ComTitleRow ">
          <h4>Behaviours and Rules</h4>
        </div>
        <div className="listViewWrap">
          <ul>
            <li>
              by default drawer show 6 items at once other can be scrollable.
            </li>
            <li>Type to search will show max 6 suggestions at onces</li>
            <li>
              Dropdown Version recommended to use items or options less than 25
            </li>
            <li>more that 25 items better use type to search version</li>
            <li>
              It Doesn't matter which version always should able to access the
              data or options.
            </li>
          </ul>
        </div>
        <div className="ComTitleRow ">
          <h4>Spacing & Alignments</h4>
        </div>
        <div className="variantsWarp">
          <div className="VBox">
            <p className="Vtitle">Multiselector Gaps</p>
            <img src="/img/compng/msgap1.png" className="Vimg scale3X" />
          </div>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default OxdMultiselector;
