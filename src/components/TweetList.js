import React, { useContext } from 'react'
import Store from "../context";

export default function TweetList() {
  const { state, dispatch } = useContext(Store);

  function handleUpdate(user, tweet) {
    return () => dispatch(
      {
        type: "UPDATE_TWEET",
        payload: {
          userId: user.id,
          tweetId: tweet.id,
          body: document.getElementById(tweet.id).value
        }
      }
    )
  }

  return(
    <ul>
      {
        state.users.map(
          user => (
            <li key={user.id}>
              {user.name}
              <ul>
                {
                  user.tweets.map(
                    tweet => (
                      <li key={tweet.id}>
                        {tweet.body}
                        <input id={tweet.id} />
                        <button onClick={handleUpdate(user, tweet)}>update</button>
                      </li>
                    )
                  )
                }
              </ul>
            </li>
          )
        )
      }
    </ul>
  )
}
