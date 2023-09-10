////Get sum function with arguments

function getSumAdvanced(){
  let a = arguments

  let theSum = 0;

  for(el of a){
    theSum += el
  }

  console.log(theSum);
}

getSumAdvanced(10,20,20,100,239)

////Get sum function with rest

function getTheSumAdvanced(...rest){
  let theSum = 0;

  for(el of rest){
    theSum += el
  }

  console.log(theSum);
}

getTheSumAdvanced( 10, 20, 20, 100, 239, 129774 )
