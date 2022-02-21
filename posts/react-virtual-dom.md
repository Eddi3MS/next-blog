<!-- # How React works under the hood!

Components mirror an abstract object called Virtual Dom.

Whenever a component state changes the Virtual Dom gets updated.

It gets updated by a diffing algortithm called Fiber.

When you change the state of one component the Virtual Dom node gets updated.

At the next frame that change gets commited to the DOM.

If one node gets no change, the update does not exists and the Virtual DOM has nothing to commit at the next frame.

All of this is abstracted away by React from you.

Your duty is that only: manage the state!

Once a new state is given to a component, the React abstraction will take care of painting the UI for you!

Once you know how to manage the state in React, local or global, you have no other work to do!

React takes away all the DOM manipulation or traversal from you!

Be glad for it!

# Did you know React runs a timer which takes 16ms before committing changes to the DOM?

I was asking myself when React performs the commit phase after running the diffing algorithm and updating the fiber object.
How does it know the time is up to stop that reconciliation phase and go to the real work of painting the DOM nodes with the changes?

I thought there was some other complex aglorithm taking care of this but it is a timer!

Every 16ms, a frame time, the diffing algorithm stops whatever it does, the nodes in VD that had luck to be updated are now committed to the DOM.

The changes that were not yet written into fiber by the reconciliation phase, will go next time there, next 16ms frame!
 -->
