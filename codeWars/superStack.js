/* 

Implement a stack that accepts the following commands and performs the operations described: 

1. push v: Push integer v onto the top of the stack 
2. pop: Pop th top element from the stack 
3. inc i v: Add v to each of the bottom i elements and the stack 

After each operation, print the value at the top of the stack. If the stack is empty, 
print the string EMPTY. For example: 



*/ 

function superStack(operations){
    let stack = []; 
     
    for (let i = 0; i < operations.length; i++){
        let parts = operations[i].split(' ');
        let op = parts[0];

        switch (op.toLowerCase()) {
            case 'push':
                push(parseInt(parts[1]));
                break;
            case 'pop':
                pop();
                break;
            case 'inc':
                inc(parseInt(parts[1]), parseInt(parts[2]));
                break;
            default:
                throw new Error(`Unrecognized operation: ${op}`);
        }
        if (stack.length == 0){
            console.log('EMPTY');
        } else {
            console.log(stack[stack.length - 1]);
        }
    }

    function push(value) {
        stack.push(value);
    }

    function pop() {
        stack.pop();
    }

    function inc(range, value) {
        for (let i = 0; i < range; i++){
            stack[i] += value; 
        }
    }

}

// TEST 

superStack(['push 4', 'pop', 'push 3', 'push 5', 'push 2', 'inc 3 1', 'pop', 'push 1', 'inc 2 2', 'push 4', 'pop', 'pop']) // => 4 EMPTY 3 5 2 3 6 1 1 4 1 8 

