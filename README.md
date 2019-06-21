# Petful Server

Adam and Harrison

# API
for this server we are using get requests to look at the first two animals in a list. 

we also use delete requests to delete the first animal in a list. The second animal in a list will then become the fist animal in the list, and the third previusly hidden animal will become the second animal in the list. 

we also have a queue of users that are in line to Adopt animals. 
they are able to post there name and are put into a queue where when they reach the front they will be able to choose from cats or dogs and see the first two of each. 

# Queue
  we implemented a queue data structure that we use to create our lists of animals and users. Inside the Queue class we use a peek function to look at the current first item in the list. we can use an enqueue to add items as the last item in a list. We can also use a dequeue to remove the first item in a list.  