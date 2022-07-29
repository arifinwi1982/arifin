var topPosition = 0;
var leftPosition = 0;   
var puppy = document.getElementById('puppy');
puppy.style.position='absolute'; 
puppy.style.left = "10px"; 
puppy.style.top = "200px"; 

function runPuppy() {

    if((parseInt(puppy.style.left)+leftPosition)<(screen.availWidth-96))
    {
    leftPosition++;   
    puppy.style.left = parseInt(puppy.style.left) + leftPosition +  "px";
    }

    if((parseInt(puppy.style.top)+puppy.offsetHeight)<=(screen.availHeight-puppy.offsetHeight-30))
    {
        topPosition++;
        puppy.style.top = parseInt(puppy.style.top) + topPosition + "px";
    
    }  
    
   
   

// add if it reaches the screen end (you can check with screen.availwidth)	

}
