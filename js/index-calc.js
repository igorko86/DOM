

function clickButton(e){
    if(e.target.className === "button"){
        let num1 = parseInt(inp1.value);
        let num2 = parseInt(inp2.value);
        if(!isNaN(num1) && !isNaN(num2)){
            switch(e.target.innerHTML){
                case "+":
                    showResult(num1 + num2);
                    break;
                case "-":
                    showResult(num1 - num2);
                    break;
                case "/":
                    showResult(num1 / num2);
                    break;
                case "*":
                    showResult(num1 * num2);
                    break;
            }     
            
        }else{
            showMessage("Please enter a number");
        }
    }
}
function showResult(res){
    resultButton.value = res;
}
function resetInputsVal(){
    inp1.value = "";
    inp2.value = "";
    resultButton.value = "";
}
function showMessage(message){
    alert(message);
    resetInputsVal();
}
const inp1 = document.querySelector("#inp1");
const inp2 = document.querySelector("#inp2");
const resultButton = document.querySelector("#result");
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click",resetInputsVal);
document.addEventListener("click",clickButton);
