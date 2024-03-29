import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { FaRegUserCircle } from "react-icons/fa";

interface UserAvatarProps {
  src?: string | null;
  className?: string;
}

export const UserAvatar = ({ src, className }: UserAvatarProps) => {
  return (
    <Avatar
      className={cn(
        "flex items-center  sm:h-7 sm:w-7 w-5 h-5 md:h-10 md:w-10",
        className
      )}
    >
      {src ? (
        <AvatarImage src={src} />
      ) : (
        <FaRegUserCircle
          className={cn(
            "!text-gray-200 transition-all !font-light h-7 w-7 md:h-7 md:w-7",
            className
          )}
        />
      )}
    </Avatar>
  );
};
