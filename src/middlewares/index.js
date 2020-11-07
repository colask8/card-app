export const eventsMiddleware = () => next => action => {
    console.log("ACTION: ", action);
    return next(action);
}

export default eventsMiddleware;