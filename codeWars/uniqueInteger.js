/* Find the unique integer given a set of integers in an array */

//Using a data structure 
function uniqueArr(arr) {
    let numCount = {}; 
    for (let i = 0; i < arr.length; i++){
        if (numCount[arr[i]]){
            numCount[arr[i]]++;
        } else {
            numCount[arr[i]] = 1; 
    }
}
    for(let num in numCount){
        if(numCount[num] === 1){
            return parseFloat[num]; 
        }
    }
}

//hashMap

function uniqueArr(arr){
    let hashMap = new Map(); 
    arr.forEach(function(id){
        if (hashMap.has(id)){
            hashMap.delete(id)
        } else (hashMap.set(id, 1))
    })
    for (var id of hashMap.keys())
    if (hashMap.get(id) === 1){
        return id; 
    }
}

//TESTS

// console.log(uniqueArr([1, 2, 2, 4, 2, 6, 4, 6])); // [1]
// console.log(uniqueArr([6, 1, 3, 3, 32, 4, 21])); // [6, 1, 32, 4, 21]
// console.log(uniqueArr([60, 40, 30, 30, 32, 32])); // [60, 40] 
// console.log(uniqueArr([22, 29, 29, 24, 13, 13])); // [22, 24]
console.log(uniqueArr(['4ac518f2f964a5205cae20e3', '4b40a0b8f964a5206cb925e3', '4b51dc9df964a520705827e3', 
'4bc304182a89ef3b4a67f488', '4bd04972b221c9b65059d3d0', '4be065fb98f2a593a21cc25a', '4be6c0995254d13ae0a760e1',
'4be842ee9a54a593d7bf0911', '4c18d299834e2d7fe55d2980', '4c25c492f1272d7f326685c5', '4c26150af1272d7fc7d585c5',
'4c2c6f91d1a10f47066bf964', '4c44795736d6a593f37f6aa8', '4c52e24e048b1b8d418d1431', '4c557122479fc928259cd494',
'4c5d3fcb85a1e21e7fde5811', '4c5d712e7f661b8d303c4b1c', '4c8cc3ef5e048cfa2796cfcd', '4c934c13332c3704c9448f64',
'4ca1e641e44d6dcbccfc0175', '4cd80c6551fc8cfa6451e75d', '4d14b7048312236a2d8f4cba', '4d889b82f607a093e745d986', 
'4d9c8ee07958f04d81e501fa', '4da995e1fa8cc764971cd164', '4dbc263443a1d8504b82e223', '4dc1158852b1877d85ab6ab7', 
'4de7a56245dda9e8a330c79d', '4e215cfd18501a60d2fea455', '4e3e6eaca809ba757c174043', '4e468ac362845e1d3c925504', 
'4e57caed2fb6cfb3a2c4b106', '4e57caed2fb6cfb3a2c4b109', '4e57caed2fb6cfb3a2c4b10c', '4e57caed2fb6cfb3a2c4b10d',
'4e57caed2fb6cfb3a2c4b117', '4e57caed2fb6cfb3a2c4b11c', '4e57caed2fb6cfb3a2c4b11f', '4e57caed2fb6cfb3a2c4b12a', 
'4e57caed2fb6cfb3a2c4b130', '4e57caed2fb6cfb3a2c4b13c', '4e57caed2fb6cfb3a2c4b13e', '4e57caed2fb6cfb3a2c4b145', 
'4e57caed2fb6cfb3a2c4b148', '4e57caed2fb6cfb3a2c4b14f','4e57caed2fb6cfb3a2c4b158', '4e57caed2fb6cfb3a2c4b15c', 
'4e57caed2fb6cfb3a2c4b15f', '4e57cbf12fb6cfb3a2c4bd30','54083cc2498e37e256f16851', '5462108d498e6e7ec8311863',
'569a5c1b498ef437b46e4daf', '57efe55a498e5ddf06b1fbc5', '57f7abd1498e1558f235dba2', '5a6334dc018cbb2eb276e601',
'5a8e0feb9411f228f21630e4', '5c6da99a345cbe002cf0ab65', '5cdbcf2cab42d9002c410472', '5dd6e51063f3fe000877500e', 
'5dd6ea539ba57e0007108e34', '4ac518f2f964a5205cae20e3', '4b40a0b8f964a5206cb925e3', '4bc304182a89ef3b4a67f488', 
'4bd04972b221c9b65059d3d0', '4be065fb98f2a593a21cc25a', '4be53f08910020a17ac0d214', '4be6c0995254d13ae0a760e1',
'4be842ee9a54a593d7bf0911','4c18d299834e2d7fe55d2980', '4c25c492f1272d7f326685c5', '4c26150af1272d7fc7d585c5',
'4c2c6f91d1a10f47066bf964','4c44795736d6a593f37f6aa8','4c52e24e048b1b8d418d1431','4c557122479fc928259cd494',
'4c5d712e7f661b8d303c4b1c', '4c8cc3ef5e048cfa2796cfcd','4c934c13332c3704c9448f64','4ca1e641e44d6dcbccfc0175',
'4cb07544eb65b1f7ad0b6ccd','4cd80c6551fc8cfa6451e75d','4d14b7048312236a2d8f4cba','4d889b82f607a093e745d986',
'4d9c8ee07958f04d81e501fa','4dbc263443a1d8504b82e223','4de7a56245dda9e8a330c79d','4e215cfd18501a60d2fea455',
'4e3e6eaca809ba757c174043','4e468ac362845e1d3c925504','4e57caed2fb6cfb3a2c4b106','4e57caed2fb6cfb3a2c4b109',
'4e57caed2fb6cfb3a2c4b10c','4e57caed2fb6cfb3a2c4b10d','4e57caed2fb6cfb3a2c4b117','4e57caed2fb6cfb3a2c4b119',
'4e57caed2fb6cfb3a2c4b11c','4e57caed2fb6cfb3a2c4b11f','4e57caed2fb6cfb3a2c4b12a','4e57caed2fb6cfb3a2c4b13c',
'4e57caed2fb6cfb3a2c4b13e','4e57caed2fb6cfb3a2c4b145','4e57caed2fb6cfb3a2c4b148','4e57caed2fb6cfb3a2c4b14f',
'4e57caed2fb6cfb3a2c4b15c','4e57cbf12fb6cfb3a2c4bd30','54083cc2498e37e256f16851','5462108d498e6e7ec8311863',
'569a5c1b498ef437b46e4daf','57efe55a498e5ddf06b1fbc5','57f7abd1498e1558f235dba2','5a6334dc018cbb2eb276e601',
'5a8e0feb9411f228f21630e4','5c6da99a345cbe002cf0ab65','5cdbcf2cab42d9002c410472','5dd6ea539ba57e0007108e34']))