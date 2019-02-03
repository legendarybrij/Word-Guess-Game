/* 1) Use word and convert each letter into different position in an wordArray and make empty fillArray same size as wordArray 
   2) When user inputs letter. Use for loop (letters are case sensitive) and .charAt to go through an wordArray and detect number of Positions the 
      matching letter is inside an wordArray. Save those positions in new array called letterMatch using array.push() 
   3) Take positions from letterMatch and fill up same positions in rightWord with user input letter 
   4) once all the positions are filled in rightWord array the game ends and new word starts */


var names = ["Titanic", "TheGodfather", "Spiderman", "rampage", "pitchblack", "starwars", "avatar", "inception", "spiderman", "ironman", "gladiator", "interstellar", "TheMatrix"];

var nameChange = 0;  //this variable changes the number once movie name is finished
var word = names[nameChange]; //This changes the movie name once movie is revealed
var currentWord = []; //This will have different letters in of word split in array
var rightWord =[]; //This will fill up as user guesses right letter of the movie
for (var i=0; i<word.length; i++) //This loop initialize two array. Chars of word into currentWord and rightWord with underscores same as word.length
{
    currentWord[i] = word[i];
    rightWord[i]="__";
}

var triesLeft = 12; 
var guessLetters = []; //Letters that doesn't match the name of the movie are stored here
var wins = 0;
var count = 0; //This count will add +1 if user guesses right letter of the movie 


//var videoElement = document.createElement("video");
//videoElement.setAttribute("src", "assets/images/titanic.mp4");
//videoElement.play(); 


function check()   //This function checks whether count is same as currentWord.length and if it equals than game is done
{
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
}


function search(j) //This function 
{   var posArray=[];
    var same = false;
    var j=j.toUpperCase();
  
 //This condition checks whether tries left is 0 or not and if it is 0 then game over   
 if (triesLeft !== 0) 
   {        
            if (guessLetters!=null) //This condition checks if guess letters array is null or not. If it is not null then it checks guessLetters array and if it repeats then it tell user "You already have typed the letter" 
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
           if (rightWord!=null)  //This condition checks if right word array is null or not. If it is not null then it checks rightWord array and if it repeats then it tell user "You already have typed the letter" 
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
           {        //The loop will compare user input with word and give back index position of matched letter in current word
                    for (var i = 0; i < word.length; i++) 
                            {   
                            if (word.charAt(i).toLowerCase() === j || word.charAt(i).toUpperCase() === j  ) 
                                {
                                posArray.unshift(i);
                                }
                            }
                    
                    if(posArray.length!=0) //This condition will check if posArray is null or not. If not null then uses for loop for next step else tries left decreases by 1.
                    {    count = count + posArray.length; //This count will add number of matched letter so if there is two "i" in a word the it will add count+2
                        //This loop will go thorugh posArray and convert index of matched letter to alphabet inputed by user
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

//This event load will load with empty right word array and wins = 0
window.addEventListener("load", function(event){
    document.getElementById("rightWord").innerHTML = rightWord.join('  ');
    document.getElementById("wins").innerHTML = wins;
    
});

//This event keydown will will use function search and compare chars and displays matching chars
window.addEventListener("keydown", function(event){ 
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
//cument.getElementById("video").innerHTML = videoElement;


});

//This event keyup will check if all the letters are revealed yet or not and if it is then user wins and word changes
window.addEventListener("keyup", function(event){
    window.check();
    document.getElementById("rightWord").innerHTML = rightWord.join('  ');
    document.getElementById("triesLeft").innerHTML = triesLeft;
    document.getElementById("guessLetters").innerHTML = guessLetters.join(' ');
    document.getElementById("wins").innerHTML = wins;
});

/*var vid = document.getElementById("titanic");
vid.autoplay = true;
vid.load();*/