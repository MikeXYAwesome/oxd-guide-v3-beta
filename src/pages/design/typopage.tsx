import "../../css/typopage.css";
import typoBg from "../../assets/img/typobg.png";

function TypoPage() {
  const fontWeights = [
    { label: "200", weight: 200 },
    { label: "300", weight: 300 },
    { label: "400", weight: 400 },
    { label: "600", weight: 600 },
    { label: "700", weight: 700 },
    { label: "800", weight: 800 },
    { label: "900", weight: 900 },
  ];
  return (
    <>
      <div className="typoPageWarp">
        <div className="blockWrap">
          <div className="leftBlock">
            <img src={typoBg} className="typobg" />
            <h1 className="title2">Font Nunito </h1>
            <div className="typo-detail">
              <p className="mt25 ">
                Nunito is a well balanced sans serif typeface superfamily, with
                2 versions: The project began with Nunito, created by Vernon
                Adams as a rounded terminal sans serif for display typography.
                Jacques Le Bailly extended it to a full set of weights, and an
                accompanying regular non-rounded terminal version, in here we
                use this rounded version, to lend its a much more warm and
                friendly feel compared to the strong and authortative Nunito
                Sans. and its align with the oragehrm logo and UI rounded
                shapes.
              </p>
            </div>
            <div className="typoRowWarp">
              {fontWeights.map((font, index) => (
                <div className="typoRow" key={index}>
                  <p className="typolable">Nunito font Style {font.label}</p>
                  <p
                    className="typotxt"
                    style={{ fontFamily: "Nunito", fontWeight: font.weight }}
                  >
                    The World Most Friendliest HRM System
                  </p>
                </div>
              ))}
            </div>
            <div className="mt100"></div>
            <h2>OXD Font Styles</h2>
            <div className="simplelineW"></div>
            <div className="typoRow">
              <p className="typolable">Default Header</p>
              <p className="typotxt headerDefault">
                The World Most Friendliest HRM System
              </p>
              <div className="showStyles">Font: 16px, Regular, #64728c</div>
            </div>
            <div className="typoRow">
              <p className="typolable">Main Header</p>
              <p className="typotxt headerMain">
                The World Most Friendliest HRM System
              </p>
              <div className="showStyles">Font: 46px, Extra-bold, #38455d</div>
            </div>
            <div className="typoRow">
              <p className="typolable">Main Title</p>
              <p className="typotxt titleMain">
                The World Most Friendliest HRM System
              </p>
              <div className="showStyles">Font: 18px, Bold, #38455d</div>
            </div>
            <div className="typoRow">
              <p className="typolable">Sub Title</p>
              <p className="typotxt titleSub">
                The World Most Friendliest HRM System
              </p>
              <div className="showStyles">Font: 12px, Semi-bold, #929baa</div>
            </div>
            <div className="typoRow">
              <p className="typolable">Card Header</p>
              <p className="typotxt headerCard">
                The World Most Friendliest HRM System
              </p>
              <div className="showStyles">
                Font: 16px, Semi-bold, #64728c or theme-color
              </div>
            </div>
            <div className="typoRow">
              <p className="typolable">Card Sub Header</p>
              <p className="typotxt subHeaderCard">
                The World Most Friendliest HRM System
              </p>
              <div className="showStyles">Font: 14px, Semi-bold, #64728c</div>
            </div>
            <div className="typoRow">
              <p className="typolable">Help Text</p>
              <p className="typotxt helpText">
                The World Most Friendliest HRM System
              </p>
              <div className="showStyles">Font: 12px, Regular, #929baa</div>
            </div>
            <div className="typoRow">
              <p className="typolable">Default Text</p>
              <p className="typotxt textDefault">
                The World Most Friendliest HRM System
              </p>
              <div className="showStyles">Font: 14px, Regular, #64728c</div>
            </div>
            <div className="typoRow">
              <p className="typolable">List Text</p>
              <p className="typotxt textList">
                The World Most Friendliest HRM System
              </p>
              <div className="showStyles">Font: 12px, Semi-bold, #64728c</div>
            </div>
            <div className="typoRow">
              <p className="typolable">OXD Links</p>
              <p className="typotxt oxdLinks">
                The World Most Friendliest HRM System
              </p>
              <div className="showStyles">
                Font: 12px, Semi-bold, primary color or feedback blue color
              </div>
            </div>
            <div className="typoRow">
              <p className="typolable">Paragraph Text</p>
              <p className="typotxt paragraphText">
                Nunito is a well balanced sans serif typeface superfamily, with
                2 versions: The project began with Nunito, created by Vernon
                Adams as a rounded terminal sans serif for display typography.
                Jacques Le Bailly extended it to a full set of weights, and an
                accompanying regular non-rounded terminal version.
              </p>
              <div className="showStyles">
                Font: 12px/14px, Regular, #64728c
              </div>
            </div>
          </div>
          {/* <div className="rightBlock"></div> */}
        </div>
      </div>
    </>
  );
}

export default TypoPage;
