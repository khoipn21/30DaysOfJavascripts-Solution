const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
let countries
const cats = []
const catNames = []
const fetchData = async function () {
    try {
        const response = await fetch(countriesAPI)
        const data = await response.json()
        const sortCountries = []
        countries = data
        // countries.forEach(country => console.log(`country: ${country.name}\ncapital:${country.capital}\nlanguages:${country.languages}\npopulation:${country.population}\narea:${country.area}\n`))
        for (const country in countries) {
            sortCountries.push([countries[country].name, countries[country].area])
        }
        sortCountries.sort(function (a, b) {
            return b[1] - a[1];
        })
        console.log(Object.fromEntries(sortCountries.slice(0, 9)))
        const languagesArr = []
        countries.forEach(country => {
            country.languages.forEach(language => {
                if (languagesArr.indexOf(language) === -1)
                    languagesArr.push(language)
            })
        })
        console.log(`Num of lan: ${languagesArr.length}`)
    } catch (err) { console.log(err) }
}
fetchData();

const fetchCat = async function()  {
    try {
        const response = await fetch(catsAPI);
        const data = await response.json()
        data.forEach(cat => cats.push(cat))
        cats.forEach(cat => catNames.push(cat.name))
        //console.log(catNames)
        const catWeight = []
        data.forEach(cat => catWeight.push(cat.weight.metric))
        console.log(catWeight)
    }
    catch (err) { console.log(err) }
}
//fetchCat()
