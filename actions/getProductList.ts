import { Product } from "@/types";
import queryString from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

type TQuery = {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
};

export const getProductList = async (query: TQuery): Promise<Product[]> => {
  const url = queryString.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      categoryId: query.categoryId,
      sizeId: query.sizeId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url);
  return res.json();
};
