export const checkValidInput = (options, searchQuery) => {
    console.log('searched for match between: ', options[0].LocalizedName, searchQuery )
    const existingCity = options.find(
        city => city.LocalizedName === searchQuery
    )

    console.log(existingCity)

    if(existingCity) {
        return true
    }

    return false
}