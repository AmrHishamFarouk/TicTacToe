let Gameboard = (() => {
    let gameboard = ['c','x','v','','','','','',''];

    const display = () =>{
        let blocks = document.querySelectorAll('.part');
        blocks.forEach((e,index) =>{
            e.textContent = gameboard[index];
            console.log(e);
            e.addEventListener('click',Game.boxChoosed(index))
        })
    }

    return{display,};
})();

//why cannot i use dom propperly with closures

let createplayer = (name,mark) =>{
    return {name,mark};
}


let Game =(() =>{
    let players = [];
    let currentplayer;
    let gameover;
    
    const start = () =>{
        createplayer(document.getElementsByName('player1').value,'X')
        createplayer(document.getElementsByName('player2').value,'O')
        currentplayer = 0;
        gameover = false;
        Gameboard.display();
    }
    
    const boxChoosed = (index) => {
        if(gameboard[index] == ''){
            if(currentplayer == 0){
                gameboard[index] = 'X';
            }
            else{
                gameboard[index] = 'O';
            }
        }
        Gameboard.display();
    }


    return{start,boxChoosed};
    
})();

let startbtn = document.querySelector('.startbtn');
startbtn.addEventListener('click',() =>{
    Game.start();
})








// function createplayer (player,symbol){
//     let name = player;
//     let score = 0;
//     let givescore = () => score++;
//     let getscore = () => score;
//     return {name,symbol,givescore,getscore};
// }

// const amr = createplayer('amr','x');
// amr.givescore();
//  console.log(amr);