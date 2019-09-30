1. What problem does the context API help solve? Context helps us simplify state management.
   It helps keep us from having to prop drill and provides a way to share values like between components without having to explicitly pass a prop drill.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   Actions: Send data from your application to your store.
   Reducers: A reducer is a function that takes the previous state and an action and returns a new state.
   Store: The store holds the state of your application.
   The store is a single source of truth because the only way to change your data in UI is to dispatch redux action which will change state within redux reducer.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   Application state is global and component state is local.
   Application state is best used in the long term and for states that you need to access throughout the application.
   Component state is best used for short term and if the state only needs updating in that one component.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   Redux thunk is a middleware that lets you call action creators that return a function instead of an action object. Which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.
   It changes the action-creators because it allows the action creators to return a function instead of an action.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
   My favorite state management is Redux. It is a bit to setup initially but I feel it is more organized than going the Context route especially if you app starts to get bigger in scope.
