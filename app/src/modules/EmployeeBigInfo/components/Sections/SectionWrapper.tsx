import { Card } from '@/shared/ui/layout/Card';
import { Title } from '@/shared/ui/typography/Title';
import { Grid } from '@mui/material';
import { PropsWithChildren } from 'react';

interface SectionWrapperProps extends PropsWithChildren {
  title: string;
  items: string[];
}

const SectionWrapper = ({ title, items }: SectionWrapperProps) => {
  return (
    <Grid gap={1} container>
      <Grid>
        <Title color="primary" variant="text">
          {title}
        </Title>
      </Grid>
      <Grid container flexDirection="column" gap={1} style={{ borderLeft: '2px solid grey', paddingLeft: 10 }}>
        {items.map((item, index) => (
          <Title key={`${item}-${index}`}>{item}</Title>
        ))}
      </Grid>
    </Grid>
  );
};

export default SectionWrapper;
