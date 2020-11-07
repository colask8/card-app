import { combineReducers } from "redux";

export function mergeReducers(reducerSets = []) {
    let reducers = []
    let combined = {}
    for (const rs of reducerSets) {
        combined = {
            ...combined,
            ...rs.combined
        }
    }
    reducers.push(combineReducers(combined));

    return (s, a) => {
        let state = s;
        for (const r of reducers) {
            state = r(state, a)
        }
        return {...state}
    }
}

export function mergeReducersInitState(initStateSets = []) {
    let initState = {}
    for (const iss of initStateSets) {
        initState = {
            ...initState,
            ...iss
        }
    }
    return initState;
}

export default mergeReducers;