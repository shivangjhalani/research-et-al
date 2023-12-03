import { type } from "os";

export type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};

export type MenuItemsWithSubMenuProps = {
  item: SideNavItem;
  toggleOpen: () => void;
};
