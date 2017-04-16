// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state


// * also, every time an action is dispatched, every reducer will run. 

function comments(state = [], action) {
  console.log(state, action);
  return state;
}

export default comments;