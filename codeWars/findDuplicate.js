
//Write a function that finds duplicates in two arrays

function findDup(arr1, arr2){
    let d00ps = []
    
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]){
                d00ps.push(arr1[i])
            }
        }
    }
    return d00ps
}
