function Player(props) {
  
  //si el score es mayor a 20, que muestre la clase de ganador, y si solo esta activa
  //  pero no ganador, que muestre la clase de jugador activo, sino que muestre 
  // la clase normal sin jugador activo ni ganador
  
  const classWinner =  props.score >= 20 ? 'player player--0... player--winner' : props.isActive ? 'player player--0 player--active' : 'player player--0'

  return (
     
          <section className={classWinner}>
          <h2 className="name" id="name--0">{props.name}</h2>
          <p className="score" id="score--0">{props.score }</p>
          <div className="current">
            <p className="current-label">Current</p>
            <p className="current-score" id="current--0">{props.current}</p>
            
          </div>
        </section>

    )
}
export default Player