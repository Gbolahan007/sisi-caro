import { supabase } from "./supabase";

export const getServices = async function () {
  const { data, error } = await supabase.from("services").select(`
    *,
    service_features (
      id,
      service_id,
      feature
    )
  `);

  if (error) {
    console.error(error);
    throw new Error("services could not be loaded");
  }
  return data;
};
