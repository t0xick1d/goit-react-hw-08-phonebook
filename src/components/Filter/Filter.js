import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux-store/contactsSlice';

import style from './Filter.module.css';

function Filter() {
  const filter = useSelector(state => state.contacts.contacts.filter);
  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      <h3 className={style.title}>Find contact by name</h3>
      <input
        className={style.input}
        type="text"
        name="filter"
        onChange={e => dispatch(filterContacts(e.currentTarget.value))}
        value={filter}
      />
    </div>
  );
}

export default Filter;
