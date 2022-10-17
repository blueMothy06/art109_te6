// fizzbuzz
num = 0;
 while (num < 101)
 {
   if ((num%3) == 0)
   {
     console.log('fizz');
   }
   else if (((num%5)==0) && ((num%3)!=0))
   {
     console.log('buzz');
   }
   else
   {
     console.log(num);
   }
   num ++;
  }
