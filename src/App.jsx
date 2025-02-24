import './App.css'
import { useState } from 'react'
import Player from './Player/Player'



// 1. definir variables de estado usando useState (activePlayer, score, current, diceNumber)
// 2. definir funciones para manejar los eventos de click (handleNewGame, handleRollDice, handleHold)
// 3. pasar las variables de estado y las funciones a los componentes Player y Dice
// 4. manejar los eventos de click en los botones de New game, Roll dice y Hold
// 5. manejar el cambio de imagen de dado cuando se hace click en el botón rolldice
// 5. manejar el cambio de jugador activo cuando se hace click en el botón Hold
// 6. manejar el cambio de jugador activo cuando se obtiene un 1 al hacer click en el botón Roll dice
// 7. manejar el cambio de jugador activo cuando se obtiene un 6 al hacer click en el botón Roll dice
// 8. manejar el cambio de jugador activo cuando se obtiene un número diferente de 1 o 6 al hacer click en el botón Roll dice
// 9. manejar el cambio de jugador activo cuando se hace click en el botón New game

function App() {
  const [activePlayer, setActivePlayer] = useState(1)
  const [score, setScore] = useState([0, 0])
  const [current, setCurrent] = useState(0)
  const [diceNumber, setDiceNumber] = useState(0)
  const [hiddenButton, setHiddenButton] = useState("")


  const handleHold = () => {
    // para cambiar el score, se debe definir una nueva variable
    // no modificamos el array, creamos uno nuevo!!!!


    const newScore = [...score]

    // newScore[activaPlayer -1] = newScore[activePlayer -1] + current


    newScore[activePlayer - 1] += current
  
    setScore(newScore)
    
    //cuando no se haya ganado todavía, mientras el score sea menor a 20, seguirá cambiando de jugador
    //si se pasa de 20, se oculta el boton de rollDice

    if(newScore[activePlayer - 1] < 20){
     
      setActivePlayer(activePlayer === 1 ? 2 : 1) 
    }
    else{
      setHiddenButton("hidden")
    }
    
    setCurrent(0)

  }

  const handleNewGame = () => {

    //establecemos las variables de estado a sus valores iniciales
    setActivePlayer(1)
    setScore([0, 0])
    setCurrent(0)
    setDiceNumber(0)
    setHiddenButton("")
  }


const updateDiceNumber = (diceNumber) => {
  setCurrent((current) => current + diceNumber)
 }


  const handleRollDice = () => {
    //se genera un numero aleatorio del 1 al  segun los dados, y se lo pasamos a la variable de estado
    //si es 1, cambia de jugador, de lo contrario, lo irá sumando y se acumulará en el current
    
    const randomNumber = Math.floor(Math.random() * 6) + 1
    setDiceNumber(randomNumber)
  
    if (randomNumber === 1) {
      setActivePlayer((activePlayer) => (activePlayer === 1 ? 2 : 1))
      setCurrent(0)
    } else {

    // setCurrent (current + diceNumber)
    //  setCurrent((current) => current + diceNumber), para que sume el current 
    // conforme vayamos tirando el dado
    updateDiceNumber(randomNumber)
    }
    
  }
 
  
  return (
    <main>
      {/* Tarjetas Player 1 y Player 2 a las cuales les pasamos loos datos necesarios para que muestren su
      score y su current, además de si se encuentra el jugador activo o no */}
      <Player
        name="Player 1"
        score={score[0]}
        current={activePlayer === 1 && current }
        isActive={activePlayer === 1}
        
      />
      <Player
        name="Player 2"
        score={score[1]}
        current={activePlayer === 2 && current}
        isActive={activePlayer === 2}
        
      />

        {/*Mientras exista el diceNumber, se muestra la imagen del dado según el numero que sea diceNumber */}
      {diceNumber && (
        <img
          src={`dice-${diceNumber}.png`}
          alt="Playing dice"
          className="dice"
        />
      )}
      <button className="btn btn--new" onClick={handleNewGame}>
        🔄 New game
      </button>
      <button className={`btn btn--roll ${hiddenButton}`}  onClick={handleRollDice}>
        🎲 Roll dice
      </button>
      <button className="btn btn--hold" onClick={handleHold}>
        📥 Hold
      </button>
    </main>
  )
}

export default App