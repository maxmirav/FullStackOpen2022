const CountrySearch = ({ searchCountry, countryChangeFunction}) => {
    return (
        <>
            <h2>{searchCountry}</h2>
            <form>
            find countries: <input onChange={countryChangeFunction}/>
            </form>
        </>
    )
}

export default CountrySearch