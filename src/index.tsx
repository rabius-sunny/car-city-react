import React, { Suspense } from 'react'
import './styles/main.scss'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { MantineProvider } from '@mantine/core'
import App from './App'
import state from 'features/states'
import themeConfig from 'utils/themeConfig'
import LoaderSuspense from 'components/shared/Loader.Suspense'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <MantineProvider theme={themeConfig} withGlobalStyles withNormalizeCSS>
      <Provider store={state}>
        <Suspense fallback={<LoaderSuspense />}>
          <App />
        </Suspense>
      </Provider>
    </MantineProvider>
  </React.StrictMode>
)
