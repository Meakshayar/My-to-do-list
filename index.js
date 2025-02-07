let userinput = document.querySelector(".input"); // target input element
    let division = document.querySelector(".divi"); // target the div element

    let arrayofinput = [];

    function add(){
        let uservalue = userinput.value; // gets the value of user input
        userinput.value = ""; // reset the input area value
        if(uservalue === ""){
        /*donothing*/} 
        else{
          arrayofinput.push(uservalue); // push the uservalue to arrayofinput
        }
        looping();
    } // each time i click add, the input value gets stored in arrayofinput

      function looping(){ 
        division.innerHTML = ""; // reset the innerhtml blank 
        for (let i = 0; i < arrayofinput.length; i++){
          division.innerHTML += `<p>${arrayofinput[i]} <button onClick="deleteitem(${i})">delete</button></p>`
        };
      }  // division innerhtml will add according to arrayofinput
     

      function deleteitem(num){
       arrayofinput.splice(num, 1); // when i click delete, the element of arrayoftem at position num gets emited;
       looping(); // div innerhtml becomes according to new array
      }