import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../dialog";
import { Button } from "../button";
import { User2 } from "lucide-react";
import { Column, Row } from "@/components/resuables/layout-resuable";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import Link from "next/link";
import { WA_SUPPORT } from "@/constants/constants";

interface EscalateDialogProps {
  onClose?: () => void;
  isOpen: boolean;
}

const EscalateDialog = ({ onClose, isOpen }: EscalateDialogProps) => {
  return (
    <Dialog onOpenChange={onClose} open={isOpen}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            <Button className="border" size="icon" variant="ghost">
              <User2 className="w-12 h-12" />
            </Button>
          </DialogTitle>
        </DialogHeader>
        <Column className="gap-3">
          <h3 className="font-semibold text-lg text-primary mt-5">
            Candice Ademide is your Account Manager
          </h3>
          <p className="text-muted-foreground text-xs">
            The fastest way to have issues resolved is to reach out to your
            Account Manager ASAP. Find your account manager&apos;s details
            below.
          </p>
          <Row className="items-center">
            <Avatar className="w-12 h-12">
              <AvatarImage src="/images/Avatar.png" />
              <AvatarFallback>CA</AvatarFallback>
            </Avatar>
            <Column className="leading-tight gap-1">
              <p className="font-semibold text-primary">Candice Ademide</p>
              <p className="text-xs text-muted-foreground">
                candice.ademide@getstac.com
              </p>
              <p className="text-xs text-muted-foreground">+2349087254489</p>
            </Column>
          </Row>
        </Column>
        <DialogFooter className="mt-5">
          <Column className="w-full">
            <a href="mailto:candice.ademide@getstac.com">
              <Button className="bg-primary w-full" variant="default" size="lg">
                Send an email
              </Button>
            </a>
            <Link
              href={WA_SUPPORT}
              target="_blank"
              onClick={onClose}
              className="w-full border rounded-md text-primary text-center p-2 hover:bg-accent "
            >
              Send a message on whatsapp
            </Link>
          </Column>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EscalateDialog;
