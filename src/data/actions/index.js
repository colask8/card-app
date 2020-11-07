import { createActions, combineActions } from "redux-actions";

const {
    addCard,
    editCard
} = createActions({
    ADD_CARD: (name, cardNo, expiry) => ({
        name,
        cardNo,
        expiry
    }),
    EDIT_CARD: (id, name, cardNo, expiry) => ({
        id,
        name,
        cardNo,
        expiry
    })
})

console.log("=====", 
    combineActions(
        addCard,
        editCard
    ).toString()
)

export {
    addCard,
    editCard
}