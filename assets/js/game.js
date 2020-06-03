var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10; 

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyNames) {
    //repeat and execute as long as the enemy robot is alive
    while(enemyHealth > 0 && playerHealth > 0) {
     
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    // if player choses to skip
    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
        if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subract money from playerMoney for skipping
        playerMoney = playerMoney -10; 
        console.log("playerMoney", playerMoney);
        break; 
        }
    }

        // remove enemy's health by subtracting the amoutn set in the player Attack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining.");
    
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyNames + " has died!");
            
            //award player money for winning
            playerMoney = playerMoney + 20; 

            // leave while() loop since enemy is dead
            break;
        }
        else {
            window.alert(enemyNames + " still has " + enemyHealth + " health left.");
        }


        // remove player's health by subtracting the amount set in the enemyAttack variable 
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");


        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            // leave while() loop if play is dead
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }   
}; 

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}