// redux/markersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  markers: [],
  status: 'idle',
  error: null,
};


export const fetchMarkersBySearch = createAsyncThunk(
  'markers/fetchMarkersBySearch',
  async ({ payload: searchKeyword }) => {
    console.log(searchKeyword);
    const response = await axios.get(`https://api.geoapify.com/v2/places?categories=${searchKeyword}&filter=rect%3A10.716463143326969%2C48.755151258420966%2C10.835314015356737%2C48.680903341613316&limit=20&apiKey=68fd2f0b7b764a6fa07741a93f1054a6` );
    return response.data;
  }
);




const markersSlice = createSlice({
  name: 'markers',
  initialState,
  reducers: {},
  

extraReducers: (builder) => {
  builder
    .addCase(fetchMarkersBySearch.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchMarkersBySearch.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.markers = action.payload;
    })
    .addCase(fetchMarkersBySearch.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
},

});

 

// export const { addMarker } = markersSlice.actions;
export default markersSlice.reducer;
