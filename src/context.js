import React from "react";

// Store Context is the global context that is managed by reducers.

const Store = React.createContext({
  users: [
    {
      id: 1,
      name: 'Sam',
      tweets: [
        {
          id: 1,
          body: 'first tweet'
        },
        {
          id: 2,
          body: 'second tweet'
        }
      ]
    },
    {
      id: 2,
      name: 'Jen',
      tweets: [
        {
          id: 3,
          body: 'third tweet'
        },
        {
          id: 4,
          body: 'fourth tweet'
        }
      ]
    }
  ]
});

export default Store
