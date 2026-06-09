import { useState, useEffect } from 'react';
import './App.css';

const stocks = [
  { stock_name: "EFX", company_name: "Equifax Inc", price: 163.55, currency: "USD", change: "+9.03" },
  { stock_name: "IRM", company_name: "Iron Mountain Inc", price: 33.21, currency: "USD", change: "+1.42" },
  { stock_name: "NTAP", company_name: "NetApp Inc", price: 54.81, currency: "USD", change: "-6.01" },
  { stock_name: "CTL", company_name: "Centurylink Inc", price: 13.79, currency: "USD", change: "-1.37" }
];

function App() {
  const [date, setDate] = useState('');

  useEffect(() => {
    const today = new Date().toLocaleDateString('ru-RU', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    setDate(today);
  }, []);

  // Задание 3 — Шахматная доска
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

  const isBlack = (fileIdx, rankIdx) => (fileIdx + rankIdx) % 2 === 1;

  return (
    <div className="container">
      <h1>Лабораторная работа №1 — React</h1>

      {/* Задание 1 */}
      <section className="task">
        <h2>Задание 1 — Сегодняшняя дата</h2>
        <div className="date-box">
          Сегодня: <strong>{date}</strong>
        </div>
      </section>

      {/* Задание 2 */}
      <section className="task">
        <h2>Задание 2 — Таблица акций</h2>
        <table className="stock-table">
          <thead>
            <tr>
              <th>Тикер</th>
              <th>Компания</th>
              <th>Цена</th>
              <th>Изменение</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock, index) => {
              const changeNum = parseFloat(stock.change);
              const isPositive = changeNum > 0;
              return (
                <tr key={index}>
                  <td><strong>{stock.stock_name}</strong></td>
                  <td>{stock.company_name}</td>
                  <td>{stock.price} {stock.currency}</td>
                  <td style={{ color: isPositive ? 'green' : 'red', fontWeight: 'bold' }}>
                    {stock.change}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      {/* Задание 3 */}
      <section className="task">
        <h2>Задание 3 — Шахматная доска</h2>
        <div className="chess-container">
          {/* Верхние буквы */}
          <div className="files top">
            {files.map(file => <div key={file} className="coord">{file}</div>)}
          </div>

          <div className="board">
            {ranks.map((rank, rankIdx) => (
              <div key={rank} className="rank">
                {/* Левая цифра */}
                <div className="coord">{rank}</div>
                
                {files.map((file, fileIdx) => {
                  const square = `${file}${rank}`;
                  return (
                    <div
                      key={square}
                      className={`square ${isBlack(fileIdx, rankIdx) ? 'black' : 'white'}`}
                    >
                      {/* Можно добавить фигуры позже */}
                    </div>
                  );
                })}

                {/* Правая цифра */}
                <div className="coord">{rank}</div>
              </div>
            ))}
          </div>

          {/* Нижние буквы */}
          <div className="files bottom">
            {files.map(file => <div key={file} className="coord">{file}</div>)}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;