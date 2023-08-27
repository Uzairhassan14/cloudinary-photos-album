import { Button } from "@/components/ui/button";
import { Menu } from "@/components/icon/menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AddtoAlbumDialog } from "./add-to-album-dialog";
import { searchResult } from "@/app/gallery/page";
import { useState } from "react";
import Link from "next/link";
import { Pencil } from "lucide-react";

export function ImageMenu({ image }: { image: searchResult }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-8 h-8 p-0">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-54">
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <AddtoAlbumDialog image={image} onClose={() => setOpen(false)} />
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
            <Button className="cursor-pointer  flex justify-start pl-4"  asChild variant="ghost">
              <Link  href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}>
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </Link>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
