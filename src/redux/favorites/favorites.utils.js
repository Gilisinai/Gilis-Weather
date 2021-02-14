export const addCityTofavorites = (favorites, cityToAdd) => {
   const existingCity = favorites.find(
       city => city.Key === cityToAdd.Key
   )

   if(existingCity) {
       return [...favorites]
   }

   return [...favorites, {...cityToAdd }]
}

export const removeCityFromfavorites = (favorites, cityToRemove) => {
    
    for(let i = 0; i < favorites.length; i++) {
        if(favorites[i].Key === cityToRemove.Key) {
            favorites.splice(i,1)
        }
    }
    

    return [...favorites]
 }

 