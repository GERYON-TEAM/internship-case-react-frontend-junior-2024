import { Card } from '@/shared/ui/layout/Card';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Grid } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

interface LayoutWindowProps extends PropsWithChildren {}

const LayoutWindow: React.FC<LayoutWindowProps> = ({ children }) => {
  const navigate = useNavigate();

  const clickBackButton = () => {
    navigate(-1);
  };

  return (
    <Grid container gap={3}>
      <Card
        style={{
          width: 40,
          height: 40,
          padding: '0px 0px',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}
        onClick={clickBackButton}
      >
        <ArrowBackIcon />
      </Card>

      <Grid xs={12}>{children}</Grid>
    </Grid>
  );
};

export default LayoutWindow;
