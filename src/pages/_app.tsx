import Layout from '@/components/layout/Layout'
import '@/styles/global.scss'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
    
  ) 
}
