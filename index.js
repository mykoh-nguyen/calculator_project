let temp ="";
let tempA ="";
let tempB ="";
let tempOperate=""

const displayArr=[];

const add = function(a,b) {
	temp=(parseInt(a) + parseInt(b));
    tempB="";
};

const subtract = function(a,b) {
  return (a > b ? a- b : b -a)
};


const multiply = function(arr) {
  let total = 1;

  for(i = 0 ;i<arr.length ;i++){
    total*= arr[i];
  }
  return total;

};

const divide = function(arr){

}

const buttons = document.querySelectorAll(".c");

buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{

        temp+=(button.textContent);
    if(button.textContent == "+"){
        tempOperate = button.textContent;
        tempA=temp.slice(0,-1);
        temp = "";
        console.log(tempOperate)
    }
    else if(button.textContent == "-"){
        tempOperate = button.textContent;
        tempA=temp.slice(0,-1);
        console.log(tempOperate)
    }
    else if(button.textContent == "*"){
        tempOperate = button.textContent;
        tempA=temp.slice(0,-1);
        console.log(tempOperate)
    }
    else if(button.textContent == "/"){
        tempOperate = button.textContent;
        tempA=temp.slice(0,-1);
        console.log(tempOperate)
    }
    else if(button.textContent=="="){
        tempB+= temp;
        if(tempOperate=="+"){
            add(tempA,tempB)
        }
        console.log("this is temp B",tempB)
    }
    else{
        displayArr.push(button.textContent);
        console.log("temp is ",temp);
    }
       updateScreen(button.textContent);

    })
})

const updateScreen = ()=>{
    const screenNumber= document.getElementById('screen');
    screenNumber.textContent=temp;
}

const clearButton=document.getElementById('clear');
clearButton.addEventListener('click',()=>{
    clear();
})
const clear =()=>{
    temp = "";
    updateScreen();
}

