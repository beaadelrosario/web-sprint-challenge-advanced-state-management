1. What problem does the context API help solve?

The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. It's aimed at solving the problem of prop drilling

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions in Redux are packets of information that contain an action type and associated data In code, an action is simply an object with up to two properties - a type property and an optional.

Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.

The Store: Everything that changes within your application is represented by a single JavaScript Object known as the store. The store contains our state for our application. The store is known as the 'single source of truth' because it's the only place in the app that holds that particular state therefore you know that state will be valid since the reducer is the only thing that is allowed to change that state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

The application state is global and available to the entire application - used when data needs to be widely available to multiple components. Component state is local so not available outside unless passed as props - used when data is only relevant to the component it lives in or it's immediate children.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware that allows us to call action creators which return a function vs an object. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. It changes our action-creators by giving them the ability to execute asynchronous actions.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux- surprisingly I think this  flow is best for me, makes the most sense? makes it easy to debug an application. it is easy to understand coding errors, network errors, and other forms of bugs that might come up during production By logging actions and state. Its Ease of testing. It is easy to test Redux apps since functions used to change the state of pure functions.