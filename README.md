# Space Wars: Diplomacy

➡️ Demo: https://noktnl.github.io/space-wars-demo/

### Note: the link above and this repo displays the demo UI without any the real blockchain functionality. For the live blockchain version, please refer to the [original repo](https://github.com/general-computer/space-wars)

Welcome to the source code reposition Space Wars. We are one of the first live products to come out of the Chainlink 2022 Spring Hackathon.

We've created this experimental game design to see how exogenus play affects blockchain games. This code is in an alpha state and should be not be used for production, investment, or any use.



<img width="1199" alt="Screenshot 2022-07-04 at 1 14 41 PM" src="https://user-images.githubusercontent.com/94875599/177152818-c9da3579-cca8-4b04-b524-ba754766f05e.png">



## Basic Gameplay Overview
Space Wars is an on-chain strategy game with player-run alliances and diplomacy.

After mint, a random location is chosen for each spaceship. In the quickly contracting universe, only one ship is allowed to enter the space-time gap to escape the fate of annihilation...

The ships need to use the dark matter harnessed every day to upgrade itself and destroy the excess matter in the universe (that is, other ships) to be the last survivor.

## Technical Implementation Details

### Backend
We've chosen to deploy to Ethereum Mainnet for robustness, at the expense of higher gas costs. This game is not designed to be an efficient investment scheme, or any sort of permanent platform: each round is a self-contained project, and once the  prize money is paid out, the NFTs are primarily for display. 

### Frontend

_Space Wars: Diplomacy_ is developed as a fully decentralized app: if you receive a compressed copy of the website , you should be able to unpack it, open it in your browser, and, upon connecting to the blockchain, be able to access all of the features of the application.

#### React & Redux
React was chosen for speed of development and because of the familiarity of @NokTNL, our front-end developer.

#### Ethers.js
While we have worked successfully with web3.js before, our backend developer appreciates the more modern implementation of ethers.js to connect to our customer's wallets.

#### Bootstrap + Styled Components
Making everything look good on the frontend isn't easy, so we picked up a styling framework and some styled components to help out.

# Contributors
For the front end, we utilized the considerable skills of @nokTNL to do React development: using his self-maintained collection of tools, he's produced graphics and code displaying ten thousand tiles quickly and quietly. As the contract itself functions as the backend, @kibou provides an efficient, secure implementation of our ERC-20 Energy Points and keeps tally of each spaceship's shield.
