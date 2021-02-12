
/*  is valid email
Write a funtion that takes in an email str and determines if it is a valid email.
An email is consider valid if it meets the following criteria:
1. It contains exactly 1 "@" symbol
2. It contains only alphanumeric characters or _ before the @ symbol
3. It contains exactly 1 "." symbol
4. it contains only "net" or "com" after the .
*/

function isValidEmail(str) {
  let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_!@#$%^&*"; 
  let parts = str.split("@"); 
  let partOne = parts[0];
  let partTwo = parts[1];
  let dotParts = partTwo.split('.') 
  let dotPartsTwo = dotParts[1]
  
  if (parts.length != 2){
      return false;
  }
  for (let i = 0; i < partOne.length; i++){
    if (!alpha.includes(partOne[i])){
        return false 
    }
  }
  if (dotParts.length != 2){
      return false; 
  }
  if ((dotPartsTwo != "net") && (dotPartsTwo != "com")) {
      return false;
  }
  return true; 

}