import { Grid, GridProps } from '@mui/material';

interface AppWidthProps extends GridProps {}

const AppWidth = ({ ...props }: AppWidthProps) => {
  return <Grid style={{ margin: '0 auto', maxWidth: 800, justifyContent: 'center' }} {...props} />;
};

export default AppWidth;
