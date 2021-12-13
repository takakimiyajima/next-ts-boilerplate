import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { UserAgentContextProvider } from '@/contexts/userAgent/userAgentProvider'
import { THEME } from '@/constants/style'

type Props = {
  uaString: string
} & AppProps

function App({ Component, pageProps, uaString }: Props) {
  return (
    <ThemeProvider theme={THEME}>
      <UserAgentContextProvider uaString={uaString}>
        <Component {...pageProps} />
      </UserAgentContextProvider>
    </ThemeProvider>
  )
}

export default App
