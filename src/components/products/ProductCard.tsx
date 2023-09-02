import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  Center,
  Button,
  rem
} from '@mantine/core'

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: '0.3s ease-in-out',
    ':hover': {
      boxShadow: '0 0 13px 2px #00000030'
    }
  },

  imageSection: {
    padding: theme.spacing.sm,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: rem(-0.25),
    textTransform: 'uppercase'
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`
  },

  icon: {
    marginRight: rem(5),
    color:
      theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5]
  }
}))

export default function ProductCard() {
  const { classes } = useStyles()

  return (
    <Card withBorder radius='sm' className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src='https://i.imgur.com/ZL52Q2D.png' alt='Tesla Model S' />
      </Card.Section>

      <Group position='apart' mt='md'>
        <div>
          <Text fw={500}>Tesla Model S</Text>
        </div>
        <Badge variant='dot' size='xs'>
          25% off
        </Badge>
      </Group>

      <Card.Section className={classes.section} mt='md'>
        <Group spacing={3} mb={-8}>
          <Center>
            <Text fw='500' mr={3} size='xs'>
              Brand:
            </Text>
            <Text size='xs' fw='300'>
              Depo
            </Text>
          </Center>
          <Center>
            <Text fw='500' mr={3} size='xs'>
              Origin:
            </Text>
            <Text fw='300' size='xs'>
              Taiwan
            </Text>
          </Center>
          <Center>
            <Text fw='500' mr={3} size='xs'>
              Condition:
            </Text>
            <Text fw='300' size='xs'>
              New
            </Text>
          </Center>
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text fz='xl' fw={700} sx={{ lineHeight: 1 }}>
              $168.00
            </Text>
          </div>

          <Button radius='xl' color='red' style={{ flex: 1 }}>
            Rent now
          </Button>
        </Group>
      </Card.Section>
    </Card>
  )
}
