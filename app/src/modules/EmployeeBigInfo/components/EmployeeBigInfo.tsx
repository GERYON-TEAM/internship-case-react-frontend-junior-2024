import { useEmployeeQuery } from '@/shared/api/entityies/employee/employee.car';
import { Card } from '@/shared/ui/layout/Card';
import { Title } from '@/shared/ui/typography/Title';
import { Grid, Typography } from '@mui/material';
import SectionWrapper from './Sections/SectionWrapper';

interface EmployeeBigInfoProps {
  userId: number | string;
}

const EmployeeBigInfo = ({ userId }: EmployeeBigInfoProps) => {
  const { data: employee } = useEmployeeQuery({ id: Number(userId) });

  if (!employee) return <Typography>User dosent exit</Typography>;

  return (
    <Card>
      <Grid container alignContent="center" justifyContent="center" flexDirection="column">
        <Title style={{ textAlign: 'center' }} variant="title">
          {employee.username}
        </Title>
        <Title style={{ textAlign: 'center' }} variant="text">
          {employee.name}
        </Title>
      </Grid>

      <Grid gap={3} container flexDirection="column">
        <SectionWrapper title="Contact info" items={[employee.email, employee.phone, employee.website]} />
        <SectionWrapper
          title="Company info"
          items={[employee.company.name, employee.company.catchPhrase, employee.company.bs]}
        />
        <SectionWrapper
          title="Geography"
          items={[employee.address.city, employee.address.street, employee.address.suite, employee.address.zipcode]}
        />
      </Grid>
    </Card>
  );
};

export default EmployeeBigInfo;
