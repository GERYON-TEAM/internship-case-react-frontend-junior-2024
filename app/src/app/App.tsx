import { Provider } from 'react-redux';
import { setupStore } from '../shared/store/store';
import AppRoter from './router/AppRouter';

import { ThemeProvider } from './provider/ThemeProvider';

const store = setupStore();
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppRoter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
