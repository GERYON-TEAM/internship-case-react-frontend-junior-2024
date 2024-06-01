import { lazy } from 'react';

const EmployeesPageLazy = lazy(() => import('./components/EmployeesPage'));

export default EmployeesPageLazy;
