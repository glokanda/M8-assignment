//STEP 1
favoriteMovies = [
  "The Mirror",
  "Original Sin",
  "Why did I Get Married",
  "Lost",
  "The Nun",
];
console.log(favoriteMovies[1]);
//STEP 2

let movies = new Array(5);
movies[0] = "The Mirror";
movies[1] = "Original Sin";
movies[2] = "Why did I Get Married";
movies[3] = "Lost";
movies[4] = "The Nun";

console.log(movies[0]);

//STEP 3
movies.splice(2, 0, "Baby Boy");
console.log(movies.length);
//STEP 4
movies = [
  "The Mirror",
  "Original Sin",
  "Why did I Get Married",
  "Lost",
  "The Nun",
];

delete movies[0];
console.log(movies);

//STEP 5
movies = [
  "The Mirror",
  "Original Sin",
  "Why did I Get Married",
  "Lost",
  "The Nun",
  "The Godfather",
  "La Dolce Vita",
];

for (let movie in movies) {
  console.log(movies[movie]);
}

//STEP 6
movies = [
  "The Mirror",
  "Original Sin",
  "Why did I Get Married",
  "Lost",
  "The Nun",
  "The Godfather",
  "La Dolce Vita",
];

for (let movie of movies) {
  console.log(movie);
}

//STEP 7
movies = [
  "The Mirror",
  "Original Sin",
  "Why did I Get Married",
  "Lost",
  "The Nun",
  "The Godfather",
  "La Dolce Vita",
];

for (let movie of movies.sort()) {
  console.log(movie);
}

//STEP 8
movies = [
  "The Mirror",
  "Original Sin",
  "Why did I Get Married",
  "Lost",
  "The Nun",
  "The Godfather",
  "La Dolce Vita",
];
let leastFavMovies = ["Super Man", "Hero", "Titanic"];

console.log("Movies I like:\n");
for (let movie of movies) {
  console.log(movie);
}

console.log("\nMovies I regret watching:\n");
for (let movie of leastFavMovies) {
  console.log(movie);
}

//STEP 9
movies = [
  "The Mirror",
  "Original Sin",
  "Why did I Get Married",
  "Lost",
  "The Nun",
  "The Godfather",
  "La Dolce Vita",
];

leastFavMovies = ["Super Man", "Hero", "Titanic"];
movies = movies.concat(leastFavMovies);
console.log(movies.sort().reverse());

//STEP 10
movies = [
  "The Mirror",
  "Original Sin",
  "Why did I Get Married",
  "Lost",
  "The Nun",
  "The Godfather",
  "La Dolce Vita",
];

leastFavMovies = ["Super Man", "Hero", "Titanic"];
movies = movies.concat(leastFavMovies);
console.log(movies.pop());

//STEP 11
movies = [
  "The Mirror",
  "Original Sin",
  "Why did I Get Married",
  "Lost",
  "The Nun",
  "The Godfather",
  "La Dolce Vita",
];

leastFavMovies = ["Super Man", "Hero", "Titanic"];
movies = movies.concat(leastFavMovies);
console.log(movies.shift());

//STEP 12
function addMovies(moviesArr, indices, moviesAdded) {
  indices.forEach((index, i) => {
    moviesArr[index] = moviesAdded[i];
  });
  return moviesArr;
}
leastFavMovies = ["Super Man", "Hero", "Titanic"];
let indices = [0, 1, 2];
let newMovies = ["The Godfather", "Forrest Gump", "Goodfellas"];
let updatedMovies = addMovies(leastFavMovies, indices, newMovies);
console.log(updatedMovies);

//STEP 13
let moviesRanking = [
  ["Inception", 1],
  ["The Shawshank Redemption", 2],
  ["The Dark Knight", 3],
  ["Pulp Fiction", 4],
  ["Interstellar", 5],
];
let movieNames = moviesRanking.map((movie) => movie[0]);
console.log(movieNames);

//STEP 14
let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
let showEmployee = function (employeesArray) {
  console.log("Employees:\n");
  for (let employee of employeesArray) {
    console.log(employee);
  }
};
showEmployee(employees);

//STEP 15
function filterValues(arr) {
  return arr.filter((value) => ![false, null, 0, ""].includes(value));
}
console.log(filterValues([58, "", "abcd", true, null, false, 0]));

//STEP 16
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//STEP 17
function getLargestNumber(arr) {
  return Math.max(arr.filter((num) => typeof num === "number"));
}
