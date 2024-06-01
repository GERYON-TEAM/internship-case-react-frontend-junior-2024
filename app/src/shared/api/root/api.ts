import { API_URL } from '@/shared/config/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,

  prepareHeaders: (headers) => {
    return headers;
  },
});

export const rootApi = createApi({
  reducerPath: 'apiRoot',
  tagTypes: ['Employee'],
  baseQuery: baseQuery,
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
