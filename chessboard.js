// chessboard
var chessboard = '';

for (var i = 0; i < 8; i ++) {
  for (var j = 0; j < 8; j ++) {
    if ((i+j) % 2 == 0)
    {
      chessboard += '#';
    }
    else{
      chessboard +=' ';
    }
  }
  chessboard += "\n";
}
console.log(chessboard);
