const PersonForm = ({submitNew, handleNameFunction, handlePhoneFunction, newName, newPhone}) => {
  return(
    <form onSubmit={submitNew}>
    <div>
      name: <input onChange={handleNameFunction} value={newName}/>
      <br />
      number: <input onChange={handlePhoneFunction} value={newPhone}/>
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>

  )
}

export default PersonForm