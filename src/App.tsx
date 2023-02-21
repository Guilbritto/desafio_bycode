import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { Router } from './routes'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme'
import GlobalStyle from './styles/global'
import { Container } from './components/Container'

import { GoogleOAuthProvider } from '@react-oauth/google'
import { AuthContextProvider } from './hooks/useAuth'
import { CustomThemeProvider, createTheme, ToastProvider } from 'dga-ui'
import { YouTubeContextProvider } from './hooks/useYoutube'
function App() {

  return (
    <GoogleOAuthProvider clientId='591942177468-f9loc2evvrsb1a42co2kf0jcag7cofi5.apps.googleusercontent.com'>
      <CustomThemeProvider theme={createTheme({})} >
        <ToastProvider >
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
        </ToastProvider>
      </CustomThemeProvider>
    </GoogleOAuthProvider >
  )
}

export default App
