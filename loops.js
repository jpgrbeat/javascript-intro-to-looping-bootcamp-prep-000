function forLoop(arr){

  for(let i = 0; i < 25; i++){
    if(i===1){
      arr[i].push(`I am ${i} strange loop.`);
    }
    else{
      arr[i].push(`I am ${i} strange loops.`)
    }
  
  }
  return arr;
}
