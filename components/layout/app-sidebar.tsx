"use client";
import { usePathname, useRouter } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "../ui/sidebar";
import { Picture } from "../resuables/atoms/picture";
import { Routes } from "@/core/routing";
import Link from "next/link";
import { useState } from "react";
import { Input } from "../ui/input";
import {
  FileText,
  HelpCircle,
  LayoutDashboard,
  MapPin,
  MessageSquare,
  Search,
  Settings,
  Users,
} from "lucide-react";

interface NavItem {
  title: string;
  url: string;
  icon: React.ReactNode;
  badge?: boolean;
}

interface NavSection {
  label?: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    items: [
      {
        title: "Dashboard",
        url: Routes.dashboard,
        icon: <LayoutDashboard className="w-4 h-4" />,
      },
      {
        title: "Managers",
        url: Routes.manager,
        icon: <Users className="w-4 h-4" />,
      },
      {
        title: "Locations",
        url: Routes.location,
        icon: <MapPin className="w-4 h-4" />,
      },
      {
        title: "Billing & Invoices",
        url: Routes.billing,
        icon: <FileText className="w-4 h-4" />,
        badge: true,
      },
    ],
  },
  {
    label: "Support",
    items: [
      {
        title: "Settings",
        url: Routes.settings,
        icon: <Settings className="w-4 h-4" />,
      },
      {
        title: "What is new?",
        url: Routes.whatsnew,
        icon: <HelpCircle className="w-4 h-4" />,
      },
      {
        title: "Custom Request",
        url: Routes.customrequest,
        icon: <MessageSquare className="w-4 h-4" />,
      },
    ],
  },
];

export default function AppSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { state } = useSidebar();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="gap-3 p-3 bg-white">
        <div
          className={`flex items-center ${
            state === "expanded" ? "justify-between" : "flex-col"
          } w-full gap-5`}
        >
          {state === "expanded" ? (
            <Picture
              container={{ className: "w-32" }}
              image={{
                src: "/images/logo-full.png",
                alt: "Getstac Logo",
                priority: true,
                onClick: () => router.push(Routes.dashboard),
                className: "cursor-pointer",
              }}
            />
          ) : (
            <Picture
              container={{ className: "" }}
              image={{
                src: "/images/logo-icon.png",
                alt: "Getstac Logo",
                priority: true,
                onClick: () => router.push(Routes.dashboard),
                className: "cursor-pointer",
              }}
            />
          )}
          {state === "expanded" && <SidebarTrigger className="w-6 h-6" />}
        </div>
        {state === "expanded" && (
          <Input
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            container={{ className: `text-sm h-[40px]` }}
            leftElement={<Search className="w-4 h-4 text-muted-foreground" />}
            aria-label="Search input"
          />
        )}
      </SidebarHeader>
      <SidebarContent className="overflow-x-hidden bg-white">
        {navSections.map((section, idx) => (
          <SidebarGroup key={idx} className="gap-2">
            {section.label && (
              <SidebarGroupLabel className="text-base text-foreground">
                {section.label}
              </SidebarGroupLabel>
            )}
            <SidebarMenu>
              {section.items.map((item) => (
                <SidebarMenuItem key={item.title} className={`items-center`}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    className="p-5"
                    tooltip={item.title}
                    aria-label="Sidebar options"
                  >
                    <Link href={item.url}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.badge && (
                    <SidebarMenuBadge className="bg-primary p-0 items-center w-4 h-4 rounded-full" />
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
