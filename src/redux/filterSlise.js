const { createSlice } = require('@reduxjs/toolkit');

const filterSlise = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(state, action) {
      return action.payload;
    },
  },
});

export default filterSlise.reducer;
export const { filterContacts } = filterSlise.actions;
