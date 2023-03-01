import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { Router } from './routes'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme'
import GlobalStyle from './styles/global'
import { Container } from './components/Container'

import { GoogleOAuthProvider } from '@react-oauth/google'
import { AuthContextProvider } from './hooks/useAuth'
import { CustomThemeProvider, createTheme } from 'dga-ui'
import { YouTubeContextProvider } from './hooks/useYoutube'
import { KEYS } from './shared/constants'
function App() {

  return (
    <GoogleOAuthProvider clientId={KEYS.YT_OAUTH_KEY}>
      <CustomThemeProvider theme={createTheme({})} >
          <AuthContextProvider >
            <YouTubeContextProvider>

              <ThemeProvider theme={defaultTheme}>
                <Container>
                  <BrowserRouter>
                    <Router />
                  </BrowserRouter>
                </Container>
                <GlobalStyle />

              </ThemeProvider>
            </YouTubeContextProvider>

          </AuthContextProvider>
      </CustomThemeProvider>
    </GoogleOAuthProvider >
  )
}

export default App
