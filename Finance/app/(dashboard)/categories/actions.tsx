"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useDeleteCategory } from "@/features/categories/api/use-delete-category";
import { useOpenCategory } from "@/features/categories/hooks/use-open-category";
import { useConfirm } from "@/hooks/use-confirm";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Edit, MoreHorizontal, Trash } from "lucide-react";

type Props = { id: string };

export const Actions = ({ id }: Props) => {
  const { onOpen } = useOpenCategory();
  const deleteMutaiotn = useDeleteCategory(id);

  const [ConfirmDialog, confirm] = useConfirm(
    "Delete Category",
    "Are you sure you want to delete this category?"
  );

  const onDelete = async () => {
    const ok = await confirm();
    if (ok) {
      deleteMutaiotn.mutate();
    }
  };
  return (
    <>
      <ConfirmDialog />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="size-8 p-0">
            <MoreHorizontal className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem disabled={false} onClick={() => onOpen(id)}>
            <Edit className="size-4 mr-2" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem disabled={false} onClick={() => onDelete()}>
            <Trash className="size-4 mr-2" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
