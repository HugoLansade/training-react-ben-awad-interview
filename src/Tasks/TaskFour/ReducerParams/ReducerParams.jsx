export const ACTIONS = {
    INCREMENT_LIMIT : "incrementLimit",
    DECREMENT_LIMIT : "decrementLimit",
    INCREMENT_OFFSET : "incrementOffset",
    DECREMENT_OFFSET : "decrementOffset"
}

export const initialState = {limit: 5, offset : 0};
  
    
export const reducer = (state, action) => {
      switch (action.type) {

          case ACTIONS.INCREMENT_LIMIT: 
              return { ...state, limit : state.limit + 1};

          case ACTIONS.DECREMENT_LIMIT:
              return { ...state, limit : state.limit - 1};

          case ACTIONS.INCREMENT_OFFSET:
              return { ...state, offset : state.offset + 1};

          case ACTIONS.DECREMENT_OFFSET:
              return {...state, offset : state.offset - 1};

          default:
              console.log("error in switch reducer")
          throw new Error();
      }
  }