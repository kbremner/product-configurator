import Row from "./Row";
import { ProductResponse } from "../hooks/useProducts";

const AttributeRow = ({
  label,
  attributeId,
  attributes,
}: {
  label: string;
  attributeId: string;
  attributes: ProductResponse["attributes"];
}) => {
  return (
    <Row
      label={label}
      value={attributes.find((attr) => attr.id === attributeId)?.label}
    />
  );
};

export default AttributeRow;
