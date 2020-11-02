
getRandomMeal(); 

getRandomMealInfo();
 
async function getRandomMeal()  //details of random meal
{
const resp=await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
const randomMeal=await resp.json();
console.log(randomMeal); 
}

async function getRandomMealInfo()
{
    const resp=await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    const info=await resp.json();
    console.log(info.meals[0].strMeal);
    //return info.meals[0];
}

 

async function getMealById(id)
{
    const randomMealId=await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id)
}

async function getMealsBySearch(term)
{
  const randomMealSearch=await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=term'+term);
}