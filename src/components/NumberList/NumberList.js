import ItemList from './ItemList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItem, deleteContact } from 'redux-store/operetions';

import style from './NumberList.module.css';

function NumberList() {
  const item = useSelector(state => state.contacts.contacts.items);
  const isLoading = useSelector(state => state.contacts.contacts.isLoading);
  const filter = useSelector(state => state.contacts.filter.toLowerCase());

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItem());
  }, [dispatch]);

  const visibleContact = !isLoading
    ? item.filter(contact => contact.name.toLowerCase().includes(filter))
    : [];

  return (
    <>
      <div className={style.title}>Contacts</div>
      <ul className={style.list}>
        {isLoading ? (
          <div className={style.title}>Loading...</div>
        ) : (
          visibleContact.map(e => {
            return (
              <ItemList
                key={e.id}
                id={e.id}
                name={e.name}
                number={e.number}
                deleteContact={() => {
                  dispatch(deleteContact(e.id));
                }}
              />
            );
          })
        )}
      </ul>
    </>
  );
}

export default NumberList;
