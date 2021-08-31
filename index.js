

function writeCards(namesArray, event) {
  let messagesArray = []
  for(let i = 0; i < namesArray.length; i++) {
    messagesArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
  }
    return messagesArray
}


  function countDown(){
    for(let b = 10; b >= 0; b--) {
      console.log(b)
    }

  }
