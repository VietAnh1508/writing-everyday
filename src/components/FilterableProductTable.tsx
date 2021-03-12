import React, { FunctionComponent, ReactElement, useState } from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

import Product from '../model/Product';

type Props = {
  products: Product[];
};

const FilterableProductTable: FunctionComponent<Props> = ({
  products,
}): ReactElement => {
  const [fileterText, setFilterText] = useState('');
  const [isStockOnly, setIsStockOnly] = useState(false);

  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
};

export default FilterableProductTable;
