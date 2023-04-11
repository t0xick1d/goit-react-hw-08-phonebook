import PropTypes from 'prop-types';
import style from './NumberList.module.css';

function ItemList({ id, name, number, deleteContact }) {
  return (
    <li key={id} className={style.item}>
      <div>
        {name}, {number}
      </div>
      <button
        className={style.button__delete}
        onClick={() => {
          deleteContact(id);
        }}
      >
        {' '}
        Delete{' '}
      </button>
    </li>
  );
}

export default ItemList;

ItemList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
