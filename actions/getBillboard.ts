import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export const getBillboardById = async (id: string): Promise<Billboard> => {
  const data = await fetch(`${URL}/${id}`);
  return data.json();
}