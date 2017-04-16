[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Tic-Tac-Toe Project Client

Tic Tac Toe:  Game project by Joni Fallon

This game is coded to allow for a single-player to enjoy a game of Tic Tac Toe.
Player will play against him/herself, taking turns as both X and O.

The code was written using Javascript, JSON, JQuery, Bootstrap, CSS and HTML.  An API is in
place to track the number of user games.

PLANNING

I began by creating a wireframe for the project.
http://imgur.com/dU7mtAl

User Stories:
a. As a user, I want to sign up to play a game
b. As a user, I want to sign in to play a game
c. As a user, I want to change my password
d. As a user, I want to sign out of the app
e. As a user, I want to play Tic Tac Toe
f. As a user, I want to be able to see my win/loss record
g. As a user, I want to be able to play on a mobile device
h. As a developer, I want to use API to communicate game information to users
i. As a developer, I want users to see buttons appropriate for their task at hand.

CODING APPROACH

I began by coding the game logic which required several iterations.  I then
worked through CSS, Bootstrap, and HTML to layout the design.  I then put in
user facing messages to inform the user about the status of authentication

CHALLENGES

My first attempt at the logic for determing a winner was not successful, so I
started over with a different approach.

NEXT STEPS

I would like to refactor my code to make it more efficient.

GAME PLAY

1. ACCESS

Open web browser and point it to: https://jonifallon.github.io/tic-tic-toe/

2. AUTHENTICATE

Existing users should select the Signin button to authenticate with user email
and password.

New users should create an account by selecting the Sign Up button and completing
the email and password fields.  After successfully signing up, select Sign In to
authenticate.

3. PLAY

1. Select New Game
2. Player X always goes first.  Select a tile as player X.
3. Select a different tile as player O.
4. Continue until a player wins or the game is declared a tie (CAT game).

4. VIEW STATS

Player stats are displayed on the screen.

5. SIGN OUT

When you no longer wish to continue playing, select Sign Out.

## Dependencies

Install with `npm install`.
Start with `grunt serve`.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
