var readlineSync = require('readline-sync');
var playerName = readlineSync.question('what is your name?');

const welcomeMessage = `Welcome ${playerName}, This is your challenge!`;
console.log(welcomeMessage);

let playersLife = true;
let foundKey = false;

while(playersLife ==  true){
     const menuID = readlineSync.keyIn('Press 1 to put your hand in hole \n Press 2 to Find the key \n Press 3 to Open door:', {limit: `$<1-3>}`});
     if(menuID ==1){
        
        console.log(`You fool! ${playerName}, You just killed yourself, Game over`);
    }
    else if(menuID ==2 && hasFoundKey == false){
       
        console.log(`${playerName}, Smart thinking, you found they key! proceed to the next stage and hope it's freedom`);
        hasFoundKey = true;   
    }
    else if(menuID ==2 && hasFoundKey == true){
        console.log(`${playerName}, You have they key now, Go to number 3! RUN!`);
   } 
   else if(menuID == 3 && hasFoundKey == false){
        console.log(`${playerName}, It will not be that easy, If you dont find the key you will never leave`);
   }
   else if(menuID == 3 && hasFoundKey ==  true){
    console.log(`${playerName}, You made it out! Today is your lucky day!`);
   }
}
