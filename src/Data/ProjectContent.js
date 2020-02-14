const SocialQR = {
    title : "Social QR",
    content : "Android application that allows users to exchange multiple social media accounts with a single QR Code.",

    content2 : "Hey whats your, linkedin? facebook? instagram? snapchat? skype?",
    content3: "Hey whats your, SQR?",

    carouselPics : ["./images/SocialQR/loginScreen.jpg",
                    "./images/SocialQR/homeScreen.jpg",
                    "./images/SocialQR/myQRCode.jpg",
                    "./images/SocialQR/myInfo.jpg",
                    "./images/SocialQR/QRCamera.jpg",
                    "./images/SocialQR/friendList.jpg",
                    "./images/SocialQR/friendInfo.jpg",
                    "./images/SocialQR/accountPage.jpg"],

    github : "https://github.com/Henry-Lam/Social-QR"
}

const LocationApp = {
    title : "Locate",
    content : "Android application that allows users to save and retrieve a map display of their parking location.",
    content2 : "Users can also generate and send google maps links to their exact location to friends, to improve pick up coordination.",
    content3 : "",
    carouselPics : [
        "./images/LocateApp/locateDisplayHome.png",
        "./images/LocateApp/locateDisplayPark.png",
        "./images/LocateApp/locateDisplayHistory.png",
        "./images/LocateApp/locateDisplayFind.png",
        "./images/LocateApp/locateDisplayPosition.png",
    ],

    github : "https://github.com/Henry-Lam/Locate_App"
}

const MiniGames = {
    title : "Mini Games",
    content : " Arithmetic game / Card-Flip Memory Game / Button clicking challenge",
    content2 : "User can customize experience while in games (color theme, difficulty, background music)",
    content3 : "Score board keeps track of user's past play through scores, locally",
    carouselPics : [
        "./images/MiniGames/miniGameLevels.png",
        "./images/MiniGames/miniGameCustom.png",
        "./images/MiniGames/miniGameMath.png",
        "./images/MiniGames/miniGameMathEnd.png",
        "./images/MiniGames/miniGameMathEnd2.png",
        "./images/MiniGames/miniGameFlipCard.png",
        "./images/MiniGames/miniGameFlipCardEnd.png",
        "./images/MiniGames/miniGameButtonClick.png",
        "./images/MiniGames/miniGameButtonClickEnd.png",
        "./images/MiniGames/miniGameScoreBoard.png",
        "./images/MiniGames/miniGameScoreBoard2.png",

    ],

    github : "https://github.com/Henry-Lam/MiniGames.git"
}


const OnlinePiano = {
    title : "Online Piano",
    content : "Your Computer Keyboard is now a Piano Keyboard!",
    content2 : "Key presses initiate Piano audio and animates images to move across the screen.",
    content3 : "Users can be guided to play songs with displayed letters on screen",
    content4 : "Correct key presses shoot music note images towards the letter with collision effects",
    display :"./images/OnlinePiano/onlinePianoDisplay.PNG",
    iconImg : "./images/OnlinePiano/musicIcon.png",
    github : "https://github.com/Henry-Lam/OnlinePiano",
    host : "https://henry-lam.github.io/OnlinePiano/"
    // comment
}

const BlackJack = {
    title : "BlackJack & Probability",
    content : "Play BlackJack as the dealer (without choice restrictions) against 3 AI bots.",
    content2 : "Developed an algorithm that forcasts the probabilities of all possible future outcomes based on current scenario ",
    content3 : "up to the end of the game to determine the best next move to maximize amount of winnings ($).",
    content4 : "Full Stack, MongoDB as userdatabase, handles API requests, data encryption and page routing",
    display :"./images/BlackJack/BlackJackDisplay.PNG",
    iconImg : "./images/BlackJack/blackjackIcon2.png",
    github : "https://github.com/Henry-Lam/ProbBlackJack",
    host : "https://probblackjack.herokuapp.com/",
}


export { SocialQR, LocationApp, OnlinePiano, MiniGames , BlackJack}