import "styled-components";
// Necessario impotar um modulo primeiro antes de editalo
// senão todo o modulo sera sobreescrito apenas com  edição

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      background: string;
      text: string;
    };
  }
}
