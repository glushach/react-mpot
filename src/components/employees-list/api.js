import { employeers } from '../../backend';

export function readListEmployeers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(employeers);
    }, 50);
  });
}
