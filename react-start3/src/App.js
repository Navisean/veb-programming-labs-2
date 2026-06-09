import React from 'react';
import EmailForm from './components/EmailForm';
import ProductCatalog from './components/ProductCatalog';

function App() {
  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Лабораторная работа №3</h1>
      
      <div style={{ marginBottom: '40px' }}>
        <h2>Задание 1: EmailForm</h2>
        <EmailForm />
      </div>

      <div>
        <h2>Задание 2: ProductCatalog</h2>
        <ProductCatalog />
      </div>
    </div>
  );
}

export default App;