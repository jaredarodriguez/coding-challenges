/* 

Implement a Math object. Only non-neg will be passed as an arg, so type 'undefined', 'null', 'NaN', strings need not be considered.

Functions to implement:
    - Math.round()
    - Math.ceil()
    - Math.floor()
*/

class Math {
    constructor(num) {
      this.num = num;      
      }

      round() {
          return this.num - parseInt(this.num) < 0.5 ? parseInt(this.num) : parseInt(this.num) + 1;
      }
      
      floor() {
         return parseInt(this.num);
      }

      ceil() {
          return parseInt(this.num) == this.num ? this.num : parseInt(this.num) + 1;
      }
}

test1 = new Math(5.5)
console.log(test1.round()) // 6
console.log(test1.floor()) // 5
console.log(test1.ceil()) // 6
