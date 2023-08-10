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
  className,
  children
}: {
  bgColor?: string
  className?: string
  children: React.ReactNode
}) {
  const { classes } = useStyles()
  return (
    <div
      className={className}
      style={{
        backgroundColor: bgColor
      }}
    >
      <Container className={classes.container}>{children}</Container>
    </div>
  )
}
