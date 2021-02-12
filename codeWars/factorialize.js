//recursive

function factorialize(num){
    if (num < 0)
        return 1; 
    else if (num == 0)
        return 1; 
    else {
        return (num * factorialize(num - 1))
    }
}

//while loop 
function factorialize(num){
    let result = num; 
    if (num === 0 || num === 1){
        return 1
    } while (num > 1){
        num--
        result *= num 
    }
    return result 
}

//for loop 

function factorialize(num){
    if (num === 0 || num === 1){
        return 1
    } for (let i = num - 1; i >= 1; i--){
        num = num * i 
    }
    return num 
}