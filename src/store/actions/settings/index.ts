import {
  TOGGLE_COLLAPSED_NAV,
  UPDATE_NAV_STYLE,
  UPDATE_WINDOW_WIDTH,
} from "../../../constants/actionTypes";
import { Dispatch } from "../../interface";

export function toggleCollapsedSideNav(
  navCollapsed: boolean,
  dispatch: Dispatch
) {
  dispatch({ type: TOGGLE_COLLAPSED_NAV, payload: navCollapsed });
}

export const updateWindowWidth = (width: number, dispatch: Dispatch) => {
  dispatch({ type: UPDATE_WINDOW_WIDTH, payload: width });
};

export function onNavStyleChange(navStyle: string, dispatch: Dispatch) {
  dispatch({ type: UPDATE_NAV_STYLE, payload: navStyle });
}
