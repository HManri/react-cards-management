# React Cards Management

**Simple modal-form and visualization of the data as kind of cards**

## ⭐️ Features

-   Create your own cards to see them on the board
    -   Create them with an the image you want from the Internet
    -   Don't forget to write a **title** and a **description**
-   Sort your cards by **creation date** or **name**
-   Don't worry if you close your browser - You're data will be there!

## ⚙️ Techincal Features

-   React application
-   Uses Redux to preserve the state of the application
-   Atomic components defined to use them everywhere we need
-   Theming with JSS
-   Unit testing
-   Pre-commit plugin to be sure to pass linter and tests before every commit

## 💻 Useful scripts

> ## Start
>
> `Yarn`
>
> ```
> yarn start
> ```
>
> &nbsp;
>
> `NPM`
>
> ```
> npm start
> ```
>
> &nbsp;

> ## Test
>
> `Yarn`
>
> ```
> // pass tests
> yarn test
>
> // update snapshots
> yarn test:snapshots
> ```
>
> &nbsp;
>
> `NPM`
>
> ```
> // pass tests
> npm test
>
> // update snapshots
> npm run test:snapshots
> ```
>
> &nbsp;

> ## Lint
>
> `Yarn`
>
> ```
> yarn lint
> ```
>
> &nbsp;
>
> `NPM`
>
> ```
> npm run lint
> ```
>
> &nbsp;

> ## Build
>
> -   ### The build process will generate a **dist** folder into the root of the project
>
> `Yarn`
>
> ```
> yarn build
> ```
>
> &nbsp;
>
> `NPM`
>
> ```
> npm run build
> ```
>
> &nbsp;

## 📜 Features list

-   [x] Button to open a modal with a simple form to introduce data: title, description and an image url - this will be a card.
-   [x] Every card should show an image on the top, a placeholder if there is no URL for the image, and this title and description.
-   [x] When you hover any card, you should see two buttons: edit button and delete button.
-   [x] Edit button should open the form with the data of the card selected.
-   [x] Delete button should delete selected card from the system.
-   [x] Show cards at time they are created.
-   [x] Prevent lose created cards using localStorage.
-   [x] Add buttons to sort cards by name or by creation date
