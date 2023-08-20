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

There are 2 versions of the Taxi Queue Widget - one with *no API* and the other *with an API*.

Fork and clone this repo in your projects folder.

```
git clone https://github.com/codex-academy/taxi-queue-app-uj-2023
```

Next install the project dependencies:

```
npm install
```

Run the app using this command:

```
npm run dev
```

Open the app in a browser using: 

```
http://localhost:3015
```

### No API

First make the widget function in the `public/no-api` folder functional.

Make changes in the `taxi-queue.no-api.js.js` & `index.html file`

That widget is not using an API and after a browser refresh application state will reset to 0.

There are **no unit tests** for this widget.

### With an API

* Next work on the widget in the `public/with-api` folder.
* Make all the unit tests pass in `taxi-queue.test.js`. Run the tests using `npm test`. 
* **Don't change** the test file `test/taxi-queue.test.js`.

* Implement the required API endpoints in the `index.js` file
* Implement the required sql code in the `taxi.sql.js` file
* Make sure the widgets data is not lost after a browser refresh.
* Use `axios` to call the API end points from `AlpineJS`.

## For & clone

Fork and clone this repo.
Commit you changes to GitHub regularly.

## Deploy

Deploy your app the [Render](render.com) - share the deployed URL in the feedback system.

## Work submission

Check your Email for the links to submit your App URL (render.com) and the URL to your GitHub repository on feedback.projectcodex.co.


Spend the first 30 minutes of your assessment on planning. Read through all the different scenarios & create a Kanban Board with the tasks you think you need to complete. Email a link to your Kanban board to `uj-mentors@projectcodex.co`. Create pseudo code using code comments to help you think through what you need to do.
Ask for help

Ask if you need help or clarity
	
And make sure you submit your final links by latest **16h00**.
