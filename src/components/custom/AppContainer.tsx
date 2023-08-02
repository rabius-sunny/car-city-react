import React from 'react';
import { Container, createStyles } from '@mantine/core';

const useCustomStyles = createStyles(theme => ({
  container: {
    border: '2px solid red',
    [theme.fn.smallerThan('sm')]: {
      margin: '0 20px'
    }
  }
}))

  export default function AppContainer({ children }: { children: React.ReactNode }) {
  const { classes } = useCustomStyles()
  return <Container className={classes.container}>{children}</Container>
}
