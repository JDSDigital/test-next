import { ApiProvider } from '@/context/ApiContext'
import { globalStyles } from '@/stitches.config'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <ApiProvider>
      <Component {...pageProps} />
    </ApiProvider>
  )
}
