/*

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

*/

var groupAnagrams = function (strs) {
  const groups = {};

  for (let i = 0; i < strs.length; i++) {
    let sort = strs[i].split('').sort().join('');
    console.log(sort);

    if (!groups[sort]) {
      groups[sort] = [strs[i]];
    } else {
      groups[sort].push(strs[i]);
    }
  }

  return Object.values(groups);
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
