import useGetRequest from "../../../hooks/useGetRequest";

export type ProductResponse = {
  id: string;
  "product-label": string;
  "product-id": string;
  attributes: {
    id: string;
    type: string;
    value: string;
    label: string;
    selectable: boolean;
  }[];
  price: number;
};

type ReturnType =
  | { products: undefined; state: "error" }
  | { products: undefined; state: "loading" }
  | {
      products: ProductResponse[];
      state: "complete";
    };

/**
 * This hook handles fetching the products from the API
 * and tracking the state of that request.
 */
const useProducts = (): ReturnType => {
  const { result, state } =
    useGetRequest<{ products: ProductResponse[] }>("/api/products");

  return { products: result?.products, state } as ReturnType;
};

export default useProducts;
