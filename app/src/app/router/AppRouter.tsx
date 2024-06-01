import EmployeesPage from '@/pages/EmployeesPage';
import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { config } from './routerConfig';

const AppRoter: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback="loading...">
        <Routes>
          <Route path={config.employees} element={<EmployeesPage />} />

          <Route path="*" element={<Navigate to={config.employees} />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoter;
