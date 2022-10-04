import { useMemo } from "react";
import { ProductResponse } from "./useProducts";

const getOptions = (
  products: ProductResponse[]
): Record<string, Record<string, string>> =>
  products.reduce((acc, { attributes }) => {
    const selectableAttributes = attributes.filter(
      ({ selectable }) => selectable
    );

    for (const attr of selectableAttributes) {
      acc[attr.id] = acc[attr.id] || {};
      acc[attr.id][attr.value] = attr.label;
    }

    return acc;
  }, {} as Record<string, Record<string, string>>);

/**
 * This hook handles working out the product options
 * to display, based on selectable product attributes
 */
const useProductOptions = (
  products?: ProductResponse[]
): Record<string, Record<string, string>> | undefined => {
  return useMemo(() => products && getOptions(products), [products]);
};

export default useProductOptions;
