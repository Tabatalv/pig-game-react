function Player(props) {
  // console.log(props.winner)
    return (
        <>

        {/* {props.isActive && props.winner ? (<section className="player player--0 player--active player--winner">
          <h2 className="name" id="name--0">{props.name}</h2>
          <p className="score" id="score--0">{props.score }</p>
          <div className="current">
            <p className="current-label">Current</p>
            <p className="current-score" id="current--0">{props.current}</p>
            
          </div>
        </section>) : (<section className="player player--0 player--active">
        <h2 className="name" id="name--0">{props.name}</h2>
        <p className="score" id="score--0">{props.score }</p>
        <div className="current">
          <p className="current-label">Current</p>
          <p className="current-score" id="current--0">{props.current}</p>
          <p>{props.isActive}</p>
          
        </div>
      </section>) 
          
        } */}

        { props.winner === true ? (
          
          <section className="player player--0 player--active player--winner">
          <h2 className="name" id="name--0">{props.name}</h2>
          <p className="score" id="score--0">{props.score }</p>
          <div className="current">
            <p className="current-label">Current</p>
            <p className="current-score" id="current--0">{props.current}</p>
            
          </div>
        </section>

          
        ) : (
          props.isActive ? (
            <section className="player player--0 player--active">
        <h2 className="name" id="name--0">{props.name}</h2>
        <p className="score" id="score--0">{props.score }</p>
        <div className="current">
          <p className="current-label">Current</p>
          <p className="current-score" id="current--0">{props.current}</p>
          <p>{props.isActive}</p>
          
        </div>
      </section>
          ): (<section className="player player--0 ">
            <h2 className="name" id="name--0">{props.name}</h2>
            <p className="score" id="score--0">{props.score }</p>
            <div className="current">
              <p className="current-label">Current</p>
              <p className="current-score" id="current--0">{props.current}</p>
              <p>{props.isActive}</p>
              
            </div>
          </section>)
        )
      }
        </>
    )
}
export default Player