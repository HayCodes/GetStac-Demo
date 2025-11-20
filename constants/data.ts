import { NavItem } from "@/types";

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    isActive: true,
    url: "/dashboard",
    icon: "dashboard",
  },
  {
    title: "Managers",
    isActive: false,
    url: "/manager",
    icon: "employee",
  },
  {
    title: "Locations",
    isActive: false,
    url: "/locations",
    icon: "employee",
  },
  {
    title: "Billing & Invoices",
    isActive: false,
    url: "/billings",
    icon: "employee",
  },
  {
    title: "Settings",
    isActive: false,
    url: "/settings",
    icon: "employee",
  },
  {
    title: "What is New",
    isActive: false,
    url: "/whatisnew",
    icon: "employee",
  },
  {
    title: "Custom Request",
    isActive: false,
    url: "/request",
    icon: "employee",
  },
];

export const ERROR_MESSAGES = {
  generic: "An error occurred, please try again.",
};
