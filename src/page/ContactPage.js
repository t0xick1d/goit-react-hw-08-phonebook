import React from 'react';

import ContactForm from 'components/ContactForm/ContactForm';
import NumberList from 'components/NumberList/NumberList';
import Filter from 'components/Filter/Filter';

import style from 'App.module.css';

const ContactPage = () => {
  return (
    <div>
      <h1 className={style.App__title}>Phonebook</h1>
      <ContactForm />
      <h2 className={style.App__title}>Contacts</h2>
      <Filter />
      <NumberList />
    </div>
  );
};

export default ContactPage;
