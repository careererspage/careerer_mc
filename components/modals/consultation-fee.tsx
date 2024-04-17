"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useModal } from "@/hooks/use-modal-store";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const ConsultationFeeModal = () => {
  const { onOpen, isOpen, onClose, type, data } = useModal();

  const isModalOpen = isOpen && type === "consultaion";
  const { serverId, supportLine } = data;
  const router = useRouter();

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Book a Call?
          </DialogTitle>
        </DialogHeader>
        <div className="p-6">
          <Label className="md:!text-base text-xs font-bold text-zinc-500 dark:text-secondary/70">
            sorry! You are yet to make a consultation fee payment to acces this
            call service. Kindly contact the support line for assistance.
          </Label>
          <div className="flex items-center mt-2 gap-x-2">
            <Button
              onClick={() => {
                router.push(
                  `/servers/${serverId}/conversations/${supportLine}`
                );
                onClose();
              }}
              variant="primary"
              size="sm"
              className="text-xs text-white mt-4"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
