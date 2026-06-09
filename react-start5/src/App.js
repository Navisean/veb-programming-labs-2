import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactTable from './components/ContactTable';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <div className="App">
      <h1>Контактная форма</h1>
      <ContactForm onAddContact={addContact} />
      <ContactTable contacts={contacts} />
    </div>
  );
}

export default App;