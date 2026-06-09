import React from 'react';

const professions = [
  { id: 'developer', name: 'Разработчик' },
  { id: 'designer', name: 'Дизайнер' },
  { id: 'marketer', name: 'Маркетолог' },
  { id: 'analyst', name: 'Аналитик' },
  { id: 'manager', name: 'Менеджер' }
];

function ProfessionSelector({ selected, onSelect }) {
  return (
    <div style={{ margin: '20px 0' }}>
      <h3>Выберите профессию:</h3>
      <select 
        value={selected} 
        onChange={(e) => onSelect(e.target.value)}
        style={{ padding: '10px', fontSize: '1rem' }}
      >
        {professions.map(prof => (
          <option key={prof.id} value={prof.id}>{prof.name}</option>
        ))}
      </select>
    </div>
  );
}

export default ProfessionSelector;