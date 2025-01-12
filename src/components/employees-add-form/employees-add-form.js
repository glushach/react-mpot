import { useState } from 'react';

import './employees-add-form.css';

const EmployeesAddForm = ({ propCreateUser }) => {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');

  const isFormValid = name && salary;

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSalaryChange = (e) => {
    setSalary(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    propCreateUser(name, salary);

    setName('');
    setSalary('');
  };

  return (
    <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form className="add-form d-flex" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Как его зовут?"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="З/П в $?"
          value={salary}
          onChange={handleSalaryChange}
        />

        <button
          type="submit"
          className="btn btn-outline-light"
          disabled={!isFormValid}
        >
          Добавить
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
