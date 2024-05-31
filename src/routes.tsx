import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./pages/homepage";
import AboutPage from "./pages/aboutpage";
import DesignPage from "./pages/designpage";
import ComPage from "./pages/componetspage";
import QaPage from "./pages/qaguidepage";
import OimPage from "./pages/oimpage";
import UxPage from "./pages/uxpage";
import GuidePage from "./pages/guidepage";
import MadeByPage from "./pages/madebypage";
import IconPage from "./pages/design/iconpage";
import ColorPage from "./pages/design/colorpage";
import TypoPage from "./pages/design/typopage";
import WidgetsPage from "./pages/widgetspage";
import ExamPage from "./pages/exampage";
import BlogPage from "./pages/oxdblogpage";
import ErrorPage from "./pages/errorpage";
import OxdButtons from "./pages/oxdcoponets/oxdbuttons";
import OxdDropDown from "./pages/oxdcoponets/oxddropdowns";
import OxdTextBox from "./pages/oxdcoponets/oxdtextbox";
import CardGrid from "./components/cardgrid";
import SpacingPage from "./pages/design/spacingpage";
import FormDesignPage from "./pages/design/formdesignpage";
import OxdRadio from "./pages/oxdcoponets/oxdradio";
import OxdSwitch from "./pages/oxdcoponets/oxdswitch";
import OxdComError from "./pages/oxdcoponets/comerror";
import OxdAlerts from "./pages/oxdcoponets/oxdalerts";
import OxdAutoComplete from "./pages/oxdcoponets/oxdautocomplete";
import OxdChoshmark from "./pages/oxdcoponets/oxdcoashmark";
import OxdTooltips from "./pages/oxdcoponets/oxdtooltips";
import OxdCommnetBox from "./pages/oxdcoponets/oxdcommentbox";
import OxdTogglePils from "./pages/oxdcoponets/oxdtogglepils";
import OxdDatePicker from "./pages/oxdcoponets/oxddatepicker";
import OxdInfinityDropdown from "./pages/oxdcoponets/oxdinfinitydropdown";
import OxdLables from "./pages/oxdcoponets/oxdlables";
import OxdLightBox from "./pages/oxdcoponets/oxdlightbox";
import OxdPagination from "./pages/oxdcoponets/oxdpagination";
import OxdPluseMinus from "./pages/oxdcoponets/oxdplusminus";
import OxdProgresswheel from "./pages/oxdcoponets/oxdprogresswell";
import OxdProgressbar from "./pages/oxdcoponets/oxdprogressbar";
import OxdCheckBox from "./pages/oxdcoponets/oxdcheckbox";
import OxdTabs from "./pages/oxdcoponets/oxdtabs";
import OxdStatusLable from "./pages/oxdcoponets/oxdstatuslable";
import OxdSlider from "./pages/oxdcoponets/oxdslider";
import OxdNestedDropdown from "./pages/oxdcoponets/oxdnesteddropdown";
import OxdMultiselector from "./pages/oxdcoponets/oxdmultiselector";
import OxdProfileCircle from "./pages/oxdcoponets/oxdprofilecircle";
import OxdTextaria from "./pages/oxdcoponets/oxdtextaria";
import OxdListbox from "./pages/oxdcoponets/oxdlistbox";
import OxdSerchBox from "./pages/oxdcoponets/oxdsearchbox";
import OxdScrollBars from "./pages/oxdcoponets/oxdscrollbars";
import OxdTimePicker from "./pages/oxdcoponets/oxdtimepicker";
import OxdUploadBox from "./pages/oxdcoponets/oxduploadbox";
import OxdRadioPills from "./pages/oxdcoponets/oxdradiopills";
import OxdSegments from "./pages/oxdcoponets/oxdsegments";
import OxdListDropdown from "./pages/oxdcoponets/oxdlistdropdown";
import DesignThinkPage from "./pages/designthinkingpage";

