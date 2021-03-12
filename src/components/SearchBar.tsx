import React, { FunctionComponent, ReactElement } from 'react';

interface Props {}

const SearchBar: FunctionComponent<{}> = (): ReactElement => {
  return (
    <form>
      <input type='text' placeholder='Search...' />
      <br />
      <input type='checkbox' id='showInStockProdChk' />
      <label htmlFor='showInStockProdChk'>Only show product in stock</label>
    </form>
  );
};
export default SearchBar;
