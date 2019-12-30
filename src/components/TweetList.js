import React, { useContext } from 'react'
import Store from "../context";

export default function TweetList() {
  const { state, dispatch } = useContext(Store);

  function handleUpdate(tweet) {
    return () => dispatch(
      {
        type: "UPDATE_TWEET",
        payload: {
          id: tweet.id,
          body: document.getElementById(tweet.id).value
        }
      }
    )
  }

  return(
    <ul>
      {
        Object.keys(state.entities.users.byId).map(userId => {
          const user = state.entities.users.byId[userId]

          return (
            <li key={user.id}>
              {user.name}
              <ul>
                {
                  user.tweets.map(tweetId => {
                    const tweet = state.entities.tweets.byId[tweetId]

                    return(
                      <li key={tweet.id}>
                        {tweet.body}
                        <input id={tweet.id} />
                        <button onClick={handleUpdate(tweet)}>update</button>
                      </li>
                    )
                  })
                }
              </ul>
            </li>
          )
        })
      }
    </ul>
  )
}
