import { useEmployeesQuery } from '@/shared/api/entityies/employee/employee.car';
import { Grid } from '@mui/material';
import EmployeeItem from './EmployeeItem/EmployeeItem';
import { IEmployee } from '@/shared/types/employee.type';
import { Title } from '@/shared/ui/typography/Title';
import { CircularProgress } from '@mui/joy';

const EmployeesList = () => {
  const { data: employees, isLoading } = useEmployeesQuery({});

  const renderItem = (employee: IEmployee) => {
    return <EmployeeItem key={employee.id} employee={employee} />;
  };

  if (isLoading) return <CircularProgress />;

  if (!employees) return <Title variant="title">No data...</Title>;

  return (
    <Grid maxWidth={630} container gap={3} flexDirection="column">
      {employees.map(renderItem)}
    </Grid>
  );
};

export default EmployeesList;
