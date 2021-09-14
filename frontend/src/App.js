import React from "react";
import Home from "./pages";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./hooks";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_en from "./translations/en/global.json";
import global_es from "./translations/es/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

/**
 * Esta es la configuración de nuestro tema
 * aqui podrías agregar los que necesites y tener una
 * gran variedad para tus usuarios.
 */
const themes = {
  default: {
    colors: {
      background: "#f1f1f1", // Color de fondo
      bars: "#000",
      logo: "#4B0082",
      surface: "#FFF", // Color de fondo de tarjetas.
      text: "#000", // Color del texto
      text2: "#000", // Color de las cantidades
    },
  },
  dark: {
    colors: {
      background: "#111111",
      bars: "#fff",
      logo: "#4B0082",
      surface: "#32383b",
      text: "#fff",
      text2: "#317e94",
    },
  },
};

function App() {
  const [theme, toggleTheme] = useTheme();
  return (
    <I18nextProvider i18n={i18next}>
      <ThemeProvider theme={themes[theme]}>
        <Home theme={theme} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
