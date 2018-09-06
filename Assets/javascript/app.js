   // I couldn't figure out how to move on to the next question which also meant I couldn't get the score to add. 
   
   var number = 30;
    var intervalId;
    var answersCorrect = 0;
    var answersWrong = 0;
    

   $(".answer").on("click", function() {
    var submitButton = "<div><button>submit</button></div>";
    $(".container").append(submitButton);
    
   })    

    $("#start").click(function(){
        $(this).hide();
        counter = setInterval(decrement, 1000);
        displayTrivia();
    });
    
    function decrement() {
        number--;
        if (number === 0) {
            clearInterval(number);
            alert ("Out of Time!");
            number = 30;
        }
        $("#timer").html("Timer:  " + number);
        $("#timer2").html("Timer:  " + number);
    }

    var questionArray = ["What is the tallest building in Chicago?", "Which baseball team plays on the south side of Chicago?", 
"What survived the Great Chicago Fire?","What music festival is held at Grant Park every year?","How many World Series have been won in Chicago in the last 20 years?",
"Who is the greatest runningback to play for the Bears?","What famous pier is located in CHicago?", "How many Stanley Cups have the Blackhawks won in the last 10 years",
"Which famous person was born in Chicago","What is the name of the Chicago downtown area?"];



var answerArray = [["A. The Willis Tower", "B. Hancock Building", "C. Soldier Field", "D. Motel 6 on Lake St"], 
["A. Chicago Fire", "B. Chicago Cubs", "C. Chicago White Sox", "D. Chicago Bulls"],
["A. The Sears Tower", "B. The Water Tower", "C. Portillos", "D. White Castle"],
["A. WoodStock", "B. LollaPalloza", "C. Bonnaroo", "D. Coachella"],
["A. 5", "B. 2", "C. 30", "D. None"], ["A. Michael Jordan", "B. Brian Urlacker", "C. Walter Payton","D. Barack Obama"],
["A. Moreys Pier", "B. Pier 7", "C. Navy Pier", "D. Naples Pier"],["A. 5", "B. 3", "C. None", "D. 10"],
["A. Batman", "B. Walt Disney", "C. Randy Jackson", "D. The Pope"], ["A. Cleveland", "B. The Hood", "C. The Loop", "D. The Suburbs"]];

var correctAnswers = ["A. Willis Tower", "C. Chicago White Sox", "B. The Water Tower", "B. Lollapalooza", "B. 2", "C. Walter Payton", "C. Navy Pier", "B. 3", "B. Walt Disney", "C. The Loop"]; 

function displayTrivia() {
    $("#question").text(questionArray[0]);
    $("#answer1").text(answerArray[0][0])
    $("#answer2").text(answerArray[0][1]);
    $("#answer3").text(answerArray[0][2]);
    $("#answer4").text(answerArray[0][3]);
}





    
    // Select an answer
    // On answer click the psuedo selector (focus) changes color of answer button
    // Display submit button
    // On submit, Grade the answer
    // update the counter
    // display next question
    // on 10th question submit, display score
    


   
    





