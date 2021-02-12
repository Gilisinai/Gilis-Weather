export const addCityTofavorites = (favorites, cityToAdd) => {
   const existingCity = favorites.find(
       city => city.Key === cityToAdd.Key
   )

   if(existingCity) {
       return [...favorites]
   }

   return [...favorites, {...cityToAdd }]
}