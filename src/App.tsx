import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import WritingPage from './views/WritingPage';
import FilterableProductTable from './components/FilterableProductTable';
import getData from './repository';
import Product from './model/Product';

class ProductData implements Product {
  id = 0;
  category = '';
  price = '';
  stocked = false;
  name = '';
}

function App() {
  const products = getData().map((item) => {
    let product = new ProductData();
    product.id = item.id;
    product.category = item.category;
    product.price = item.price;
    product.stocked = item.stocked;
    product.name = item.name;
    return product;
  });

  return <FilterableProductTable products={products} />;
}

export default App;
