import { apiConfig } from '@/shared/config/apiConfig';
import { rootApi } from '../../root/api';
import { IEmployee } from '@/shared/types/employee.type';

export const employeeApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    employees: build.query<IEmployee[], { id: number }>({
      query: (params: { id: number }) => {
        return {
          url: `${apiConfig.employees.url}/${params.id || ''}`,
          method: apiConfig.employees.method,
        };
      },
    }),
  }),
});

export const { useEmployeesQuery } = employeeApi;
