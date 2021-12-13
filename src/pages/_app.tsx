/**
 * The process required for all pages can be implemented by writing it in here.
 * 全ページに必要な処理はここに書くことで実装できます
 */

import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { UserAgentContextProvider } from '@/contexts/userAgent/userAgentProvider'
import { THEME } from '@/constants/style'
import '@/styles/destyle.css'
import '@/styles/globals.css'

type Props = {
  uaString: string
} & AppProps

function App({ Component, pageProps, uaString }: Props) {
  return (
    <>
      <ThemeProvider theme={THEME}>
        <UserAgentContextProvider uaString={uaString}>
          <Component {...pageProps} />
        </UserAgentContextProvider>
      </ThemeProvider>
    </>
  )
}

export default App
