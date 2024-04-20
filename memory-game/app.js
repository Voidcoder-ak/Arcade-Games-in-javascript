const cardArray = [
    {
        name: "fries",
        img: "images/fries.png",
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png",
    },
    {
        name: "hotdog",
        img: "images/hotdog.png",
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png",
    },
    {
        name: "milkshake",
        img: "images/milkshake.png",
    },
    {
        name: "pizza",
        img: "images/pizza.png",
    },
    {
        name: "fries",
        img: "images/fries.png",
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png",
    },
    {
        name: "hotdog",
        img: "images/hotdog.png",
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png",
    },
    {
        name: "milkshake",
        img: "images/milkshake.png",
    },
    {
        name: "pizza",
        img: "images/pizza.png",
    }
];

cardArray.sort(() => 0.5 - Math.random());
const gridDisplay = document.querySelector("#grid")
const resultDisplay = document.querySelector("#result")
let cardChosen = [];
let cardChosenId = [];
const cardWon = []; 


function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "images/blank.png");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard)
        console.log(card, i);
        gridDisplay.appendChild(card);
    }
}

createBoard();




function flipCard() {
    console.log(cardArray);
    const cardId = this.getAttribute("data-id");
    cardChosen.push(cardArray[cardId].name);
    cardChosenId.push(cardId);
    console.log("clicked", cardId);
    console.log(cardChosen);
    console.log(cardChosenId)


    this.setAttribute("src", cardArray[cardId].img);
    if (cardChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}


function checkMatch() {
    const cards = document.querySelectorAll("img");
    console.log(cards);
    const oneId = cardChosenId[0];
    const twoId = cardChosenId[1];

    if(oneId == twoId) {
        cards[oneId].setAttribute('src', 'images/blank.png')
        cards[twoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image!')
    }
    else if (cardChosen[0] === cardChosen[1]) {
        alert("you found a match")
        cards[oneId].setAttribute('src', "images/white.png");
        cards[twoId].setAttribute('src', "images/white.png");
        cards[oneId].removeEventListener("click" , flipCard);
        cards[twoId].removeEventListener("click" , flipCard);
        cardWon.push(cardChosen);
    } else{
        cards[oneId].setAttribute('src', "images/blank.png");
        cards[twoId].setAttribute('src', "images/blank.png");
        alert("sorry try again!");
    }

    resultDisplay.textContent = cardWon.length;

    if (cardWon.length === cardArray.length/2){
        resultDisplay.textContent = ("Congraturations You Won!!")
    }

    cardChosen = [];
    cardChosenId = [];
}



