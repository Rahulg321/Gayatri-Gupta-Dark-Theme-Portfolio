import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LogoImage from "@/public/gayatri.jpg";

const ProfileAvatar = () => {
  return (
    <div className="flex items-center gap-2">
      {/* <Avatar className="w-10 h-10">
        <AvatarImage
          src={
            "https://firebasestorage.googleapis.com/v0/b/athena-pcte.appspot.com/o/WhatsApp%20Image%202024-06-22%20at%2017.09.50_e5ad711a.jpg?alt=media&token=62afb7b0-221e-46e2-932a-bf99be074627"
          }
        />
        <AvatarFallback>GG</AvatarFallback>
      </Avatar> */}
      <div>
        <h4 className="">Gayatri Gupta</h4>
        <span className="text-muted-foreground text-sm">Paralegal</span>
      </div>
    </div>
  );
};

export default ProfileAvatar;
