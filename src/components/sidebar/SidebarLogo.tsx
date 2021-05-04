import {
  onNavStyleChange,
  toggleCollapsedSideNav,
} from "../../store/actions/settings";
import {
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_MINI_SIDEBAR,
  TAB_SIZE,
  THEME_TYPE_LITE,
} from "../../constants/themeSettings";
import { useAppState, useAppDispatch } from "../../store/";

const SidebarLogo = () => {
  const appState = useAppState();
  const dispatch = useAppDispatch();
  const { width, themeType, navCollapsed } = appState.settingsReducer;
  let navStyle = appState.settingsReducer.navStyle;
  if (width < TAB_SIZE && navStyle === NAV_STYLE_FIXED) {
    navStyle = NAV_STYLE_DRAWER;
  }
  return (
    <div className="gx-layout-sider-header">
      {navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR ? (
        <div className="gx-linebar">
          <i
            className={`gx-icon-btn icon icon-${
              navStyle === NAV_STYLE_MINI_SIDEBAR ? "menu-unfold" : "menu-fold"
            } ${themeType !== THEME_TYPE_LITE ? "gx-text-white" : ""}`}
            onClick={() => {
              if (navStyle === NAV_STYLE_DRAWER) {
                toggleCollapsedSideNav(!navCollapsed, dispatch);
              } else if (navStyle === NAV_STYLE_FIXED) {
                onNavStyleChange(NAV_STYLE_MINI_SIDEBAR, dispatch);
              } else {
                onNavStyleChange(NAV_STYLE_FIXED, dispatch);
              }
            }}
          />
        </div>
      ) : null}

      {/* <Link to="/" className="gx-site-logo">
        <img alt="logo1" src="" />
      </Link> */}
    </div>
  );
};

export default SidebarLogo;
