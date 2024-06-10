import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LogoImage from "@/public/1.jpg";

const ProfileAvatar = () => {
  return (
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarImage
          src={
            "https://images.prismic.io/darkalpha/ZmL0Bpm069VX1jDR_1-removebg-preview.png?auto=format%2Ccompress&fit=max&w=1920"
          }
        />
        <AvatarFallback>GG</AvatarFallback>
      </Avatar>
      <div>
        <h4>Gayatri Gupta</h4>
        <span className="text-muted-foreground text-sm">Software Engineer</span>
      </div>
    </div>
  );
};

export default ProfileAvatar;
