/* 1) Use word and convert each letter into different position in an wordArray and make empty fillArray same size as wordArray 
   2) When user inputs letter. Use for loop (letters are case sensitive) and .charAt to go through an wordArray and detect number of Positions the 
      matching letter is inside an wordArray. Save those positions in new array called letterMatch using array.push() 
   3) Take positions from letterMatch and fill up same positions in rightWord with user input letter 
   4) once all the positions are filled in fillArray the game ends and new word starts */


var names = ["Titanic", "TheGodfather", "Spiderman", "rampage", "pitchblack", "starwars", "avatar", "inception", "spiderman", "ironman", "gladiator", "interstellar", "TheMatrix"];

var nameChange = 0;  //this variable changes the number once movie name is finished
var word = names[nameChange]; //This changes the movie name once movie is revealed
var currentWord = []; //This will have different letters in of word split in array
var rightWord =[]; //This will fill up as user guesses right letter of the movie
for (var i=0; i<word.length; i++)
{
    currentWord[i] = word[i];
    rightWord[i]="__";
}

var triesLeft = 12; 
var guessLetters = []; //Letters that doesn't match the name of the movie are stored here
var wins = 0;
var count = 0; //This count will add +1 if user guesses right letter of the movie 

function search(j) 
{   var posArray=[];
    var same = false;
    var j=j.toUpperCase();
            
           if(count===currentWord.length) 
            {
                
                window.alert("You have guess the Movie name right. You won buddy. Game over but don't worry. You can guess next movie name.");
                wins++;
                
                nameChange++;
                triesLeft = 12;
                count=0;
                guessLetters = [];
                word = names[nameChange];
                rightWord=[];
                currentWord=[];
                for (var i=0; i<word.length; i++)
                    {
                        currentWord[i] = word[i];
                        rightWord[i]="__";
                    }

            }
   
   
   
 if (triesLeft !== 0)
   {        
            if (guessLetters!=null)
           {
                for(var i=0; i<guessLetters.length; i++)
                {
                    if(guessLetters[i]===j)
                    {
                        same = true;
                        window.alert("You already typed the letter " + j.toUpperCase()+ ". Please press ok and press different letter")
                        
                    }
                }
           }
           if (rightWord!=null)
           {
                for(var i=0; i<rightWord.length; i++)
                {
                    if(rightWord[i]===j)
                    {
                        same = true;
                        window.alert("You already typed the letter " +j+ ". Please press ok and press different letter.")
                        break;
                    }
                }

           }
           
           
           
           if (same === false)
           {        //The loop will compare user input with word and give back position of matched letter in a word
                    for (var i = 0; i < word.length; i++) 
                            {   
                            if (word.charAt(i).toLowerCase() === j || word.charAt(i).toUpperCase() === j  ) 
                                {
                                posArray.unshift(i);
                                }
                            }
                    
                    if(posArray.length!=0)
                    {    count = count + posArray.length;
                        for(var i=0; i<posArray.length; i++)
                        {
                            rightWord[posArray[i]] = j;
                        }
                        
                    }else {
                        triesLeft--; 
                        guessLetters.unshift(j);
                    }
                    
            }

            
            
return rightWord;
  } else
  {   
      window.alert("Game Over. The name of the movie is " + word.toUpperCase() +". Don't Worry. You can play this again. Press any key to start again.")

      nameChange++;
      triesLeft = 12;
      count=0;
      guessLetters = [];
      word = names[nameChange];
      rightWord=[];
      currentWord=[];
      for (var i=0; i<word.length; i++)
        {
            currentWord[i] = word[i];
            rightWord[i]="__";
        }
  }

}


window.addEventListener("load", function(event){
    document.getElementById("rightWord").innerHTML = rightWord.join('  ');
    document.getElementById("wins").innerHTML = wins;
});


window.addEventListener("keyup", function(event){ 
var letter = event.key.toLowerCase();  
//console.log(event.keyCode);   
if (event.keyCode>64 && event.keyCode<91 )
{
      window.search(letter);
}else
{
      window.alert("Please Type In Alphabets Only")
}

document.getElementById("rightWord").innerHTML = rightWord.join('  ');
document.getElementById("triesLeft").innerHTML = triesLeft;
document.getElementById("guessLetters").innerHTML = guessLetters.join(' ');
document.getElementById("wins").innerHTML = wins;


});




/*var vid = document.getElementById("titanic");
vid.autoplay = true;
vid.load();*/