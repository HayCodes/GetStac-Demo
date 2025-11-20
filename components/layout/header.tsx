"use client";
import { Column, Row } from "../resuables/layout-resuable";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Bell, Zap } from "lucide-react";
import { SidebarTrigger, useSidebar } from "../ui/sidebar";
import { useState } from "react";
import EscalateDialog from "../ui/dialogs/escalate-dialog";

const Header = () => {
  const { state } = useSidebar();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <header className="bg-background absolute top-0 left-0 w-full h-16 flex px-2 sm:px-5 shadow-sm z-10 p-5">
      <Row className="w-full flex justify-between gap-2 items-center">
        <Row className="items-center">
          {state !== "expanded" && (
            <SidebarTrigger className="w-6 h-6 hidden sm:flex" />
          )}
          <div className="relative">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/images/avatar.png" alt="User Avatar" />
              <AvatarFallback>AP</AvatarFallback>
            </Avatar>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary border-2 border-white rounded-full" />
          </div>
          <Column className="gap-1">
            <p className="font-semibold text-sm leading-tight text-ellipsis">
              Adebowale Paul-George
            </p>
            <p className="text-xs text-muted-foreground">
              Welcome back to Bokku HQ
            </p>
          </Column>
        </Row>

        <Row className="gap-3 items-center">
          <Button
            className="flex gap-2 p-2 text-xs items-center"
            variant="default"
            size="sm"
            onClick={() => setIsDialogOpen(!isDialogOpen)}
          >
            <Zap className="w-6 h-6" />
            <span className="md:block hidden">Escalate an Issue</span>
          </Button>
          <Button className="hidden sm:flex" variant="ghost">
            <Bell className="w-8 h-8" />
          </Button>
          <SidebarTrigger className="w-2 h-2 sm:hidden" />
        </Row>
        <EscalateDialog
          onClose={() => setIsDialogOpen(false)}
          isOpen={isDialogOpen}
        />
      </Row>
    </header>
  );
};

export default Header;
