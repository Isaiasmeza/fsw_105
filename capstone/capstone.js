var readlineSync = require('readline-sync');

console.log(`Help! help!... Hey you!  `)
var heroName = readlineSync.question("what is your name hero?: ");
console.log(`Hello ${heroName}!, My name is Shoto. I was being chased from people in the woods who want my money, i'm trying to get to the police station across the village. Please take me  `);

var trophies=[];
var isAlive= true;
var heroHp = 120;

var menu = ()  => {
    var walk = readlineSync.keyIn(`click the " W " to walk with shoto: \nclick  " H "  to look at your hero license: `);
    if(walk == `w` ){
        walking();
    } else if(walk ==  `h`){
        console.log(`**** Hero: ${heroName} Trophies: ${trophies} Hero Hp:${heroHp}*****`)   
    }
}
 var walking = () => {
     console.log(`You are safe... FOR NOW!`)
    var m = Math.random();
     if (m < 0.4){
        anAmbush();
     }
 }
 var anAmbush = () => {
     m = Math.random()
     if( m < 0.3){
         evilNinja();
      } else if (m < 0.4 ){
        evilCowboy();
   }else if (m < 0.5 ){
       theHeroKillerStain();
   }
 }
 var evilNinja = () =>{
     console.log(`evil ninja jumps from the bushes, Hey give me that money!`);
     var e = 30;
     while(isAlive == true){
         var N = Math.floor(Math.random() * 4 + 1);
         var F = Math.floor(Math.random() * 10 + 1);
    if(heroHp <= 0){
         console.log(` ${heroName}You were to weak to protect shoto, you both are dead`);
         isAlive = false;
         
     } else if(e <= 0){
         console.log(`Congrats on defending shoto, ${heroName} keep the evil ninjas death axe!`)
         trophy = `death-Axe`;
         trophies.push(trophy);
         menu();
         break;
     } else if(e != 0 && heroHp != 0){
         var option = readlineSync.keyIn(`To fight type 1 : \nrun with shoto type 2 : `);
         if(option == 1){
              e -= F;
              console.log(`You are strong! evil ninja is hurt by ${F} hp is at: ` + e)
              heroHp -= N;
              console.log(`He is not as strong as he looks! You are hurt by ${N} its not over your at: ` + heroHp)
         } else if (option == 2){
            var run = Math.random();
            if(run > 0.5){
                console.log(`The evil ninja saw you ${heroName} and he fears those known as a hero but He says its not the end`);
                menu();
                break;
            }
         }
        }
   }
}
var evilCowboy = () =>{
    console.log(`Something is running at us fast! you turn and see a man riding a horse with its eyes blood red`);
    var e = 40;
    while(isAlive == true){
        var N = Math.floor(Math.random() * 5 + 1);
        var F = Math.floor(Math.random() * 16 + 1);
   if(heroHp <= 0){
        console.log(` ${heroName}You were to weak to protect shoto, you both are dead`);
        isAlive = false;
        
    } else if(e <= 0){
        console.log(`Congrats on defending shoto, ${heroName} The evil Cowboy is no more take his boot spurs!`)
        trophy = `boot-spurs`;
        trophies.push(trophy);
        menu();
        break;
    } else if(e != 0 && heroHp != 0){
        var option = readlineSync.keyIn(`To fight type 1 : \nrun with shoto type 2 : `);
        if(option == 1){
             e -= F;
             console.log(`Give him hell! YEEEHAA! ${F} hp is at: ` + e)
             heroHp -= N;
             console.log(`this man has power! You are hurt by ${N} its not over your at: ` + heroHp)
        } else if (option == 2){
           var run = Math.random();
           if(run > 0.5){
               console.log(`You can from from me but not from my boss! `);
               menu();
           }
        }
       }
  }
}
var theHeroKillerStain = () =>{
    console.log(`You and shot hear noise and laughter a man feared by villagers emerges: The Hero killer stain! !`);
    var e = 55;
    while(isAlive == true){
        var N = Math.floor(Math.random() * 20 + 1);
        var F = Math.floor(Math.random() * 15 + 1);
   if(heroHp <= 0){
        console.log(` ${heroName} The hero killer has claimed many heroes lives now you are one of them!`);
        isAlive = false;
        menu();
    } else if(e <= 0){
        console.log(`You truly are a Hero!, ${heroName} Take this as a gift... "Shoto give you 1 million dollars YOU WIN THE GAME" `)
        trophy = `1 million dollars`;
        trophies.push(trophy);
        //menu();
    } else if(e != 0 && heroHp != 0){
        var option = readlineSync.keyIn(`To fight type 1 : \nrun with shoto type 2 : `);
        if(option == 1){
             e -= F;
             console.log(`You are strong! evil ninja is hurt by ${F} hp is at: ` + e)
             heroHp -= N;
             console.log(`"I will destroy those who call themselves a hero! ${N} That was painful! Hp: ` + heroHp);
        } else if (option == 2){
           var run = Math.random();
           if(run > 0.0){
               console.log(`No hero has ever ran from Me! You call yourself a hero?`);
               
           }
        }
       }
  }
};
 






while( isAlive ===true){
    menu();
}





