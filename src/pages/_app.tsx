import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { THEME } from '@/constants/style'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={THEME}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
