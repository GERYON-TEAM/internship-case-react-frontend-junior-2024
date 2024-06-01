import AppWidth from '@/components/layout/AppWidth';
import LayoutWindow from '@/components/layout/LayoutWindow';
import EmployeeBigInfo from '@/modules/EmployeeBigInfo';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const EmployeePage = () => {
  const { id } = useParams();

  if (!id) return <Typography>User dosent exist </Typography>;

  return (
    <AppWidth>
      <LayoutWindow>
        <EmployeeBigInfo userId={id} />
      </LayoutWindow>
    </AppWidth>
  );
};

export default EmployeePage;
