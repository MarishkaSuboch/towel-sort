
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  
  if(matrix !== undefined && matrix.length !== 0)
  {
    let str = '';
    for(let i = 0; i < matrix.length; i++)
      {
        let tempstr = matrix[i].join();
        if(i !== 0) str += ',';
        str+= ((i+1)%2 === 0 )? tempstr.split(',').reverse().join(",") : tempstr;
      }
    res = str.split(',');
  }
  return res;
}
