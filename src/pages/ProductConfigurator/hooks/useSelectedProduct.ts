import { useState, useEffect } from "react";
import { ProductResponse } from "./useProducts";

/**
 * This hook keeps track of which product is currently
 * selected, based on the selected option values.
 */
const useSelectedProduct = (
  values: Record<string, string>,
  options?: Record<string, Record<string, string>>,
  products?: ProductResponse[]
) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductResponse>();
  useEffect(() => {
    if (!options || Object.keys(values).length < Object.keys(options).length) {
      // Not all options have had a value selected yet, or options aren't loaded yet
      return;
    }

    const newSelected = products?.find((product) => {
      const result = Object.entries(values).map(([id, value]) =>
        product.attributes.find(
          (attr) => attr.id === id && attr.value === value
        )
      );
      return result.indexOf(undefined) === -1;
    });

    setSelectedProduct(newSelected);
  }, [values, products, options]);

  return selectedProduct;
};

export default useSelectedProduct;
