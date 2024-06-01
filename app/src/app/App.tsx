import { TamaguiProvider } from '@tamagui/core'; // or 'tamagui'
import '@tamagui/core/reset.css';
import AppRoter from './router/AppRouter';
import { tamaguiConfig } from './config/tamagui.config';

function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <AppRoter />
    </TamaguiProvider>
  );
}

export default App;
