import { ChevronRight, MoveRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ArrowButton() {
  return (
    <Button size="icon" className="rounded-full">
      <MoveRight className="h-4 w-4" />
    </Button>
  );
}
