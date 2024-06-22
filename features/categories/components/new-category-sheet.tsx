import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { insertCategorySchema } from "@/db/schema";
import { z } from "zod";
import { useCreateCategory } from "../api/use-create-category";
import { useNewCategory } from "../hooks/use-new-category";
import { CategoryForm } from "./category-form";

export const NewCategorySheet = () => {
  const { isOpen, onClose } = useNewCategory();

  const mutaiotn = useCreateCategory();

  const formSchema = insertCategorySchema.pick({ name: true });

  type FormValues = z.input<typeof formSchema>;

  const onSubmit = (values: FormValues) => {
    mutaiotn.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>New Category</SheetTitle>
            <SheetDescription>
              Create a new category to track your transactions.
            </SheetDescription>
          </SheetHeader>
          <CategoryForm
            onSubmit={onSubmit}
            disabled={mutaiotn.isPending}
            defaultValues={{ name: "" }}
          />
        </SheetContent>
      </Sheet>
    </>
  );
};
