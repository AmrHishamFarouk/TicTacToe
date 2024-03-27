let Gameboard = (() => {
    let gameboard = ['','','','','','','','',''];

    const display = () =>{
        let blocks = document.querySelectorAll('.part');
        blocks.forEach((e,index) =>{
            e.textContent = gameboard[index];

            e.addEventListener('click',()=>{
                Game.boxChoosed(index);
            });
            
        })
    }

    const upgrade =(index,currentplayer)=>{
            if(gameboard[index] == ''){
                if(currentplayer == 0){
                    gameboard[index] = 'X';
                    Gameboard.display();

                }
                else{
                    gameboard[index] = 'O';
                    Gameboard.display();

                }
        }
    }

    return{display,upgrade};
})();


let createplayer = (name,mark) =>{
    return {name,mark};
}


let Game =(() =>{
    let players = [];
    let currentplayer = 0 ;
    let gameover = false;
    let massage = document.querySelector('#massage');
    
    const start = () =>{
        players = [
            createplayer(document.getElementsByName('player1').value,'X'),
            createplayer(document.getElementsByName('player2').value,'O')
        ];
        currentplayer = 0;
        gameover = false;
        Gameboard.display();
        massage.textContent = players[0].name;
    }
    
    const boxChoosed = (index) => {
        //update data
        Gameboard.upgrade(index,currentplayer);
    }

    const nextTurn = () =>{
        currentplayer = currentplayer == 0 ? 1 : 0;
        massage.textContent = players[currentplayer].name;

    }
    return{start,boxChoosed,nextTurn};
    
})();

let startbtn = document.querySelector('.startbtn');
startbtn.addEventListener('click',() =>{
    Game.start();
})
