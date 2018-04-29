# Real-Time Engine

The Real-Time Engine is a state manager focused on handling real-time features for React applications.
With a minimum amount of setup, it controls the unidirectional flow and provides as props the updated values from any source.
It stores the state in a tree-like structure where each domain is a branch.

## Usage

It provides two functions: `registerPayloadHandler` and `withRealTime`.

### registerPayloadHandler

The function used to register a payload handler.
Accepts one parameter: Domain, which is the branch in the state where the data will be stored.
Returns a function to be set as the callback on the event stream, every time this function is called it stores the payload on the domain provided.

Example with Firebase:

```
// Imports the registerPayloadHandler from the real-time-engine-package.
import { registerPayloadHandler } from "real-time-engine";

// Creating a handler for  the "posts" domain.
const payloadHandler = registerPayloadHandler('posts');

// Every event that comes through is passed to the handler to be stored.
database.ref('/').on('value', (snapshot) => {
  payloadHandler(snapshot.val());
});
```

### withRealTime

It expects one parameter: Domain, which is the branch in the state where the data will be stored.
Returns a High-Order-Component that wraps a component and map as props the updated values on the domain branch of the state.

Example:

```
import { withRealTime } from "real-time-engine";

const RealTimePostsHOC = withRealTime('posts');
const RealTimePostsList = RealTimePostsHOC(PostList);
```

or shorter version:

```
import { withRealTime } from "real-time-engine";

const RealTimePostsList = withRealTime('posts')(PostList);
```
