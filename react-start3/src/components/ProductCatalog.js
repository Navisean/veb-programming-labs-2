import React, { useState, useMemo } from 'react';

const initialProducts = [
  { id: 1, name: 'Ноутбук Lenovo', price: 75000, quantity: 5 },
  { id: 2, name: 'Смартфон Samsung', price: 45000, quantity: 12 },
  { id: 3, name: 'Монитор Dell', price: 22000, quantity: 0 },
  { id: 4, name: 'Клавиатура Logitech', price: 3500, quantity: 8 },
  { id: 5, name: 'Мышь Xiaomi', price: 1200, quantity: 2 },
  { id: 6, name: 'Принтер HP', price: 18500, quantity: 3 },
];

function ProductCatalog() {
  const [products] = useState(initialProducts);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const sortedProducts = useMemo(() => {
    let sortableProducts = [...products];
    
    if (sortConfig.key) {
      sortableProducts.sort((a, b) => {
        let valA = a[sortConfig.key];
        let valB = b[sortConfig.key];

        if (sortConfig.key === 'price' || sortConfig.key === 'quantity') {
          valA = Number(valA);
          valB = Number(valB);
        }

        if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1;
        if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }
    
    return sortableProducts;
  }, [products, sortConfig]);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortIndicator = (key) => {
    if (sortConfig.key !== key) return '';
    return sortConfig.direction === 'asc' ? ' ↑' : ' ↓';
  };

  const totalItems = sortedProducts.reduce((sum, p) => sum + p.quantity, 0);
  const totalCost = sortedProducts.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <div>
      <table style={{ 
        width: '100%', 
        borderCollapse: 'collapse', 
        marginBottom: '20px' 
      }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{ padding: '12px', textAlign: 'center', border: '1px solid #ddd', cursor: 'pointer' }}
                onClick={() => requestSort('id')}>
              №{getSortIndicator('id')}
            </th>
            <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd', cursor: 'pointer' }}
                onClick={() => requestSort('name')}>
              Название{getSortIndicator('name')}
            </th>
            <th style={{ padding: '12px', textAlign: 'right', border: '1px solid #ddd', cursor: 'pointer' }}
                onClick={() => requestSort('price')}>
              Цена (₽){getSortIndicator('price')}
            </th>
            <th style={{ padding: '12px', textAlign: 'center', border: '1px solid #ddd', cursor: 'pointer' }}
                onClick={() => requestSort('quantity')}>
              Количество{getSortIndicator('quantity')}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.map((product, index) => {
            let rowStyle = {};
            if (product.quantity === 0) {
              rowStyle = { backgroundColor: '#ffcccc' };
            } else if (product.quantity < 3) {
              rowStyle = { backgroundColor: '#fff2cc' };
            }

            return (
              <tr key={product.id} style={rowStyle}>
                <td style={{ padding: '12px', textAlign: 'center', border: '1px solid #ddd' }}>
                  {index + 1}
                </td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>{product.name}</td>
                <td style={{ padding: '12px', textAlign: 'right', border: '1px solid #ddd' }}>
                  {product.price.toLocaleString('ru-RU')}
                </td>
                <td style={{ padding: '12px', textAlign: 'center', border: '1px solid #ddd' }}>
                  {product.quantity}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div style={{ 
        padding: '15px', 
        backgroundColor: '#f8f9fa', 
        border: '1px solid #ddd', 
        borderRadius: '4px',
        fontSize: '18px'
      }}>
        <strong>Общее количество товаров:</strong> {totalItems} шт.<br />
        <strong>Общая стоимость:</strong> {totalCost.toLocaleString('ru-RU')} ₽
      </div>
    </div>
  );
}

export default ProductCatalog;