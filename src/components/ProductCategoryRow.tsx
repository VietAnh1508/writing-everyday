import React, { FunctionComponent, ReactElement } from 'react';

interface Props {
  category: string;
}

const ProductCategoryRow: FunctionComponent<Props> = ({
  category,
}): ReactElement => {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
};
export default ProductCategoryRow;
