export const checkIfInFavorite = (favorites, cityToAdd) => {
    const existingCity = favorites.find(
        city => city.Key === cityToAdd.Key
    )
 
    if(existingCity) {
        return true
    }
 
    return false
 }
 