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
        } else {
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
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }   
}; 

//function to start new game
var startGame = function () {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            // let user know what round they are in, remember that arrays start at 0
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));
            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];
            //reset enemyHealth before starting new fight
            enemyHealth = 50;
            fight(pickedEnemyName);
            if (playerHealth > 0 && i < enemyNames.length -1) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if (storeConfirm) {
                    shop();
                }
            }
            } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    } 
    //play again
    endGame();
};

// function to end the entire game
var endGame = function() {
    window.alert("The game has not ended. Let's see how you did!");
    if (playerHealth > 0) {
    window.alert("Great job, you've survided the game! You now have a score of " + playerMoney + ".");
    } else { 
    window.alert("You've lost your robot in battle");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};
var shop = function() {
    var shopOptionPrompt = window.prompt("Would you like to REFILL your healt, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    switch (shopOptionPrompt) {
        case "REFILL": 
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enought money!");
            }
            break;
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7; 
            }
            else {
                window.alert("You don't have enought money!");
            }
            break;
        case "LEAVE": 
        case "leave":
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }
}
// start the game when the page loads
startGame();
