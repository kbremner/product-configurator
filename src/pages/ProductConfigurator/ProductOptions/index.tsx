import { Fragment } from "react";
import css from "./ProductOption.module.css";

const ProductOption = ({
  id,
  options,
  onSelect,
  selected,
  label,
}: {
  id: string;
  options: Record<string, string>;
  onSelect: (id: string, value: string) => void;
  selected: string;
  label: string;
}) => {
  return (
    <>
      <h3>{label}</h3>
      <div className={css["product-option"]}>
        {Object.entries(options).map(([value, label], i) => (
          <Fragment key={`${id}-${value}`}>
            <input
              type="radio"
              id={`${id}-${value}`}
              name={id}
              value={value}
              checked={selected === value}
              onChange={() => onSelect(id, value)}
            />
            <label htmlFor={`${id}-${value}`}>{label}</label>
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default ProductOption;
