import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSeachTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addCar(state, action) {
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            });
        },
        removeCar(state, action) {
            const updated = state.data
                .filter((car) => car.id !== action.payload)
            state.data = updated;
        },
    },
    extraReducers: {

    }
});

export const { changeSeachTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;