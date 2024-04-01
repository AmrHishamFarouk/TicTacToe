let Gameboard = (() => {
    let gameboard = ['','','','','','','','',''];
    let winSituations = [
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ];
    let winX = 0;
    let winO = 0;
    
    
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
    let gameover = false;
        winSituations.forEach((e)=>{
            let places = e;
            if(gameboard[places[0]]==gameboard[places[1]] && gameboard[places[1]]==gameboard[places[2]]){
                if(gameboard[places[0]] != ''){
                    gameover = true;
                }
            }
        })
        return gameover;
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
            createplayer(document.querySelector('#player1').value,'X'),
            createplayer(document.querySelector('#player2').value,'O')
        ];
        currentplayer = 0;
        gameover = false;
        Gameboard.display();
        massage.textContent = players[currentplayer].name + "s' turn";
    }
    
    const boxChoosed = (index) => {
        //update data
        if(gameover == false){
            Gameboard.upgrade(index,currentplayer);
            gameover = Gameboard.check();
            if(gameover == true){
                massage.textContent = players[currentplayer].name + ' Won';
            }
        }
    }

    const nextTurn = () =>{
        currentplayer = currentplayer == 0 ? 1 : 0;
        massage.textContent = players[currentplayer].name + "s' turn";
    }
    
    return{start,boxChoosed,nextTurn};
    
})();

let startbtn = document.querySelector('.startbtn');
startbtn.addEventListener('click',() =>{
    Game.start();
})

