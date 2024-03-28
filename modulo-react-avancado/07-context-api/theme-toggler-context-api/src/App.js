import './App.css';
import { ThemeProvider } from './contexts/theme-context';
import { ThemeTogglerButton } from './components/theme-toggle-button/theme-toggle-button';
import { Card } from './components/card/card';
import { PainelProvider } from './contexts/themes-alterad';
import { PainelTogglerButton } from './components/painel/painel.toggle';
import { Page } from './components/pagee/page';



function App() {
  return (
    
      <ThemeProvider>
        <ThemeTogglerButton />
          <Card />
          <Card />
          <Card />
      </ThemeProvider>,

      <PainelProvider>
        <PainelTogglerButton />
        <Page />
      </PainelProvider>
        )
}

export default App;
