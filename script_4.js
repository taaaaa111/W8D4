const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

//   obtenir la liste des entrepreuneurs nés dans les années 70
  let n = prompt ("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ? tape oui ")

  let results = entrepreneurs.filter(function (e) {
    return e.year > 1970 && e.year < 1979;
  });
  console.log(results); 


//   const entrepreneursfirst = entrepreneurs.map((entrepreneurs) =>{
//       return entrepreneurs.first 
// })
// const entrepreneurslast = entrepreneurs.map((entrepreneurs) =>{
//     return entrepreneurs.last 
// })
// console.log(entrepreneursfirst+ entrepreneurslast );
  

// voici le nom et prénom des entrepreneur dans un array
var array = [ ]

let  = prompt ("voici le nom et prénom des entrepreneur, tape oui")
entrepreneurs.forEach((item) => {
array.push ( item.first + ' ' + item.last)
})
console.log (array)


// age 

entrepreneurs.forEach((item) => {
    array.push ( item.first + ' ' + item.last)
})
    entrepreneurs.forEach((item) => {
console.log ( 2022 - item.year)
})
