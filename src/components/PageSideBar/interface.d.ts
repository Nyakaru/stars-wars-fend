export interface PageSideBarProps {
  pageTitle: string;
  onFilterOptionSelect: Function;
}

export interface SideBarOption {
  id: number;
  name: string;
  icon: string;
  handleAction: Function;
}
