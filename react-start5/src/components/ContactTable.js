import React from 'react';

function ContactTable({ contacts }) {
  if (contacts.length === 0) {
    return <p>Нет добавленных контактов</p>;
  }

  return (
    <div>
      <h2>Список контактов</h2>
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Email</th>
            <th>Сообщение</th>
            <th>Пол</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.message}</td>
              <td>{contact.gender === 'male' ? 'Мужской' : 'Женский'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactTable;