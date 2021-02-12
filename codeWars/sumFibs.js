function sumFibs(num) {
    if (num == 0) {
            return 0;
        }
    
        if (num == 1) { 
            return 1;
        }
    
        let fibo = [1, 1];
        let sum = 0;
    
        for (let i = 0; i <= num; i++) {
            if (i - 1 >= 0) {
                fibo.push(fibo[i] + fibo[i-1])
            }
        }
    
        for (let j = 0; j < fibo.length; j++) {
            if (fibo[j] % 2 != 0 && fibo[j] <= num) {
                sum += fibo[j];
            }
        }
    
        return sum;
    }