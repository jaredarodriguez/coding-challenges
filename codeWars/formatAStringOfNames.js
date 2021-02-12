/* 

Given: an array containing hashes of names

Return: a string formatted as a list of names separated by 
commas except for the last two names, which should be separated 
by an ampersand.

*/

function list(names) {
    let answer;
    let nameList = []
    let beginning = [];
    let penultimate = [];
    let final = [];

    names.forEach((x) => nameList.push(x.name));
    
    if (names.length === 0) {
        return '';
    }
    if (names.length === 1) {
            return answer = nameList[0];
    }
    else if (names.length === 2) {
            return answer = nameList.join(', ').toString().replace(',', ' &');
    }
    else {
        for (let i = 0; i < nameList.length; i++) {
            if (i < nameList.length - 2) {
                beginning.push(nameList[i]);
            } else if (i < nameList.length - 1) {
                penultimate.push(nameList[i]);
            } else if (i === nameList.length - 1) {
                final.push(nameList[i]);
            }
        }
        let beginningStr = beginning.join(', ');
        let penultimateStr = penultimate.toString();
        let finalString = final.toString();
        answer = beginningStr + ', ' + penultimateStr + ' ' + '& ' + finalString;
    } 
}

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]) // returns 'Bart, Lisa & Maggie'
list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]) // 'Bart, Lisa, Maggie, Homer & Marge'