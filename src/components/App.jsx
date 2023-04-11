import ContactForm from './ContactForm/ContactForm';
import NumberList from './NumberList/NumberList';
import Filter from './Filter/Filter';

import style from './App.module.css';

function App() {
  return (
    <div className={style.App__container}>
      <div>
        <h1 className={style.App__title}>Phonebook</h1>
        <ContactForm />
        <h2 className={style.App__title}>Contacts</h2>
        <Filter />
        <NumberList />
      </div>
    </div>
  );
}

export default App;
