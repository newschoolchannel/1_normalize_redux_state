export default function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_TWEET":
      return {
        ...state,
        entities: {
          ...state.entities,
          tweets: {
            ...state.entities.tweets,
            byId: {
              ...state.entities.tweets.byId,
              [action.payload.id]: action.payload
            }
          }
        }
      }
    default:
      return state
  }
}
