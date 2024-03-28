let Gameboard = (() => {
    let gameboard = ['','','','','','','','',''];
    let winSituations = [
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ];
    
    
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
                Game.nextTurn();
        }
    }
    const clear = () =>{
        gameboard = ['','','','','','','','',''];
    }

    const check =() =>{
    //  winSituations = [  [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]   ];
        let win = 2;
        // win = 1 for player O  and win = 0 for player X
        

    }


    return{display,upgrade,clear,check};
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
        Gameboard.clear();
        players = [
            createplayer(document.getElementsByName('player1').value,'X'),
            createplayer(document.getElementsByName('player2').value,'O')
        ];
        currentplayer = 0;
        gameover = false;
        Gameboard.display();
        massage.textContent = players[currentplayer].name;
    }
    
    const boxChoosed = (index) => {
        //update data
        if(gameover == false){
            Gameboard.upgrade(index,currentplayer);
            gameover = Gameboard.check();
        }
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