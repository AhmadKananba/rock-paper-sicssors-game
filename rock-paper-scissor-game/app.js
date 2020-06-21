const game = ()=> {
    let pScore = 0;
    let cScore = 0;
    //Start The Game
    const startGame = () => {
        const playBtn = document.querySelector(".intro Button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");
        
        playBtn.addEventListener("click",() =>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    
    //Play Game
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll('.hands img');
        
        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });
        
        //Computer Options
         const computerOptions = ["rock", "paper", "scissors"];
        
        options.forEach(option => {
            option.addEventListener("click",function() {
                //Computer choice
                 const computerNumber= Math.floor(Math.random()*3);
                 const computerChoice = computerOptions[computerNumber];
                if(computerOptions[computerNumber] >=20){
                     const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }
                }
                setTimeout(() =>{
                    //Here is where we call compare hands
                compareHands(this.textContent, computerChoice);
                
                //Update Images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);
                
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
        
       
        
       
    };
    
   
    
    const compareHands = (playerChoice, computerChoice ) =>{
        //Update Text
        const winner = document.querySelector('.winner');
        //Checking for a tie
        if(playerChoice === computerChoice){
            winner.textContent = 'it is a tie';
            return;
        }
        //Check for Rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'player Wins';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
        
       
              //Checking for paper
          if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Winds';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
        
          if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Ahmad Wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Mohamad Wins';
                pScore++;
                updateScore();
                return;
            }
        }
       
      
    }
    
    //Is call the inner function
    startGame();
    playMatch();
};

//start the game function
game();