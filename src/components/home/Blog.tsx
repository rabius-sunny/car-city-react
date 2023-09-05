import {
  createStyles,
  SimpleGrid,
  Card,
  Image,
  Text,
  AspectRatio
} from '@mantine/core'
import AppContainer from 'components/custom/AppContainer'
import SectionHeader from 'components/shared/SectionHeader'

const mockdata = [
  {
    title: 'Top 10 Brands of electronics for your car',
    image:
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    author: 'Razin Car Decora'
  },
  {
    title: 'Best Tires for your dream car',
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    author: 'Razin Car Decora'
  },
  {
    title: 'KW products review: better than you think',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    author: 'Razin Car Decora'
  },
  {
    title: 'Looking for Foglights? 5 best brands to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    author: 'Razin Car Decora'
  }
]

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md
    }
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600
  }
}))

export default function Blog() {
  const { classes } = useStyles()

  const cards = mockdata.map((article) => (
    <Card
      key={article.title}
      p='md'
      radius='md'
      component='a'
      href='#'
      className={classes.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text color='dimmed' size='xs' transform='uppercase' weight={700} mt='md'>
        {article.author}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ))

  return (
    <AppContainer className='mt-10 mb-10'>
      <SectionHeader title='read blogs from top seller' header='our blogs' />
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 667, cols: 1 }]}>
        {cards}
      </SimpleGrid>
      <div className='text-center text-red fs-4 mt-5'>Read more →</div>
    </AppContainer>
  )
}
