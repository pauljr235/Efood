import { createGlobalStyle } from 'styled-components'

export const cores = {
  lightPink: '#FFEBD9',
  darkPink: '#E66767',
  whitePink: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
  body{
    background-color: ${cores.whitePink}
  }

  .container{
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;
  }

`
