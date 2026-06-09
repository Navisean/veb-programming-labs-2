import React, { useState } from 'react';
import Clock from './Clock';
import ProfessionSelector from './ProfessionSelector';
import JobMenu from './JobMenu';

function App() {
  const [selectedProfession, setSelectedProfession] = useState('developer');

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Лабораторная работа №2</h1>
      
      <h2>Задание 1: Часы</h2>
      <Clock format="24" timezone="+3:00" />
      <Clock format="12" timezone="-4:00" />
      
      <hr style={{ margin: '40px 0' }} />
      
      <h2>Задание 2: Меню профессий</h2>
      <ProfessionSelector 
        selected={selectedProfession} 
        onSelect={setSelectedProfession} 
      />
      <JobMenu profession={selectedProfession} />
    </div>
  );
}

export default App;