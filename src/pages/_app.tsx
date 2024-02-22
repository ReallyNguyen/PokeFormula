import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import localFont from '@next/font/local'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PokeFormula</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
  
  
}