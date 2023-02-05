import React, { useEffect } from 'react'
import Link from 'next/link'
import type { AppProps } from 'next/app'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    console.log('app effect')
  }, [])

  return (
    <>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <br />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
