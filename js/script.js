
// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
	
	 function ay(word) {
            var messagetwo = $("input").val();
            var firstLetter = word[0].toLowerCase();
                
                if (firstLetter === "a" , firstLetter === "e" , firstLetter === "i" , firstLetter === "o" , firstLetter === "u") {
                    return word + "ay";
                } else {
                    return word.slice(1) + word[0] + "ay";
                }
    }
            
    
    var input = $("input").val();

        function sentenceToPigLatin(sentence) {
                
            var splitSentence = sentence.split(" ");
            var sentenceAy = " ";
                
                for (var i = 0; i < splitSentence.length; i++) {
                    
                    var word = splitSentence[i];
                    sentenceAy = sentenceAy + " " + ay(word);

                }
                
                return sentenceAy;
        }

$("button").click(function() {
    var messagetwo = $("input").val();
                var newMessage = sentenceToPigLatin(messagetwo);
                $("#message").text(newMessage);
            });



});
























// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 




// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance

