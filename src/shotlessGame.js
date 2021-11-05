const shotlessGame = () => {
    return (
    <div className="App">
      <header className="App-header">
        <h1>Gony APP!</h1>
        <button onClick={getName}>Gerenate Name</button>
        <div className="showPerson">
          <p>{name.nome}</p>
          <img src={name.imagem} alt=""/>
        </div>
      </header>
    </div>
    )
}

export default shotlessGame