import { createStyles, Text, Card, rem, Grid } from '@mantine/core'
import {
  IconCar,
  IconRefresh,
  IconShieldLock,
  IconUsers
} from '@tabler/icons-react'
import AppContainer from 'components/custom/AppContainer'

const mockdata = [
  {
    title: 'free shipping',
    description: 'On all orders over $99.00',
    icon: IconCar
  },
  {
    title: '30 days return',
    description: 'You have 30 days to return',
    icon: IconRefresh
  },
  {
    title: 'safe shopping',
    description: 'Payment 100% secure',
    icon: IconShieldLock
  },
  {
    title: 'online support',
    description: 'Contact us 24 hours a day',
    icon: IconUsers
  }
]

const useStyles = createStyles((theme) => ({
  cardTitle: {
    fontWeight: 'bold',

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(24)
    },
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginBottom: 1
    }
  },
  cardIcon: {
    border: '2px solid #e5e5e5',
    height: 70,
    width: 70,
    borderRadius: 35,
    padding: 10
  }
}))

export default function Features() {
  const { classes, theme } = useStyles()
  const features = mockdata.map((feature) => (
    <Grid.Col xs={12} sm={6} lg={3} key={feature.title}>
      <Card>
        <div className='items-center gap-4'>
          <feature.icon
            className={classes.cardIcon}
            size={rem(50)}
            stroke={2}
            color={theme.fn.primaryColor()}
          />
          <div>
            <Text fw={500} className={classes.cardTitle}>
              {feature.title.toUpperCase()}
            </Text>
            <Text fz='xs' c='dimmed'>
              {feature.description}
            </Text>
          </div>
        </div>
      </Card>
    </Grid.Col>
  ))

  return (
    <AppContainer className='pt-2 pb-2'>
      <Grid>{features}</Grid>
    </AppContainer>
  )
}
