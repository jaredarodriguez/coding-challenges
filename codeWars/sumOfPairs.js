/* 

Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

*/

function sumPairs(ints, s) {
    if (ints.length < 2) return undefined;

    let intSet = new Set();
    intSet.add(ints[0]);

    for (let i = 1; i < ints.length; i++) {
        let needed = s - int[i];
        if (intSet.has(needed)) {
            return [needed, int[i]];
        }
        intSet.add(ints[i]);
    }
    return undefined;
}