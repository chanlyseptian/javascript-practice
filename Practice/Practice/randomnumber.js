/*
The Computer picks a random number from 1 to 10. Now the Player gets three guesses. As soon as the user enters the correct number the program writes a winning message and exits. If the user fails to enter the correct number in three guesses.
The program is to write "cold" when the guess is 3 or more away from the correct answer, 
"warm" when the guess is 2 away, and "hot" when the guess is 1 away. 
As soon as the user enters the correct number the program writes a winning message and exit.

I am thinking of a number from 1 to 10.
You must guess what it is in three tries.
Enter a guess:
4
cold
5
cold
8
wrong.
The correct number was 9.
You have lost the game.
*/

function randomChances(rand, guess) {
    let chances = 3;

    for(let i = 0; i < guess.length; i++) {
        if(rand === guess[i]) {
            if(chances === 3 || chances === 2 || chances === 1) {
                console.info(`RIGHT! Number ${guess[i]} is matches with the guess number`);
                break;
            }
        } 
        
        else if(rand !== guess[i]) {
            let difference = Math.abs(rand - guess[i]); 

            if(chances === 3 && difference >= 3
            || chances === 2 && difference >= 3 
            || chances === 1 && difference >= 3)
            {
                console.info('cold');
            } 

            else if(chances === 3 && difference === 2 
            || chances === 2 && difference === 2
            || chances === 1 && difference === 2) 
            {
                console.info('warm');
            }

            else if(chances === 3 && difference === 1 
            || chances === 2 && difference === 1 
            || chances === 1 && difference === 1) 
            {
                console.info('hot');
            }
            chances--;
        }
    }
}



const randomNumber = Math.floor(Math.random() * 10);
randomChances(randomNumber, [1,2,5]);