/* 1) Use word and convert each letter into different position in an wordArray and make empty fillArray same size as wordArray 
   2) When user inputs letter. Use for loop (letters are case sensitive) and .charAt to go through an wordArray and detect number of Positions the 
      matching letter is inside an wordArray. Save those positions in new array called letterMatch using array.push() 
   3) Take positions from letterMatch and fill up same positions in fillArray with user input letter 
   4) once all the positions are filled in fillArray the game ends and new word starts */


var names = ["rampage", "pitchblack", "starwars", "avatar", "inception", "spiderman", "ironman", "gladiator"];

var nameChange = 0;
var word = names[nameChange];
var currentWord = [];
var rightWord =[];
for (var i=0; i<word.length; i++)
{
    currentWord[i] = word[i];
    rightWord[i]="_ ";
}
//var fillArray=[];
//var wordArray = [];
//var letter= word.search("n");
var triesLeft = 12;
var guessLetters = [];
var wins = 0;
var count = 0;

console.log("Word Length = " + word.length);

function search(j) 
{   var posArray=[];
    /*var fillArray=[];*/
    var same = false;
    var j=j.toUpperCase();
    //console.log("fillArray Length = " + fillArray.length);
            //The first for loop will compare user input with word and give back position of matched letter in a word
   
            if(count===currentWord.length)
            {
                
                window.alert("You have guess the Movie name right. You win");
                wins++;
                window.alert("Game Over. Don't Worry. You can play this again.")
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
                        window.alert("You already typed the letter " +j+ ". Please press ok and type different letter")
                        
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
                        window.alert("You already typed the letter " +j+ ". Please press ok and type different letter")
                        break;
                    }
                }

           }
           
           //console.log("same = " + same);
           
           if (same === false)
           {
                    for (var i = 0; i < word.length; i++) 
                            {   //console.log("Interation = " + i);
                            if (word.charAt(i).toLowerCase() === j || word.charAt(i).toUpperCase() === j  ) 
                                {
                                posArray.unshift(i);
                                console.log("Length of posArray = " + posArray.length + " posArray = " + posArray);
                                }
                            }
                    
                    if(posArray.length!=0)
                    {    count = count + posArray.length;
                        for(var i=0; i<posArray.length; i++)
                        {
                            /*fillArray[posArray[i]]= j;*/
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
      window.alert("Game Over. Don't Worry. You can play this again.")
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
        }
  }

}


