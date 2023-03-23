// For a given number, find all the prime numbers from zero to that number.
function printPrimeNumbers (n) {
primes = []
  
      if(n == 1 || n == 0) return [];
            
  
      for(var i = 2; i < n; i++)
      {   
          let isPrime = true;
          
          for(var j = 2; j < i; j++)
              {
                if(i %  j ==  0) isPrime= false
              }
              
          if(isPrime) primes.push(i)
          }
      return primes

}

console.log(printPrimeNumbers (11));
