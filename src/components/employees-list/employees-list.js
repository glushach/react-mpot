import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

import { readListEmployeers } from './api';
import { useEffect, useState } from 'react';

const EmployeesList = () => {
  const [employeers, setList] = useState([]);

  useEffect(() => {
    async function preload() {
      const employeers = await readListEmployeers();
      setList(employeers);
    }
    preload();
  }, []);

  const updateEmployeer = (id) => {
    setList((employeers) =>
      employeers.map((employee) => {
        if (employee.id === id) {
          return {
            ...employee,
            increasePremium: !employee.increasePremium
          };
        }
        return employee;
      })
    );

    console.log('Old array after updata employeer', employeers);
    // Здесь должена быть отправка PUT запроса на бекенд для обновления работчника по конкретному id
  };

  const deleteEmployeer = (id) => {
    setList((employeers) =>
      employeers.filter((employee) => employee.id !== id)
    );

    console.log('Old array after delete employeer', employeers);
    // Здесь должена быть отправка DELETE запроса на бекенд для удаления работчника по конкретному id
  };

  return (
    <ul className="app-list list-group">
      {employeers.map((employee) => (
        <EmployeesListItem
          key={employee.id}
          id={employee.id}
          name={employee.name}
          surname={employee.sername}
          sallery={employee.sallery}
          premium={employee.increasePremium}
          propIncreasePremium={updateEmployeer}
          propDeleteUser={deleteEmployeer}
        />
      ))}
    </ul>
  );
};

export default EmployeesList;
