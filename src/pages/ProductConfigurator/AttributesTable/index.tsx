import AttributeRow from "./AttributeRow";
import Price from "./Price";
import Row from "./Row";
import { ProductResponse } from "../hooks/useProducts";
import css from "./AttributesTable.module.css";

const AttributesTable = ({
  selectedProduct,
}: {
  selectedProduct: ProductResponse;
}) => {
  return (
    <table className={css["attributes-table"]}>
      <thead>
        <tr>
          <th>Summary</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <AttributeRow
          label="Pages"
          attributeId="pc1"
          attributes={selectedProduct.attributes}
        />
        <AttributeRow
          label="Colour"
          attributeId="cc1"
          attributes={selectedProduct.attributes}
        />
        <AttributeRow
          label="Layout"
          attributeId="pt1"
          attributes={selectedProduct.attributes}
        />
        <Row label="Price" value={<Price>{selectedProduct.price}</Price>} />
      </tbody>
    </table>
  );
};

export default AttributesTable;
