import "../../css/colorpage.css";
import ColorRainbow from "../../assets/img/oxdcolor.png";
import Palette from "../../assets/img/pallet.png";

function ColorPage() {
  return (
    <>
      <div className="colorPageWarp">
        <div className="colorBanner">
          <div className="bannerLeft">
            <h1>OXD Colors Palette</h1>
          </div>
          <img src={ColorRainbow} className="colorbannerimg" />
          <p className="bannerRight">
            Color is a great way to provide status information, give feedback in
            response to user actions, and help people visualize data. Use color
            judiciously for communication. In general, color should be used
            sparingly, like when you need to call attention to important
            information. For example, a red triangle that warns people of a
            critical problem becomes less effective when you use red elsewhere
            in an app for noncritical reasons.
          </p>
          <img src={Palette} className="palettebannerimg" />
        </div>
        <div className="colorSwitchWarp">
          <div className="lableRow">
            <h4>Brand Colors</h4>
          </div>
          <div className="colorSwitchrow">
            <div className="colorSwitch primaryOrange">
              <p className="colorName">Primary Orange</p>
              <p className="colorCode">#ff7b1d</p>
            </div>
            <div className="colorSwitch primaryGreen">
              <p className="colorName">Primary Green</p>
              <p className="colorCode">#17a954</p>
            </div>
          </div>
          <div className="lableRow">
            <h4>Secondary Colors</h4>
          </div>
          <div className="colorSwitchrow">
            <div className="colorSwitch redOrange">
              <p className="colorName">Red Orange</p>
              <p className="colorCode">#fe5000</p>
            </div>
            <div className="colorSwitch yellowOrange">
              <p className="colorName">Yellow Orange</p>
              <p className="colorCode">#ffaa00</p>
            </div>
            <div className="colorSwitch BeachBrown txtColorBlack">
              <p className="colorName">Beach Brown</p>
              <p className="colorCode">#f4eec7</p>
            </div>
            <div className="colorSwitch LemonGreen txtColorBlack">
              <p className="colorName">Lemon Green</p>
              <p className="colorCode">#ccda46</p>
            </div>
            <div className="colorSwitch PearGreen txtColorBlack">
              <p className="colorName">Pear Green</p>
              <p className="colorCode">#76bc21</p>
            </div>
            <div className="colorSwitch leaveGreen">
              <p className="colorName">Emerald Green</p>
              <p className="colorCode">#006837</p>
            </div>
          </div>
          <div className="lableRow">
            <h4>Interface Colors</h4>
          </div>
          <div className="colorSwitchrow">
            <div className="colorSwitch blackGray">
              <p className="colorName">Black Gray</p>
              <p className="colorCode">#011627</p>
            </div>
            <div className="colorSwitch midnightGray">
              <p className="colorName">Midnight Gray</p>
              <p className="colorCode">#38455d</p>
            </div>
            <div className="colorSwitch steelGray">
              <p className="colorName">Steel Gray</p>
              <p className="colorCode">#64728c</p>
            </div>
            <div className="colorSwitch spaceGray ">
              <p className="colorName">Space Gray</p>
              <p className="colorCode">#929baa</p>
            </div>
            <div className="colorSwitch pastelGray txtColorGray">
              <p className="colorName">Pastel Gray</p>
              <p className="colorCode">#cfd3de</p>
            </div>
            <div className="colorSwitch moonLight txtColorGray">
              <p className="colorName">Moon Light</p>
              <p className="colorCode">#e8eaef</p>
            </div>
          </div>
          <div className="rowGap-5"></div>
          <div className="colorSwitchrow">
            <div className="colorSwitch lightGray txtColorGray">
              <p className="colorName">Light Gray</p>
              <p className="colorCode">#f1f2f5</p>
            </div>
            <div className="colorSwitch pastelWhite txtColorGray">
              <p className="colorName">Pastel White</p>
              <p className="colorCode">#f6f5fb</p>
            </div>
            <div className="colorSwitch whiteShadow txtColorGray">
              <p className="colorName">White Shadow</p>
              <p className="colorCode">#fafafc</p>
            </div>
          </div>
          <div className="lableRow">
            <h4>Feedback Colors</h4>
          </div>
          <div className="colorSwitchrow">
            <div className="colorSwitch f-Blue">
              <p className="colorName">Feedback Blue</p>
              <p className="colorCode">#1e6ceb</p>
            </div>
            <div className="colorSwitch f-Red">
              <p className="colorName">Feedback Red</p>
              <p className="colorCode">#eb0910</p>
            </div>
            <div className="colorSwitch f-Yellow">
              <p className="colorName">Feedback Yellow</p>
              <p className="colorCode">#ffa62f</p>
            </div>
            <div className="colorSwitch f-Green">
              <p className="colorName">Feedback Green</p>
              <p className="colorCode">#34bc40</p>
            </div>
          </div>
          <div className="lableRow">
            <h4>Gradient Colors</h4>
          </div>
          <div className="colorSwitchrow">
            <div className="gradientSwitch gradient-OrnageYellow"></div>
            <div className="gradientSwitch gradient-orange"></div>
            <div className="gradientSwitch gradient-yellow"></div>
            <div className="gradientSwitch gradient-green"></div>
            <div className="gradientSwitch gradient-darkgreen"></div>
          </div>
          <div className="lableRow">
            <h4>Accessible Colors (AA)</h4>
          </div>
          <div className="colorSwitchrow">
            <div className="colorSwitch a-primaryOrange">
              <p className="colorName">Rusty Orange</p>
              <p className="colorCode">#d65b04</p>
            </div>
            <div className="colorSwitch a-primaryGreen">
              <p className="colorName">Forest Green</p>
              <p className="colorCode">#114022</p>
            </div>
          </div>
          <div className="rowGap-5"></div>
          <div className="colorSwitchrow">
            <div className="colorSwitch a-BurntOrange">
              <p className="colorName">Burnt Orange</p>
              <p className="colorCode">#ca4d00</p>
            </div>
            <div className="colorSwitch a-yellowOrange">
              <p className="colorName">Golden Yellow</p>
              <p className="colorCode">#cb8e16</p>
            </div>
            <div className="colorSwitch a-BeachBrown">
              <p className="colorName">Sand Storm</p>
              <p className="colorCode">#706d5c</p>
            </div>
            <div className="colorSwitch a-PearGreen">
              <p className="colorName">Dull Green</p>
              <p className="colorCode">#46643b</p>
            </div>
            <div className="colorSwitch a-black">
              <p className="colorName">Just Black</p>
              <p className="colorCode">#000000</p>
            </div>
          </div>
          <div className="lableRow">
            <p>
              We evaluate your color combination using the WCAG 2.0 guidelines
              for contrast accessibility. for make AA color profile use this
              link https://accessible-colors.com/
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ColorPage;
