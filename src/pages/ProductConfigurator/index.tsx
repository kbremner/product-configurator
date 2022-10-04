import AttributesTable from "./AttributesTable";
import ProductOptions from "./ProductOptions";
import css from "./ProductConfigurator.module.css";
import useOptionsState from "./hooks/useOptionsState";
import useProducts from "./hooks/useProducts";
import useSelectedProduct from "./hooks/useSelectedProduct";
import useProductOptions from "./hooks/useProductOptions";

const AttributeNames: Record<string, string> = {
  cc1: "colour",
  pt1: "page layout",
};

const ProductConfigurator = () => {
  const { state, products } = useProducts();
  const options = useProductOptions(products);
  const { values, onSelect } = useOptionsState(options);
  const selectedProduct = useSelectedProduct(values, options, products);

  return (
    <div className={css["app"]}>
      {state === "error" && "Oops!"}
      {state === "loading" && "Loading..."}
      {state === "complete" && selectedProduct && options && (
        <>
          <header className={css["app-header"]}>
            <h1>MOO {selectedProduct["product-label"]}</h1>
          </header>
          <div className={css["img-container"]}>
            <img src="/productShot.jpeg" alt="product shot" />
          </div>
          <div className={css["content-container"]}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            {Object.entries(options).map(([id, optionValues]) => (
              <ProductOptions
                key={id}
                id={id}
                selected={values[id]}
                options={optionValues}
                onSelect={onSelect}
                label={`Choose your ${AttributeNames[id]}`}
              />
            ))}
            <AttributesTable selectedProduct={selectedProduct} />
          </div>
        </>
      )}
    </div>
  );
};

export default ProductConfigurator;
