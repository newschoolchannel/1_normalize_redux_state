import React from "react";

const Store = React.createContext({
  entities: {
    users: {
      byId: {
        1: {
          id: 1,
          name: 'Sam',
          tweets: [1, 2]
        },
        2: {
          id: 2,
          name: 'Jen',
          tweets: [3, 4]
        }
      },
      allIds: [1, 2]
    },
    tweets: {
      byId: {
        1: {
          id: 1,
          body: 'first tweet'
        },
        2: {
          id: 2,
          body: 'second tweet'
        },
        3: {
          id: 3,
          body: 'third tweet'
        },
        4: {
          id: 4,
          body: 'fourth tweet'
        }
      },
      allIds: [1, 2, 3, 4]
    }
  }
});

export default Store
