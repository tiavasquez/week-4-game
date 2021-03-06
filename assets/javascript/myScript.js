    $(document).ready(function() {

        // Make our variables global to the runtime of our application
        var randomNumber;
        var crystalValue;
        var runningTotal;
        var totalWins = 0;
        var totalLosses = 0;

        newGame();

        function newGame() {
            //generate random number between 19 and 120 and display on screen
            randomNumber = Math.floor(Math.random() * 102) + 19;
            $("#random-num-display").text(randomNumber);
            runningTotal = 0;
            $("#total-wins-display").text(totalWins);
            $("#total-losses-display").text(totalLosses);
            $("#running-total").text(runningTotal);
            //TO DO: generate random numbers between 1 and 12 for each crystal, and store in crystal value (do not display on screen)
            //Math.floor(Math.random() * 12) + 1;
        } 

        // Add an on click listener to the crystal buttons
        $(".crystal").on("click", function() {
        
        // get the crystal's random value
        crystalValue = this.value;
        
        // Use parseInt to convert our string representation of numbers into actual integers
        crystalValue = parseInt(crystalValue);
        
        // add value of the crystal to the running total
        runningTotal = runningTotal + crystalValue;

        if (runningTotal == randomNumber) {
            totalWins++;
            //refresh total wins on screen
            $("#total-wins-display").text(totalWins);
            //TO DO: show "You won!" on the screen
            newGame();
        }
        else if (runningTotal > randomNumber) {
            totalLosses++;
            //refresh total losses on screen
            $("#total-losses-display").text(totalLosses);
            //TO DO: show "You lost!" on the screen
            newGame();
        }
        else {
             // display the running total in the html id of running-total
             $("#running-total").text(runningTotal);
        }

       

      });
    }); //end of document.ready