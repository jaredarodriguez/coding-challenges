/* 
Directions Reduction

Write a function dirReduc which will take an array of 
strings and returns an array of strings with the needless 
directions removed (W<->E or S<->N side by side).
*/ 

function dirReduc(plan) {
     var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
    return plan.reduce(function(dirs, dir){
      console.log(`this is the compare value : ${dirs[dirs.length - 1]}`);
      console.log(`this is the compare arr : ${dirs}`);
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop()
      else 
        dirs.push(dir);
        return dirs; 
    }, [])
  }
  
  // console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
  // console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
  // console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]))
  // console.log(dirReduc(["NORTH", "WEST", "WEST", "EAST", "SOUTH"]))













  // return plan.reduce(function(dirs, dir){
  //   console.log(opposite[dir]);
  //     if (dirs[dirs.length - 1] === opposite[dir])
  //       dirs.pop();
  //     else
  //       dirs.push(dir);
  //     return dirs;
  //   }, []);















