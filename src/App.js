import logo from './logo.svg';
import './App.css';

import Products from './Component/Products/Products';
import Card from './Component/Card/Card';
import Navbar from './Component/Navbar/Navbar';
import React, { useState, useEffect } from 'react';

function App() {
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    if (data) {
      setSelectedItems(data);
    }
  }, []);

  const localstoreg = (data) => {
    localStorage.setItem('data', JSON.stringify(data));
  };

  const addItem = (item) => {
    const exists = selectedItems.find((elm) => elm.id === item.id);
    if (exists) {
      const updatedItems = selectedItems.map((elm) =>
        elm.id === item.id ? { ...elm, qty: elm.qty + 1 } : elm
      );
      setSelectedItems(updatedItems);
      localstoreg(updatedItems);
    } else {
      setSelectedItems([...selectedItems, { ...item, qty: 1 }]);
      localstoreg([...selectedItems, { ...item, qty: 1 }]);
    }
  };

  const removeItem = (item) => {
    const exists = selectedItems.find((elm) => elm.id === item.id);
    if (exists.qty > 1) {
      const updatedItems = selectedItems.map((elm) =>
        elm.id === item.id ? { ...elm, qty: elm.qty - 1 } : elm
      );
      setSelectedItems(updatedItems);
      localstoreg(updatedItems);
    }
  };

  const removeProducts = (item) => {
    const cart = selectedItems.filter((elm) => elm.id !== item.id);
    setSelectedItems(cart);
    localstoreg(cart);
  };

  return (
    <>
      <Navbar totle={selectedItems.reduce((x, y) => x + y.qty, 0)} totlePrace={selectedItems.reduce((x, y) => x + y.qty * y.price, 0)} />
      <div className='container'>
        <div className='row'>
          <div className='col-md-9'>
            <Products addItem={addItem} />
          </div>
          <div className='col-md-3'>
            <Card removeProducts={removeProducts} removeItem={removeItem} addItem={addItem} selectedItems={selectedItems} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
