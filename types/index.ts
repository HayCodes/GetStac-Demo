import { Icons } from "@/components/icons";

export interface NavItem {
  title: string;
  url: string;
  disabled?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  isActive?: boolean;
  items?: NavItem[];
  description?: string;
}
