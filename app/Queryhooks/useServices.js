import { useQuery } from "@tanstack/react-query";
import { getServices } from "../_lib/data-services";

export function useServices() {
  const { data: services, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: () => getServices(),
  });
  return { services, isLoading };
}
