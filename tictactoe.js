let Gameboard = (() => {
    let gameboard = ['c','x','v','','','','','',''];

    let display = () =>{
        let blocks = document.querySelectorAll('.part');
        blocks.forEach((e,index) =>{
            e.textContent = gameboard[index];
            console.log(e);
        })
    }

    return{gameboard,display};
})();



let createplayer = (name,mark) =>{
    return {name,mark};
}


let Game =(() =>{
    let players = [];
    let currentplayer = 0;
    let gameover = false;
    let start = () =>{
        createplayer(document.getElementsByName('player1').value,'X')
        createplayer(document.getElementsByName('player2').value,'O')
        currentplayer = 0;
        gameover = false;
        Gameboard.display();
    }

    return{start};
    
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