

function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value
    const diceResult = document.getElementById("diceResult")
    const diceImage = document.getElementById("diceImage")
    const values =[]
    const images =[]

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random()*6) + 1
        values.push(value)
        images.push(`<img src="dice_images/${value}.svg" width = 150px margin =5px>`)
      
        
    }
    diceResult.textContent = `dice ${values.join(', ')}`
    diceImage.innerHTML = images.join('')
}