import { client } from "@/lib/hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferResponseType } from "hono";
import { toast } from "sonner";

type ResponseType = InferResponseType<
  (typeof client.api.accounts)[":id"]["$delete"]
>;

export const useDeleteAccount = (id?: string) => {
  const queryClient = useQueryClient();
  const mutation = useMutation<ResponseType, Error>({
    mutationFn: async () => {
      const response = await client.api.accounts[":id"].$delete({
        param: { id },
      });
      if (!response.ok) {
        throw new Error("Failed to delete account: " + response.statusText);
      }
      const result = await response.json();
      return result;
    },
    onSuccess: () => {
      toast.success("Account deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["account", { id }] });
      queryClient.invalidateQueries({ queryKey: ["accounts"] });
      //TODO: also invalidate summary and transactions
    },
    onError: (error) => {
      toast.error("Failed to delete account:" + error.message);
    },
  });

  return mutation;
};
