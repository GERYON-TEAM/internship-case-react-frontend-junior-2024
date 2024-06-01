import { config } from '@/app/router/routerConfig';
import { IEmployee } from '@/shared/types/employee.type';
import { Card } from '@/shared/ui/layout/Card';
import { Title } from '@/shared/ui/typography/Title';
import { Button } from '@mui/joy';
import { Grid } from '@mui/material';

import { NavLink } from 'react-router-dom';

interface EmployeeItem {
  employee: IEmployee;
}

const EmployeeItem = ({ employee }: EmployeeItem) => {
  return (
    <Card>
      <Grid container gap={2}>
        <Grid alignItems="center" container justifyContent="space-between">
          <Title variant="title">{employee.name}</Title>
          <Title variant="subtitle">{employee.address.city}</Title>
        </Grid>
        <Grid container>
          <Title variant="text">{employee.email}</Title>
        </Grid>
        <Grid container gap={1} flexDirection="column">
          <Grid>
            <Title variant="text" color="primary">
              Company info
            </Title>
          </Grid>
          <Grid style={{ borderLeft: '2px solid grey', paddingLeft: 10 }} container gap={1} flexDirection="column">
            <Title variant="subtitle">{employee.company.name}</Title>
            <Title variant="subtitle">{employee.company.bs}</Title>
            <Title variant="subtitle">{employee.company.catchPhrase}</Title>
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end">
          <NavLink to={`${config.employee}/${employee.id}`}>
            <Button variant="outlined">Look up</Button>
          </NavLink>
        </Grid>
      </Grid>
    </Card>
  );
};

export default EmployeeItem;
