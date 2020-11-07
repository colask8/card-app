/* eslint-disable */
import _ from 'lodash';


export const cardsReducer = (state = [], { type, payload }) => {
    
    let s = state;
    switch(type) {
            case 'ADD_CARD':
                if (payload) {
                    const {name, cardNo, expiry} = payload;
                
                    if (
                        name && typeof(name) !== 'undefined' &&
                        cardNo && typeof(cardNo) !== 'undefined' &&
                        expiry && typeof(expiry) !== 'undefined' && expiry instanceof Date
                    ) {
                        let id = s[s.length-1].id++;
                        const newCard = {
                            id,
                            name,
                            cardNo,
                            expiry
                        }
                        const newState = [
                            ...state,
                            newCard
                        ]
                        _.orderBy(newState, 'id', 'asc');
                        return newState
                    }
                }
                return state;
            case 'EDIT_CARD':
                if (payload) {
                    const {id, name, cardNo, expiry} = payload;
                    
                    if (
                        id && typeof(id) !== 'undefined' && !Number.isNaN(id) &&
                        name && typeof(name) !== 'undefined' &&
                        cardNo && typeof(cardNo) !== 'undefined' &&
                        expiry && typeof(expiry) !== 'undefined' && expiry instanceof Date
                    ) {
                        let edited = {
                            id,
                            name,
                            cardNo,
                            expiry
                        }
                        let index = state.indexOf((elem) => elem.id === id);
                        s.splice(index, 1);
                        let newState = [
                            ...state,
                            edited
                        ]
                        _.orderBy(newState, 'id', 'asc');
    
                        return newState;
                    }
                }
                return state;
        default:
            return state;
    }
}

export default cardsReducer;