import { cardsReducer } from "./cards-reducer";

export const AppDataInitState = {
    cards: []
}

const AppDataReducers = {
    combined: {
        cards: cardsReducer,
    }
}

export default AppDataReducers;