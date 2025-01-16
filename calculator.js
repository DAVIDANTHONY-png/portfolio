$(document).ready(function(){
    let result = 0;
    let prevEntry = 0;
    let operation = null;
    let currentEntry = '0';
    updateScreen(operation);
    $('.btn').on('click', function (event){
        let buttonPressed = $(this).html()
        console.log(buttonPressed)

        if(buttonPressed === "C"){
            result = 0;
            currentEntry = '0';
        }else if(buttonPressed === "CE"){
            currentEntry = '0';
        }else if(buttonPressed === "Back"){
            currentEntry = currentEntry.substring(0, currentEntry.length -1);
        }else if(buttonPressed === "+/-"){
            currentEntry *= -1;
        }else if(buttonPressed === "."){
            currentEntry += '.';
        }else if(isNumber(buttonPressed)){
            if(currentEntry === '0') currentEntry = buttonPressed;
            else currentEntry = currentEntry + buttonPressed
        }else if(isOperator(buttonPressed)){
            prevEntry = parseFloat(currentEntry);
            operation = buttonPressed;
            currentEntry= '';
        }else if(buttonPressed === '%'){
            currentEntry = currentEntry / 100;
        }else if(buttonPressed === 'sqrt'){
            currentEntry = Math.sqrt(currentEntry)
        }else if(buttonPressed === "1/x"){
            currentEntry = 1/currentEntry;
        }else if(buttonPressed === "PI"){
            currentEntry = Math.PI;
        }else if(buttonPressed === "="){
            currentEntry = caculate(prevEntry, parseFloat(currentEntry), operation)
            operation = null;
        }
        updateScreen(currentEntry);
    })
   function isNumber(value){
    return !isNaN(value);
   }

   function isOperator(value){
    return value = '+' || '*' || '-' || '/' ;
   }

    function updateScreen(value) {
        $(".screen").html(value);
    }

    function caculate(prev, curr, op){
        switch (op) {
            case '+': return prev + curr;

            case '-': return prev - curr;

            case '*': return prev * curr;

            case '/': return prev / curr;
                
            default: curr;
              } }
})