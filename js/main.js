/*----- constants -----*/
const players = {
    '1': {
        color: 'Blue',
    },
    '-1': {
        color: 'Yellow',
    }
};

const winning_combinations = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [6,4,3],
    [6,7,8],
    [2,5,8],
];

/*----- app's state (variables) -----*/
let moves;
let turns;
let winner; //win, tie, game in play

/*----- cached element references -----*/
let grid = document.getElementById('grid');
let button = document.querySelector('button');
let message = document.querySelector('h1');

/*----- event listeners -----*/
grid.addEventListener('click', handleClick);
button.addEventListener('click', init);


/*----- functions -----*/
init();

function init() {
    moves = new Array(null, null, null, null, null, null, null, null, null);
    turn = 1;
    winner = null; // 'T' if tie
    render();
}

function render() {
    //hide button
    button.style.display = "none";
    //loop over moves elements by forEach use idx of each to get mapped value of board array
    moves.forEach((element, idx) => {
        document.getElementById(idx).style.backgroundColor = element && players[turn].color;
    })
    //render message win, tie, still in progress
    //if win render button
    if(winner !== null) {
        message.textContent = `${players[turn].color}'s turn`;
        button.style.display = 'block';
    } else if(winner === "T") {
        message.textContent = `It's a Tie!`;
        button.style.display ='block';
    } else {
        message.textContent = `Player ${players[turn].color} has won! Congratulations!`;
    }
}

function handleClick(event) {
    //valid move
    if (moves[event.target.id]) return;
    //check if move makes winner
    if (winner) return;
    //make moves X's or O's
    console.log(event.target.innerHTML);
    if(turn ===1)event.target.innerHTML = 'X';
    else {event.target.innerHTML = 'O'};
    //winner

    
}

