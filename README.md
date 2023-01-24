# gaming_franchises_frontend
 Angular project featuring my favourite gaming franchises

## Goal
I will attemp to build a Single Page Application using Angular 14, which will be a collection of my favourite gaming franchises.

This project will be a recreation of [T_Price_WEB601_GamingFranchises](https://github.com/Tprice-90/T_Price_WEB601Assignments_GamingFranchises), which I will be using as a reference for component creation, as well as [Angular.io](https://angular.io/docs) for any further queries. I will attempt to build the front end to be able to consume the Express backend API [gaming_franchises_backend](https://github.com/Tprice-90/gaming_franchise_backend). 

This project will utilize Angular Material, service workers, and lazy loading. GitHub Desktop for version control

## Journey

### 2022/11/15

- I will start by creating the initial Angular CLI project with `ng new gaming-franchises-frontend`
    - Will install routing by default
    - Using SCSS for Angular Material implementation
- Removing all content in app.component.html, will replace with <router-outlet> for routing
- Components to be created:
    - `ng g c component/game-list`  Will display all games
    - `ng g c component/game-card`  Will display individual game
    - `ng g c component/game-detail`    Will display more detailed game information
    - `ng g c component/update-game`    Will update game based on previous info
    - `ng g c component/add-game`   Will add a new game
    - `ng g c component/delete-game`    Will delete a game
- Services to be created:
    - `ng g service services/game-service`  Will be used to connect to backend API
    - `ng g service services/log-update-service`    To update page when app us modified
    - `ng g service services/message-service`   To display message for user interation

- First step will be to develop the game-card component to display all of the game data

### 2022/11/18
- One thing I forgot to include was a helper file game-interface.ts which will contain the
  typing of each game variable to a specific type to prevent typing issues
    - id will be an optional number
    - title will be required string
    - description will be required string
    - creator will be required string
    - imgURL will be optional string
    - type will be optional string
    - tags will be optional string array

### 2022/11/21
- In game-card.component.ts, declared @Input() game for class binding
- Realized I forgot to install Angular Material with `ng add @angular/material`

### Issue
When first adding Material, revieved error **NOT SUPPORTED: keyword "id", use "$id" for schema ID**
I did some searching and could not find anything related to this error and Angular Material
installation. I decided to remove the package, do an update to node modules with `npm update` and
tried re-installing the package and that seemed to fix the issue, Material installed successfully.
I really don't like when I fix things without knowing WHY it's fixed...

- I installed Material with a custom theme which will be:
    - Primary: Indigo: 700
    - Secondary: Blue-Grey: 400
    - Warning: Red: 500
- This theme will be consistent for all components by creating theme.scss and adding it to the styles
  array in angular.json

### 2022/11/21

- In order to really develop the game card component, I need to first get the app connected to the
  backend with the game.service.ts file
- Will implement httpClientModule
    - injected HttpClientClient into app.module.ts
    - HttpClient, HttpHeaders, Observables, of in game.service.ts
- First function will be to return single item of type <Game> based on ID
- Through PhpMyAdmin, added an entry to use for testing once I finish the Game Card
- Added Mat-Card module to app.module.ts
- Used original html template from previous project and modified a bit to use for testing

### Issue
When running the project, everything compiled properly, however looking into the console, there is
a CORS error, I think the sollution will be to update the Express project to allow CORS.

### 2022/11/27
- Solved CORS issue by installing and configuring cors on backend server
- Had another issue afterwards where request was not sending properly, but fixed it by correcting the
  `gameURL` variable in game-service.ts file, though card is not loading properly still
- Will take a break from this component development and switch to
  Game List component to work through issue with no data being
  recieved from backend, game-card.component will be set like 
  previous project to prevent any further issues

### 2022/12/02
- Instead of creating a new branch, I'm going to develop the game-list component (Which I should
   have done first to begin with) here in order to provide a list function for the content card

### ISSUE

Data from the API was not being processed properly. After a lot of googling and scanning the code
from the original project, I found the error that I made:
  - First did a console log within the subscription to the getGames in the content-list component
  - the data returned as expected but no cards were displaying in the browser
  - The refference within the <app-game-card> call in the game-list.component.html, I used *ngFor
    to itterate through the data but never bound the input to the itterable. 

### 2022/12/06

- Now that content is pulled from the api and displayed properly, I will now be implimenting the
  add-game component
- New function create() will be added to game.service.ts file to send a post request to api
- Dialog box will be added to add-game component, add-game component html will include a button
  which will contain the function openGameDialog() (MatDialogModule added to app.module.ts)
  and onNoClick() which will close the dialog box
- Will also need to create a component for game-dialog-box, used to add AND modify content
  - `ng g c components/game-dialog-box`
- Html for dialog box will be copied from original project
  - MatFormInput and MatToolTip will be added to app.module.ts

### 2022/12/08

- Update-game component will borrow from add-game component functions, but Event emitter will
  be an update call rather than a create call

### 2022/12/12
- Ran into an issue with the tags portion of the service, after researching how it works, I was
  implmeneting this improperly, I need to reconfigure the backend to have a one to many relationship
  which I will figure out later, for the time being I am commenting out all use of the tags property.
- Added addGameToList() to game-list component which is the value emitted from the newGameEvent 
  EventEmitter contained in the add-game-component, this function calls the getAll() function from
  game-service when a new game is added in order to update the page without having to refresh the
  page after the post call is made

