const Filter = ({ filterFunction }) => {
  return(
    <div>
        filter shown with: <input onChange={filterFunction} />
    </div>
  )
}

export default Filter