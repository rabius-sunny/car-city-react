import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  createStyles,
  rem
} from '@mantine/core'
import AppContainer from 'components/custom/AppContainer'
import ContactIconsList from './ContactIcons'

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan(992)

  return {
    wrapper: {
      display: 'flex',
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,
      border: `${rem(1)} solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[8]
          : theme.colors.gray[2]
      }`,

      [BREAKPOINT]: {
        flexDirection: 'column'
      }
    },

    form: {
      boxSizing: 'border-box',
      flex: 1,
      padding: theme.spacing.xl,
      paddingLeft: `calc(${theme.spacing.xl} * 2)`,
      borderLeft: 0,

      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md
      }
    },

    fields: {
      marginTop: rem(-12)
    },

    fieldInput: {
      flex: 1,

      '& + &': {
        marginLeft: theme.spacing.md,

        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md
        }
      }
    },

    fieldsGroup: {
      display: 'flex',

      [BREAKPOINT]: {
        flexDirection: 'column'
      }
    },

    contacts: {
      boxSizing: 'border-box',
      position: 'relative',
      borderTopLeftRadius: theme.radius.lg,
      borderBottomLeftRadius: theme.radius.lg,
      backgroundImage: `url(/images/others/contactbg.svg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: theme.spacing.xl,
      flex: `0 0 ${rem(280)}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: theme.radius.lg
      }
    },

    title: {
      marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl
      }
    },

    control: {
      [BREAKPOINT]: {
        flex: 1
      }
    }
  }
})

export default function Contact() {
  const { classes } = useStyles()

  return (
    <AppContainer className='pt-10 pb-10'>
      <Paper shadow='md' radius='lg'>
        <div className={classes.wrapper}>
          <div className={classes.contacts}>
            <Text fz='lg' fw={700} className={classes.title} c='#fff'>
              Contact information
            </Text>

            <ContactIconsList variant='white' />
          </div>

          <form
            className={classes.form}
            onSubmit={(event) => event.preventDefault()}
          >
            <Text fz='lg' fw={700} className={classes.title}>
              Get in touch
            </Text>

            <div className={classes.fields}>
              <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                <TextInput label='Your name' placeholder='Your name' required />
                <TextInput
                  label='Your email'
                  placeholder='you@email.com'
                  required
                />
              </SimpleGrid>

              <TextInput mt='md' label='Subject' placeholder='Subject' />

              <Textarea
                mt='md'
                label='Your message'
                placeholder='Please include all relevant information'
                minRows={3}
                required
              />

              <Group position='right' mt='md'>
                <Button type='submit' color='red' className={classes.control}>
                  Send message
                </Button>
              </Group>
            </div>
          </form>
        </div>
      </Paper>
    </AppContainer>
  )
}
