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
        winSituations.forEach((e)=>{
            let places[a,b,c] = e;
            if(places[a]&&places[a]==places[b] && places[b]==places[c]){
                return true;
            }
        })

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








        // for(let j=0; j<8; j++){
        //     winX = 0;
        //     winO = 0;
        //     for(let i = 0; i<3; i++){
        //         if(gameboard[winSituations[j][i]] == 'X'){
        //             winX++ 
        //         }
        //         else if(gameboard[winSituations[j][i]] == 'O'){
        //             winO++ 
        //         }
        //     }
        //     if(winX == 3 || winO == 3) return true;
        //     else{
        //         winX = 0;
        //         winO = 0; 
        //         return false;
        //     }
        // }