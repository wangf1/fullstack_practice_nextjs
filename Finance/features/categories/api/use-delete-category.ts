import { client } from "@/lib/hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferResponseType } from "hono";
import { toast } from "sonner";

type ResponseType = InferResponseType<
  (typeof client.api.categories)[":id"]["$delete"]
>;

export const useDeleteCategory = (id?: string) => {
  const queryClient = useQueryClient();
  const mutation = useMutation<ResponseType, Error>({
    mutationFn: async () => {
      const response = await client.api.categories[":id"].$delete({
        param: { id },
      });
      if (!response.ok) {
        throw new Error("Failed to delete category: " + response.statusText);
      }
      const result = await response.json();
      return result;
    },
    onSuccess: () => {
      toast.success("Category deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["category", { id }] });
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      //TODO: also invalidate summary and transactions
    },
    onError: (error) => {
      toast.error("Failed to delete category:" + error.message);
    },
  });

  return mutation;
};
