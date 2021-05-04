import {
  UPDATE_NAV_STYLE,
  UPDATE_LAYOUT_TYPE,
  UPDATE_THEME_COLOR,
  UPDATE_WINDOW_WIDTH,
  UPDATE_THEME_TYPE,
  TOGGLE_COLLAPSED_NAV,
} from "../../../constants/actionTypes";
import {
  LAYOUT_TYPE_FULL,
  NAV_STYLE_FIXED,
  THEME_COLOR,
  THEME_TYPE_SEMI_DARK,
} from "../../../constants/themeSettings";
import { Action, SettingsReducerProps } from "../../interface";

export const initialSettings: SettingsReducerProps = {
  navCollapsed: false,
  navStyle: NAV_STYLE_FIXED,
  layoutType: LAYOUT_TYPE_FULL,
  themeType: THEME_TYPE_SEMI_DARK,
  themeColor: THEME_COLOR,
  pathname: "/",
  width: window.innerWidth,
  isDirectionRTL: false,
};

export const settingsReducer = (
  state: SettingsReducerProps,
  action: Action
) => {
  switch (action.type) {
    case "@@router/LOCATION_CHANGE":
      return {
        ...state,
        pathname: action.payload.location.pathname,
        navCollapsed: false,
      };
    case TOGGLE_COLLAPSED_NAV:
      return {
        ...state,
        navCollapsed: action.payload,
      };
    case UPDATE_WINDOW_WIDTH:
      return {
        ...state,
        width: action.payload,
      };
    case UPDATE_THEME_TYPE:
      return {
        ...state,
        themeType: action.payload,
      };
    case UPDATE_THEME_COLOR:
      return {
        ...state,
        themeColor: action.payload,
      };

    case UPDATE_NAV_STYLE:
      return {
        ...state,
        navStyle: action.payload,
      };
    case UPDATE_LAYOUT_TYPE:
      return {
        ...state,
        layoutType: action.payload,
      };
    default:
      return state;
  }
};
