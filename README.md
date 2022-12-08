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