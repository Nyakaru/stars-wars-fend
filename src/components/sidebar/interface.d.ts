export interface NavItemProps {
  navName: string;
  linkTo?: subNavs;
  icon: string;
  subNavs?: Array<{
    navName: string;
    linkTo: string;
    icon: string;
  }>;
}
