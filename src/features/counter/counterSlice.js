const initialState = {
  value: 42
}

// Use the initialState as a default value
export function reducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
              case "counter/increment":
                return {... state , value: state.value+1}; 
              case "counter/decrement":
                return {... state , value: state.value-1};
              case "counter/incrementByAmount":
                return {... state, value: state.value+action.payload};
              default:
                return state;
      }
}

export const increment = () => {
  return { type: 'counter/increment' };
}

export const decrement = () => {
  return { type: 'counter/decrement' };
}

export const incrementByAmount = value => {
  return { type: 'counter/incrementByAmount', payload: value }
}