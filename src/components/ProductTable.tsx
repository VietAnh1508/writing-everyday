import React, { FunctionComponent, ReactElement } from 'react';

// Component
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

// Model
import Product from '../model/Product';

type Props = {
  products: Product[];
};

const ProductTable: FunctionComponent<Props> = ({ products }): ReactElement => {
  const rows: ReactElement[] = [];
  let lastCategory: string;

  products.forEach((product: Product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.id} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};
export default ProductTable;
