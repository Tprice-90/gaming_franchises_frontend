# gaming_franchises_frontend
 Angular project featuring my favourite gaming franchises

## Goal
I will attemp to build a Single Page Application using Angular 14, which will be a collection of my favourite gaming franchises.

This project will be a recreation of (https://github.com/Tprice-90/T_Price_WEB601Assignments_GamingFranchises)[T_Price_WEB601_GamingFranchises], which I will be using as a reference for component creation, as well as (https://angular.io/docs)[Angular.io] for any further queries. I will attempt to build the front end to be able to consume the Express backend API (https://github.com/Tprice-90/gaming_franchise_backend)[gaming_franchises_backend]. 

This project will utilize Angular Material, service workers, and lazy loading. GitHub Desktop for version control

## Journey

### 2022/11/15

- I will start by creting the initial Angular CLI project with `ng new gaming-franchises-frontend`
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

- First step will be to develope the game-card component to display all of the game data

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
