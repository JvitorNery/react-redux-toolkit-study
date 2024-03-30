import { configureStore } from '@reduxjs/toolkit';
import { 
    carsReducer,
    addCar,
    removeCar,
    changeSeachTerm
} from './slices/carsSlice';
import {
    formReducer,
    changeName,
    changeCost
} from './slices/formSlice';

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
});

export {
    store,
    addCar,
    removeCar,
    changeSeachTerm,
    changeName,
    changeCost
};


