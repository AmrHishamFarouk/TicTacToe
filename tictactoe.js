function Gameboard (){
    let gameboard = [];
    let 
}

function createplayer (player,symbol){
    let name = player;
    let score = 0;
    let givescore = () => score++;
    let getscore = () => score;
    return {name,symbol,givescore,getscore};
}





const amr = createplayer('amr','x');
amr.givescore();
 console.log(amr);