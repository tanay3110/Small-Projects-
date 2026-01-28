num1 = prompt(`enter 1st number`);
operator = prompt(` Enter operator (+,-,*,/)`);
num2 = prompt(`enter 2nd number`);

if (operator == '+'){
    result = parseFloat(num1) + parseFloat(num2);
    alert(result);
}
else if (operator == '-'){
    result = parseFloat(num1) - parseFloat(num2);
    alert(result);
}   
else if (operator == '*'){
    result = parseFloat(num1) * parseFloat(num2);   
    alert(result);
}
else if (operator == '/'){
result = parseFloat(num1) / parseFloat(num2);
alert(result);
}   
else{
    alert(`Invalid operator`);
}