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

  return (
    <ul className="app-list list-group">
      {employeers.map((employee) => (
        <EmployeesListItem
          key={employee.id}
          name={employee.name}
          sername={employee.sername}
          sallery={employee.sallery}
        />
      ))}
    </ul>
  );
};

export default EmployeesList;
