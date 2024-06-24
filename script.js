var myGame = new WizardOrpheus('', `
You're a fruit seller who has a fruit shop. You sell really good fruits, however you sell them for the price of $10 per fruit. You will get customers that will try to get discounts, however if you do give discounts to everyone then you will end up in loss. Therefore, be wise and don't get persuaded so easily.
`)

myGame.createUserAction({
  
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
  
})

document.getElementById('input').addEventListener('keyup', function(e) {
  if (e.code == 'Enter') { // if the user presses enter
    let userInput = document.getElementById('input').value
    
    myGame.message(userInput)

    document.getElementById('conversation').innerHTML += '<p>' + userInput + '</p>'

    document.getElementById('input').value = ''
  }
})

myGame.createUserAction({
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
})


myGame.variable('score', 'Current score. Changes (positive and negatively) as the user does things.', 0)

myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
 
document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>'

document.getElementById('score').innerHTML = data.currentVariables.score.value
  
})

