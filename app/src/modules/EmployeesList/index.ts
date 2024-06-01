import { lazy } from 'react';

const EmployeesListLazy = lazy(() => import('./components/EmployeesList'));

export default EmployeesListLazy;
