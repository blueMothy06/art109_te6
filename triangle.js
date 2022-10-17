// Looping a triangle
var test;
var triangle = '';

for (var i = 1; i < 7; i++) {
  test = i;
  while (test != 0)
  {
    triangle += '#';
    test -=1;
  }
  triangle += '\n';
}
console.log(triangle);
