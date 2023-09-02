import {
  createStyles,
  Text,
  Title,
  TextInput,
  Button,
  Image
} from '@mantine/core'
import AppContainer from 'components/custom/AppContainer'

const useStyles = createStyles((theme) => ({
  wrapper: {
    borderRadius: theme.radius.md,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    display: 'flex',
    alignItems: 'center',
    gap: 30,
    ['@media (max-width: 667px)']: {
      flexDirection: 'column-reverse'
    }
  },

  image: {
    maxWidth: '40%',
    ['@media (max-width: 667px)']: {
      maxWidth: '80%'
    }
  },

  body: {
    display: 'flex',
    alignItems: 'center',
    height: '100%'
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md
  },

  controls: {
    display: 'flex',
    gap: 10,
    marginTop: theme.spacing.xl,
    ['@media (max-width: 667px)']: {
      flexDirection: 'column'
    }
  },

  inputWrapper: {
    width: '100%'
  }
}))

export default function Subscribe() {
  const { classes } = useStyles()
  return (
    <AppContainer className='mb-10'>
      <div className={classes.wrapper}>
        <div className={classes.body}>
          <div>
            <Title className={classes.title}>Wait a minute...</Title>
            <Text fw={500} fz='lg' mb={5}>
              Subscribe to our newsletter!
            </Text>
            <Text fz='sm' c='dimmed'>
              You will never miss important product updates, latest news and
              community QA sessions. Our newsletter is once a week, every
              Sunday.
            </Text>

            <div className={classes.controls}>
              <TextInput
                placeholder='Your email'
                classNames={{ root: classes.inputWrapper }}
              />
              <Button color='red'>Get into</Button>
            </div>
          </div>
        </div>

        <Image src='/images/others/subscribe.svg' className={classes.image} />
      </div>
    </AppContainer>
  )
}
