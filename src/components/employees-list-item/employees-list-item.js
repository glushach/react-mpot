import './employees-list-item.css';

const EmployeesListItem = ({ id, name, surname, premium, ...props }) => {
  const { sallery, propIncreasePremium, propDeleteUser } = props;

  const handleIncrease = () => {
    propIncreasePremium(id);
  };

  const handleDelete = () => {
    propDeleteUser(id);
  };

  return (
    <li
      className={`list-group-item d-flex justify-content-between ${
        premium ? 'increase' : ''
      }`}
    >
      <span className="list-group-item-label">
        {name} {surname}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={`${sallery}$`}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm "
          onClick={handleIncrease}
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button
          type="button"
          className="btn-trash btn-sm "
          onClick={handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
