import { Icon } from "@iconify/react";

import { SideNavItem } from "./types";
import { Post } from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },

  {
    title: "Publications",
    path: "/publications",
    icon: <Icon icon="lucide:book-check" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Journals", path: "/publications/journals" },
      { title: "Book Chapters", path: "/publications/book-chapters" },
      { title: "Conf", path: "/publications/conf" },
    ],
  },
  {
    title: "ThesisReports",
    path: "/thesis-reports",
    icon: <Icon icon="lucide:scroll-text" width="24" height="24" />,
  },
  {
    title: "Events",
    path: "/events",
    icon: <Icon icon="lucide:calendar-days" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Conferences", path: "/events/conferences" },
      { title: "Workshops", path: "/events/workshops" },
    ],
  },
  {
    title: "Labs",
    path: "/research-labs",
    icon: <Icon icon="lucide:flask-conical" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "A", path: "/research-labs/a" },
      { title: "B", path: "/research-labs/b" },
      { title: "C", path: "/research-labs/c" },
      { title: "D", path: "/research-labs/d" },
    ],
  },
  {
    title: "Funding",
    path: "/research-funding",
    icon: <Icon icon="lucide:landmark" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Internal", path: "/research-funding/internal" },
      { title: "External", path: "/research-funding/external" },
    ],
  },
  {
    title: "CoE",
    path: "/coe",
    icon: <Icon icon="lucide:graduation-cap" width="24" height="24" />,
  },
];

export const POSTS: Post[] = [
  {
    title: "This is a post",
    description: "lorem ipsum",
    year: 1924,
  },
];
