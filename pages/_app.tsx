import type { AppProps } from 'next/app'
import { Shell } from '../components/Shell'
import { MantineProvider } from '@mantine/core'
import { ThemeProvider, useTheme } from '../lib/context/theme.context'

interface Props {
  cmp: JSX.Element
}

const MantineLayout = (props: Props) => {
  const d = useTheme()
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: d.colorScheme as any,
      }}
    >
      <Shell>
        {props.cmp}
      </Shell>
    </MantineProvider>
  )
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <MantineLayout cmp={<Component {...pageProps} />}/>
    </ThemeProvider>
  )
};

export default MyApp
