import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { WrapperApp } from '@/shared/ui/layout/WrapperApp';
import { config } from './routerConfig';
import EmployeePageLazy from '@/pages/EmployeePage';
import EmployeesPageLazy from '@/pages/EmployeesPage';

const AppRoter: React.FC = () => {
  return (
    <WrapperApp>
      <BrowserRouter>
        <Suspense fallback="loading...">
          <Routes>
            <Route path={config.employees} element={<EmployeesPageLazy />} />
            <Route path={config.employee} element={<EmployeePageLazy />}>
              <Route path={':id'} element={<EmployeePageLazy />} />
            </Route>

            <Route path="*" element={<Navigate to={config.employees} />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </WrapperApp>
  );
};

export default AppRoter;
