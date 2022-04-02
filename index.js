let currentNum ="";
let tempA ="";
let tempB ="";
let tempOperate="";


const add = function(a,b) {
	currentNum=(parseInt(a) + parseInt(b));
    tempB="";
};

const subtract = function(a,b) {
    currentNum=(parseInt(a) - parseInt(b));
    tempB="";
};

const multiply = function(a,b) {
    currentNum=(parseInt(a) * parseInt(b));
    tempB="";
};

const divide = function(a,b){
    currentNum=(parseInt(a) / parseInt(b));
    tempB="";
}

const buttons = document.querySelectorAll(".c");

buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        currentNum+=(button.textContent);

        if(button.textContent=="+"){
            tempOperate = button.textContent;
            tempA=currentNum.slice(0,-1);
            currentNum = "";
            
        }
        // else if(tempOperate == "++"){
        //     solve();
        // }
        else if(button.textContent=="-"){
            tempOperate = button.textContent;
            tempA=currentNum.slice(0,-1);
            currentNum = "";
        }
        else if(button.textContent=="*"){
            tempOperate = button.textContent;
            tempA=currentNum.slice(0,-1);
            currentNum = "";
        }
        else if(button.textContent=="/"){
            tempOperate = button.textContent;
            tempA=currentNum.slice(0,-1);
            currentNum = "";
        }
        else if(button.textContent=="="){
            solve();
        }

        updateScreen(button.textContent);
    })                    
})

const solve =()=>{
    tempB+= currentNum;
            if(tempOperate == "+"){
                add(tempA,tempB)
            }
            if(tempOperate == "-"){
                subtract(tempA,tempB)
            }
            if(tempOperate == "*"){
                multiply(tempA,tempB)
            }
            if(tempOperate == "/"){
                divide(tempA,tempB)
            }
}

const updateScreen = ()=>{
    const screenNumber= document.getElementById('screen');
    screenNumber.textContent=currentNum;
}

const clearButton=document.getElementById('clear');
clearButton.addEventListener('click',()=>{
    clear();
})
const clear =()=>{
    currentNum = "";
    updateScreen();
}

