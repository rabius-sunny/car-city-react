import React from 'react'
import { Container, createStyles } from '@mantine/core'

const useStyles = createStyles(() => ({
  container: {
    [`@media (max-width: 767px)`]: {
      margin: '0 0.8rem'
    }
  }
}))

export default function AppContainer({
  bgColor,
  children
}: {
  bgColor?: string
  children: React.ReactNode
}) {
  const { classes } = useStyles()
  return (
    <div style={{ backgroundColor: bgColor }}>
      <Container className={classes.container}>{children}</Container>
    </div>
  )
}
