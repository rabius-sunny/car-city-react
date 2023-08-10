import { Grid } from '@mantine/core'
import categoryList from 'assets/fakedata/categoryList'
import AppContainer from 'components/custom/AppContainer'
import SectionHeader from 'components/shared/SectionHeader'
import { ICategory } from 'types/CategoryTypes'

export default function Categories() {
  const categoryMap = categoryList.map((item: ICategory, idx: number) => (
    <Grid.Col key={idx} xs={12} md={6} lg={4}>
      <div className='p-2 bg-white rounded-1'>
        <div className='items-center gap-3'>
          <img style={{ maxWidth: '150px' }} src={item.thumb} alt={item.slug} />
          <div>
            <h3 className='fs-3'>{item.name.toUpperCase()}</h3>
            <ul className='ms-4'>
              {item.items.map((product, id) => (
                <li
                  className='fs-3 text-darktext mt-1'
                  style={{ fontWeight: 500 }}
                  key={id}
                >
                  {product}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Grid.Col>
  ))
  return (
    <AppContainer bgColor='#e2e2e2' className='mt-10'>
      <SectionHeader
        title='top featured collections'
        header='shop by categories'
      />
      <Grid py={40}>{categoryMap}</Grid>
    </AppContainer>
  )
}
