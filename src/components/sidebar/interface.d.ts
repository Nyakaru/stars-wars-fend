export interface NavItemProps {
  navName: string;
  linkTo?: subNavs;
  subNavs?: Array<{
    navName: string;
    linkTo: string;
    icon: string;
  }>;
}
