import React, { FunctionComponent, ReactElement } from 'react';

import Product from '../model/Product';

interface Props {
  product: Product;
}

const ProductRow: FunctionComponent<Props> = ({ product }): ReactElement => {
  const productNameStyle = {
    color: 'red',
  };

  const name = product.stocked ? (
    product.name
  ) : (
    <span style={productNameStyle}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
};
export default ProductRow;
