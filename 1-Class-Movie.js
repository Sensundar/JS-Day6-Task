class Movie {
    constructor(title,studio,rating='PG'){
        this.title=title;
        this.studio=studio;
        this.rating=rating; }

        static getPG(movies){
            return movies.filter(movie => movie.rating === 'PG');
        }    
}
// Creating an instance of Movie with provided values
let movie1 = new Movie('Casino Royale', 'Eon Productions','PG13');

// Creating an array of Movie instances
let movies = [
new Movie('Leo', 'SevenGreen'),
new Movie('Master', 'LYCA'),
new Movie('Indian2', 'RK Studio', 'PG13'),
new Movie('Vickram', 'RED Giant', 'R'),
new Movie('Jailer', 'SUN PICTURES', 'PG')

]
//to get array of 'PG' rated movies
console.log(movie1)

console.log(Movie.getPG(movies))


