//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names,
loops through the list and checks that the current name is in the string passed 
in. The output should be: "Matched dog_name" if name is in the string, if no 
matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]


function findWords(list,str){
    //Your code goes here
    for(let i = 0; i < list.length; i++){ //loops through the array 'dog_names'
        let dog_name = list[i]; /*The value that corresponds to the number in 
                                the index is assigned to 'dog_name'*/
        let result = str.match(dog_name); /* the variable 'result' is assigned 
                                         the value dog_name or null if no match */
        if (result == dog_name){ // If the current dog_name matches the current result 
            console.log(`Matched: ${dog_name}`); //print "Matched dog_name"
        }else{ 
            console.log('No Matches'); /*If the condition above is not true 
                                        print "No Matches"*/                          
        }     
    }
}
//Call method here with parameters
console.log(findWords(dog_names,dog_string));


//============Exercise #2 ============//
/*Write a function that takes in an array and 
removes every even index with a splice,
and replaces it with the string "even index" */

given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    //code goes here
    for(i=0; i < arr.length; i++){ /*loop to check each elements index in order 
                                    to replace the even index values*/
        if (i % 2 ==  0){ /*if i is divisible by 2/'even index' remove the 
                         element at that position and replace with new element */
            arr.splice(i,1,'even index'); /* splice(index, # of items to be 
                                          removed, new element(s) to be added)*/
        }
        console.log(given_arr)
    }
}
console.log(replaceEvens(given_arr))
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