### 2022/12/16
- Haven't updated this in a couple days due to troubleshooting the update-content component
- Had an issue where I couldn't inject all the data into the dialog box when the component 
  was used in the content-card component, turned out the issue was I was using the wrong
  ngModel declaration, was using newGame, which was an object of empty variables used
  for the component, changed the declaration to the @Inject data variable and now the 
  data is being injected properly to be update
- Also had to update the update() method in game-service because it wasn't taking an id
  which is needed on the backend
- added a few console.logs to make sure all data was appearing in each of the components
- Moved create() function from the add-game component into the dialog component due to the fact
  that if the dialog box was closed without submitting, it would still send data to the backend
  resulting as an undefined entry and receiving an error response from the server
- Currently, Update function in dialog component is not functioning, not sure if it is an error
  on the front end service or the backend route, more researching will need to be done

### 2022/12/20
- Had to revert all changes made since moving the create() function to the dialog, did not test properly
  and noticed that adding a new game was not sending to the server
- Still have an issue where even when the dialog is closed without clicking Add Game, undefined data is
  being sent to the server, issue is with add-game components afterClose() method holding the create()
  function
- Solved this issue with an if() check to see if data is true else return
- Fixed an issue on the back end with the SQL Update statement 
- Update Game component now takes in Mat Dialog Data properly and sends the data to the server
- Next step is to update the game list when the Update is made

### 2022/12/21
- Had to add a condition to dialog box components submit button to check if the data being injected for
  the title existed to determine if the button should add content or update content

### 2023/01/05
- Next step will be to implement a delete button component that will be injected into each game card
  idea is for the game id to be used as a reference to the button to call the delete function from
  the game service
- Added delete button template to delete-game component, click function needs to be created
- Added delete function to game service
- deleteGame() takes an id number as a param, then calls tha delete from game service, on testing
  the server was not finding the object, added a console log to the ngInit found ID was undefined
- still getting an error response from the server: 
    message: "Http failure response for http://localhost:3000/games/9: 404 Not Found"

### 2023/01/09
- Solved delete issue with delete function, error was on the backend where the remove function
  had an id parameter which was missing a '/' which was causing an error with url pathing.
  Deleting a game works properly now but I realize I need to create a confirmation for
  proper accessibility, will work on that now.

### 2023/01/10
- After doing some googling, since I didn't want to have to create a new component for a confirm
  delete dialog box, found [this](https://stackoverflow.com/questions/52311173/angular-material-create-dialog-box-in-same-component-as-existing-functionality) stackOverflow
  article which describes how to use an ng-template-ref to open a dialog box in the same component.
  I used the code provided and edited it to call the delete() method if 'yes' was selected.
  'yes' is tied to matDialogClose reference, if 'no' is selected then the function just returns
  and nothing is deleted
- At this point all CRUD functions are properly implemented, will commit this branch and push to 
  main.
- Next step will to adjust update and delete components to refresh the game-list component after
  call has happened, at this point the page needs to be refreshed manually which is poor 
  accessibility.

### 2023/01/13
- Cleaned up game-list component ngOnInit function to call addGameToList() to reduce redundant code
- Cleaned up add-game variables, removed tempID and added id to newGame object with undefined,
  removed id @Input because no longer needed
- Trying to figure out how to properly update the page has been unsuccessful so far
- Tried creating a function updateGame() in game-card component which would reassign the values
  for the card with the emitted data from the update-game component but so far it has not worked

### 2023/01/23
- Did some googling on how to properly use BehaviorSubject in order to keep an updated subscription
  to a list of games and any updates to that list
- Found [this](https://github.com/fransyozef/crud-example-angular/blob/master/src/app/items/_services/items.service.ts)
  github repository which utilizes a behavior subject in a service and adjusted the code to use the Game
  model.
- Added a behavior subject with type Game[] which will contain the following functions:
  - getAllGames(): will retrieve the list of games via subscription
  - getSingleGame(): will retrieve a single game from the list
  - addGameToList(): will push a game of type Game to the list
  - updateGameInList(): will find a game by id in the list and update that index vlaue
  - deleteGameFromList(): will find a game by id in the list and splice it from the list
- Next I will refactor the game service getAll() function to push items to the behavior subject

### 2022/01/24
- Forgot I needed to update the getAll() function to use the rxjs .tap() method to populate the behavior
  subject with the items from the database, I will inject this function into the app.component to
  call the function once when the app is started, then whenever the app is restarted it will repopulate
  with any updated data.
- Will also replace the getAll() function in games-list component with the new getAllGames() function
  to instead populate the list from the behavior subject rather than calling the database, this will
  help reduce api calls
- updated game-list html to check for game items with new <section> tag with ngIf that checks if games$
  behavior subject is truthy and calls it as games, also removed newGameEvent since it's no longer needed
- in add-game component, removed addGameEvent and just used the data object in the create() subscription,
  in the same function, added the data object in the addGameToList() subscription
- in delete-game component, removed deleteGameEvent and used the id variable in the data object to
  delete the game item with delete() subscription, also used the id variable to call the deleteGameFromList()
  subscription
- in the update-game component, removed the updateGameEvent and subscribed to the update() function with 
  the injected data, also subscribed to the updateGameInList() function with the injected data
- Now all my crud functions work properly and the game list is properly updated after each function