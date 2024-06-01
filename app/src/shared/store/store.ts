import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { rootApi } from '../api/root/api';

const rootReducer = combineReducers({
  [rootApi.reducerPath]: rootApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(rootApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
