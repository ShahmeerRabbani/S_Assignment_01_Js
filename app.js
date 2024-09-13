

// Assignment # 01

function Assignment01(){

    var numOne = Number(prompt('Enter your first number'));
    
    var operation = prompt('Enter your operation + - * /')
    
    var numTwo = Number(prompt('Enter your second number'));
    
    if(operation == '+'){
        alert(numOne + numTwo);
    }
    else if(operation == '-'){
        alert(numOne - numTwo);
    }
    else if(operation == '/'){
        alert(numOne / numTwo)
    }
    else if(operation == '*'){
        alert(numOne * numTwo)
    }
}



// Assignment # 02


function Assignment02() {

    var number = Number(prompt('Enter number check even or odd'))
    
    if(number % 2){
        alert(`The num is odd \n After the increment ${++number}`)
    }
    else{
        alert(`The num is even \n After the increment ${++number}`)
    }
}



// Assignment # 03


function Assignment03() {

    var grade = Number(prompt('Enter your Percentage'))
    
    if(grade > 80){
        alert('Your Grade is A+')
    }
    else if(grade > 70){
        alert('Your Grade is A')
    }
    else if(grade > 60){
        alert('Your Grade is B')
    }
    else if(grade > 50){
        alert('Your Grade is C')
    }
    else if(grade > 40){
        alert('Your Grade is D')
    }
    else{
        alert('Your Grade is F')
    }
}




// Assignment # 04


function Assignment04() {

    var age = Number(prompt('Enter your age'))
    
    if(age > 64){
            alert('you are a Senior')
        }
        else if(age > 19){
            alert('you are a Adult')
        }
        else if(age > 12){
            alert('you are a Teenager')
        }
        else{
            alert('you are a Child')
        }
}



// Assignment # 05

function Assignment05(){
    
    var password = prompt('Enter your password');
    
    if(password.length < 6){
        alert('Password must contain 6 letters')
    }
    else{
        alert('your password is valid')
    }
}
