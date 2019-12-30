export default function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_TWEET":
      const userId = action.payload.userId
      const tweetId = action.payload.tweetId

      return {
        ...state,
        users: state.users.map(
          user => {
            if(user.id === userId) {
              return {
                ...user,
                tweets: user.tweets.map(
                  tweet => {
                    if(tweet.id === tweetId) {
                      return { id: tweet.id, body: action.payload.body }
                    }

                    return tweet
                  }
                )
              }
            }
            return user
          }
        )
      }
    default:
      return state
  }
}
