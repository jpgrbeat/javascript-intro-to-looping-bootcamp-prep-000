function forLoop(arr){

  for(let i = 0; i < arr.length; i++){
    if(i===1){
      arr[i] = `I am ${i} strange loop.`;
    }
    else{
      arr[i] = `I am ${i} strange loops.`
    }
  
  }
  return arr;
}
