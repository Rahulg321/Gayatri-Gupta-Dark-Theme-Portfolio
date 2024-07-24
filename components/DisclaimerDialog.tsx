"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

const DisclaimerDialog = () => {
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);

  useEffect(() => {
    const isAccepted = localStorage.getItem("disclaimerAccepted");
    if (isAccepted) {
      setDisclaimerAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("disclaimerAccepted", "true");
    setDisclaimerAccepted(true);
  };

  return (
    !disclaimerAccepted && (
      <Dialog defaultOpen>
        <DialogContent className="lg:max-w-[1000px] m-2 flex flex-col max-h-screen">
          <DialogHeader>
            <DialogTitle>DISCLAIMER & CONFIRMATION</DialogTitle>
            <DialogDescription>
              Please read the disclaimer and accept the terms and conditions in
              order to access the website.
            </DialogDescription>
          </DialogHeader>
          <div className="flex-grow overflow-y-auto">
            <p>
              Under the rules of the Bar Council of India, Gayatri Law Offices
              (the "Firm") is prohibited from soliciting work or advertising. By
              clicking, "I Agree" below, the user acknowledges that:
            </p>
            <ol className="list-decimal p-4 space-y-2">
              <li>
                There has been no advertisement, personal communication,
                solicitation, invitation or inducement of any sort whatsoever
                from the Firm or any of its members to solicit any work or
                advertise through this website.
              </li>
              <li>
                The purpose of this website is to provide the user with
                information about the Firm, its practice areas, its advocates
                and solicitors;
              </li>
              <li>
                The user wishes to gain more information about the Firm for
                his/her own information and personal/professional use; and
              </li>
              <li>
                The information about the Firm is provided to the user only on
                his/her specific request and any information obtained or
                materials downloaded from this website are completely at the
                user’s volition and any transmission, receipt or use of this
                website would not create any lawyer-client relationship.
              </li>
              <li>
                This website is not intended to be a source of advertising or
                solicitation and the contents hereof should not be construed as
                legal advice in any manner whatsoever.
              </li>
              <li>
                The Firm is not liable for any consequence of any action taken
                by the user relying on material/information provided under this
                website. In cases where the user requires any assistance, he/she
                must seek independent legal advice.
              </li>
              <li>
                The content of this website is Intellectual Property of the
                Firm.
              </li>
            </ol>
            <p>Please read and accept in order to continue</p>
            <DialogFooter className="sm:justify-start mt-4">
              <DialogClose asChild>
                <Button className="w-full block mx-auto" onClick={handleAccept}>
                  I AGREE
                </Button>
              </DialogClose>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    )
  );
};

export default DisclaimerDialog;
