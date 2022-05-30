# Taxi queue app

A local taxi association needs some help to manage queues at some of their taxi ranks.

<span style="float: left">
	<img src="queue.png" alt="" width="100" style="display:inline-block" >
	<img src="queue.png" alt="" width="100" style="display:inline-block" >
	<img src="queue.png" alt="" width="100" style="display:inline-block" >
	<img src="minivan.png" alt="" width="100" style="display:inline-block">
	<img src="arrow.png" alt="" width="100" style="display:inline-block">
	<img src="minivan.png" alt="" width="100" style="display:inline-block">
</span>

They need a web widget which rank managers can use to keep track of how many people are joining and leaving taxi queues. They also want to keep track of how many taxis are queueing.

## Instructions

The widget should keep track off:

* People joining the queue 
	- add 1 to the queue
* People leaving the queue 
	- remove 1 from the queue
* Taxis joining the queue 
	- add 1 to the taxi queue
* Taxis leaving the queue:
	- remove 1 from the taxi queue
	- remove 12 people from the people queue
* A taxi can only leave if there are enough people (12 people) in the queue to fill the taxi.


## Instructions

* Make all the unit tests pass in `taxi-queue.test.js`. Run the tests from `test/index.html`.
* HTML & CSS for this widget in `index.html`
* Some failing unit tests that you need to stop failing by implementing the TaxiQueue Factory Function in `taxi-queue.js`. Don't change the test file `test/taxi-queue.test.js`
* A Factory function skeleton is in the `taxi-queue.js` file.
* Implement the DOM functionality in the `taxi-queue.dom.js` file.

## Add localStorage

Once your widget is done store all the queue counters in localStorage be sure that the data is shown correctly after a refresh.
### Add a unit test for localStorage
Add a unit test/s to show that your Factory Function's constructor can initialize the people and taxi queue count.

## For & clone

Fork and clone this repo.

## Send links for review

* Planning: Send your Problem Solving Template and Kanban Board by 10:30 (they should be mostly complete; and you can still update them after this) 
	* Problem Solving Template: <a href="https://docs.google.com/document/d/1LwuNMhYG88aA5OsvNQRccxpmLz7JmfUOPUTEa1PNLX8/copy" target="_blank">Problem Solving Template</a>
	* Complete this form to send your <a href="https://docs.google.com/forms/d/e/1FAIpQLScvytVS_p_Y7ZZ3gXwo9JAhwGlS_X95oMlZu13o9FQdATZLpA/viewform"  target="popup" rel="nofollow">PLANNING links</a>
* Github Repo & Deployed Apps: 
	* Complete this form to send your <a href="https://docs.google.com/forms/d/e/1FAIpQLScf6UGysuph5wz_ZAtJXcqlQoQfuOdOpH_vdsbZmyMKQF5aPg/viewform" target="_blank">GITHUB Links</a>
	
And make sure you submit your final links by latest **16h00** on **30 May 2022**.
