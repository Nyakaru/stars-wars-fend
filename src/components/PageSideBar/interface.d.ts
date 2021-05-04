export interface PageSideBarProps {
  pageTitle: string;
}

export interface SideBarOption {
  id: number;
  name: string;
  icon: string;
  handleAction: Function;
}
