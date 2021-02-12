/* Seek And Destroy

You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array that are of 
the same value as these arguments.
*/

/*
You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array that are of 
the same value as these arguments.
*/


function destroyer(arr) {
    let newArr = [];
    let extraArgs = [];

    for (let i = 1; i < arguments.length; i++) {
        extraArgs.push(arguments[i]);
    }

    for (let j = 0; j < arr.length; j++) {
        if (extraArgs.includes(arr[j])) {
            arr.splice(j, 1)
            j--;
        }
    }

    return arr;
}

//TESTS
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); //[1, 1]
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); //[1, 5, 1]
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); //[1]
console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); //["hamburger"]
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")); //[12,92,65]
