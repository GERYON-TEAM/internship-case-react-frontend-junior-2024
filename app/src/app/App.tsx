import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import { Provider } from 'react-redux';
import { setupStore } from '../shared/store/store';
import AppRoter from './router/AppRouter';

import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from './provider/ThemeProvider';

if (process.env.IS_DEV === 'TRUE') {
  loadDevMessages();
  loadErrorMessages();
}

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
