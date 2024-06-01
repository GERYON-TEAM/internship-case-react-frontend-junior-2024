import { lazy } from 'react';

const EmployeePageLazy = lazy(() => import('./components/EmployeePage'));

export default EmployeePageLazy;
