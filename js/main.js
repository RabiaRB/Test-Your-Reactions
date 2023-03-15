
let startTime = new Date().getTime();
let delayTime = Math.random() * 3000;
let timeRecord = 0;
let shapesDisplayed = 0;



appearAfterDelay();

document.getElementById("shape").onclick = reactionProcess;
    
function constructShape(){

        let top = Math.random() * 300;
        let left =  Math.random() * 400;
        let size = (Math.random() * 300) + 100;
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        let borderColor = Math.floor(Math.random()*16777215).toString(16);
        
        if (Math.random()< 0.5){

            document.getElementById("shape").style.borderRadius = "50%";
        }

        else {

            document.getElementById("shape").style.borderRadius = "0%";
        }


        document.getElementById("shape").style.top = top + "px";
        document.getElementById("shape").style.left = left + "px";
        document.getElementById("shape").style.width = size  + "px";
        document.getElementById("shape").style.height = size  + "px";
        document.getElementById("shape").style.backgroundColor = "#" + randomColor;  
        document.getElementById("shape").style.borderColor = "#" + borderColor;  
        document.getElementById("shape").style.display = "block";
        startTime = new Date().getTime();
        shapesDisplayed++;
    
    }


function appearAfterDelay(){

    setTimeout(constructShape, delayTime);

    }

function reactionProcess(){
             
        document.getElementById("shape").style.display = "none";

        let endTime = new Date().getTime();

        let timeTaken = (endTime - startTime)/1000;

        document.getElementById("timeTaken").innerHTML = timeTaken + "s";

  
        timeRecord = timeRecord + timeTaken ;

        appearAfterDelay(); 

    }


      
    document.getElementById("resultButton").onclick = displayAverage;
        

    function displayAverage(){
        let avgTime = timeRecord / shapesDisplayed;

        document.getElementById("timeDisplay").innerHTML = avgTime.toFixed(3) + "s";   
    
    }

    document.getElementById("resetButton").onclick = resetTimers;

    function resetTimers(){
        timeRecord = 0;
        shapesDisplayed = 0;
        appearAfterDelay();
        document.getElementById("timeDisplay").innerHTML =  "0.000s";
        document.getElementById("timeTaken").innerHTML = "0.000s";


    }

