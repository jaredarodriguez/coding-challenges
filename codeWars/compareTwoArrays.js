/*
Compare two arrays and return a new array with any items only 
found in one of the two given arrays, but not both. In other words, 
return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
    var newArr = [];
    let hashMap = new Map(); 

    arr1.forEach(function(id){
        if (hashMap.has(id)){
            hashMap.delete(id)
        } else (hashMap.set(id, 1))
    })
    arr2.forEach(function(id){
        if (hashMap.has(id)){
            hashMap.delete(id)
        } else (hashMap.set(id, 1))
    })

    for (var id of hashMap.keys()){
        if (hashMap.get(id) === 1){
            newArr.push(id); 
        }
    }
    
    return newArr; 
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); //4
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]
));  //["pink wool"]
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] 
));  //should return ["diorite", "pink wool"].
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));