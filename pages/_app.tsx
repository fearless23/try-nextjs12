import type { AppProps } from 'next/app'
import { Shell } from '../components/Shell'
import { MantineProvider } from '@mantine/core';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: 'dark',
      }}
    >
      <Shell>
        <Component {...pageProps} />
      </Shell>
    </MantineProvider>
  )
}

export default MyApp
