import { readListEmployeers } from './api';
import { useEffect, useState } from 'react';

import EmployeesListItem from '../employees-list-item/employees-list-item';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './employees-list.css';

const EmployeesList = () => {
  const [employeers, setList] = useState([]);

  useEffect(() => {
    async function preload() {
      const employeers = await readListEmployeers();
      /*
      setInterval(() => {
        console.log('Clear employerrs', employeers);
      }, 60000);
      */
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

    console.log('Previous state after updata employeer', employeers);
    // Здесь должена быть отправка PUT запроса на бекенд для обновления работчника по конкретному id
  };

  const deleteEmployeer = (id) => {
    setList((employeers) =>
      employeers.filter((employee) => employee.id !== id)
    );

    console.log('Previous state after delete employeer', employeers);
    // Здесь должена быть отправка DELETE запроса на бекенд для удаления работчника по конкретному id
  };

  const createEmployeer = (name, salary) => {
    const maxId = employeers.reduce((max, employee) => {
      return employee.id > max ? employee.id : max;
    }, 0);

    const newEmployee = {
      id: maxId + 1,
      name,
      salary,
      increasePremium: false
    };

    setList((employeers) => [...employeers, newEmployee]);

    console.log('Previous state after add new employeer', employeers);
    // Здесь должена быть отправка CREATE запроса на бекенд для добавления нового работчника по мною сгенерированому id
  };

  return (
    <>
      <ul className="app-list list-group">
        {employeers.map((employee) => (
          <EmployeesListItem
            key={employee.id}
            id={employee.id}
            name={employee.name}
            salary={employee.salary}
            premium={employee.increasePremium}
            propIncreasePremium={updateEmployeer}
            propDeleteUser={deleteEmployeer}
          />
        ))}
      </ul>
      <EmployeesAddForm propCreateUser={createEmployeer} />
    </>
  );
};

export default EmployeesList;