function App() {
  return (
    <Router>
      <div className="topNaveBar">
        <div className="logobox"></div>
        <div className="navwrap">
          <nav>
            <NavLink
              to="/"
              className="navbox"
              style={({ isActive }) => ({
                color: isActive ? "#000" : "",
                background: isActive ? "#fff" : "rgb(0 0 0 / 0%)",
              })}
            >
              Explore
            </NavLink>
            <NavLink
              to="/designpage"
              className="navbox"
              style={({ isActive }) => ({
                color: isActive ? "#000" : "",
                background: isActive ? "#fff" : "rgb(0 0 0 / 0%)",
              })}
            >
              Design
            </NavLink>
            <NavLink
              to="/componetspage"
              className="navbox"
              style={({ isActive }) => ({
                color: isActive ? "#000" : "",
                background: isActive ? "#fff" : "rgb(0 0 0 / 0%)",
              })}
            >
              Components
            </NavLink>
            <NavLink
              to="/guidepage"
              className="navbox"
              style={({ isActive }) => ({
                color: isActive ? "#000" : "",
                background: isActive ? "#fff" : "rgb(0 0 0 / 0%)",
              })}
            >
              Guide
            </NavLink>
          </nav>
        </div>
        <div className="toplinkwrap">
          <div className="comlogo"></div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/designpage" element={<DesignPage />} />
        <Route path="/guidepage" element={<GuidePage />} />
        <Route path="/colorpage" element={<ColorPage />} />
        <Route path="/typopage" element={<TypoPage />} />
        <Route path="/iconpage" element={<IconPage />} />
        <Route path="/spacingpage" element={<SpacingPage />} />
        <Route path="/formdesignpage" element={<FormDesignPage />} />
        <Route path="/qaguidepage" element={<QaPage />} />
        <Route path="/oimpage" element={<OimPage />} />
        <Route path="/uxpage" element={<UxPage />} />
        <Route path="/designthinkingpage" element={<DesignThinkPage />} />
        <Route path="/madebypage" element={<MadeByPage />} />
        <Route path="/widgetspage" element={<WidgetsPage />} />
        <Route path="/exampage" element={<ExamPage />} />
        <Route path="/oxdblogpage" element={<BlogPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/componetspage" element={<ComPage />}>
          <Route path="/componetspage" element={<CardGrid />} />
          <Route path="oxddropdowns" element={<OxdDropDown />} />
          <Route path="oxdbuttons" element={<OxdButtons />} />
          <Route path="oxdtextbox" element={<OxdTextBox />} />
          <Route path="oxdradio" element={<OxdRadio />} />
          <Route path="oxdswitch" element={<OxdSwitch />} />
          <Route path="oxdalerts" element={<OxdAlerts />} />
          <Route path="oxdautocomplete" element={<OxdAutoComplete />} />
          <Route path="oxdcoashmark" element={<OxdChoshmark />} />
          <Route path="oxdcoashmark" element={<OxdChoshmark />} />
          <Route path="oxdtooltips" element={<OxdTooltips />} />
          <Route path="oxdcommentbox" element={<OxdCommnetBox />} />
          <Route path="oxdtogglepils" element={<OxdTogglePils />} />
          <Route path="oxddatepicker" element={<OxdDatePicker />} />
          <Route path="oxdinfinitydropdown" element={<OxdInfinityDropdown />} />
          <Route path="oxdlables" element={<OxdLables />} />
          <Route path="oxdlightbox" element={<OxdLightBox />} />
          <Route path="oxdpagination" element={<OxdPagination />} />
          <Route path="oxdplusminus" element={<OxdPluseMinus />} />
          <Route path="oxdprogresswell" element={<OxdProgresswheel />} />
          <Route path="oxdprogressbar" element={<OxdProgressbar />} />
          <Route path="oxdcheckbox" element={<OxdCheckBox />} />
          <Route path="oxdtabs" element={<OxdTabs />} />
          <Route path="oxdstatuslable" element={<OxdStatusLable />} />
          <Route path="oxdslider" element={<OxdSlider />} />
          <Route path="oxdnesteddropdown" element={<OxdNestedDropdown />} />
          <Route path="oxdmultiselector" element={<OxdMultiselector />} />
          <Route path="oxdprofilecircle" element={<OxdProfileCircle />} />
          <Route path="oxdtextaria" element={<OxdTextaria />} />
          <Route path="oxdlistbox" element={<OxdListbox />} />
          <Route path="oxdsearchbox" element={<OxdSerchBox />} />
          <Route path="oxdscrollbars" element={<OxdScrollBars />} />
          <Route path="oxdtimepicker" element={<OxdTimePicker />} />
          <Route path="oxduploadbox" element={<OxdUploadBox />} />
          <Route path="oxdradiopills" element={<OxdRadioPills />} />
          <Route path="oxdsegments" element={<OxdSegments />} />
          <Route path="oxdlistdropdown" element={<OxdListDropdown />} />
          <Route path="*" element={<OxdComError />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
