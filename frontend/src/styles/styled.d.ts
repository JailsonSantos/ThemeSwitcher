import 'styled-components';

// Sobrescrevendo o styled-component por uma inteface DefaultTheme
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      background: string;
      text: string;
    },
  }
}