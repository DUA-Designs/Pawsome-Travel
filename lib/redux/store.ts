// redux/store.ts

// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import markersReducer  from './reducers/markersReducer';

const store = configureStore({
  reducer: {
    markers: markersReducer,
  },
});

export default store;
