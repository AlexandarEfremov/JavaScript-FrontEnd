function solve(myArr) {
    let movies = [];

    for (let i = 0; i < myArr.length; i++) {
        let current = myArr[i];
        let movie = {};

        if (current.includes('addMovie')) {
            let movieName = current.split('addMovie ')[1];
            movie['name'] = movieName;
            movies.push(movie);
        } else if (current.includes('directedBy')) {
            let [name, director] = current.split(' directedBy ');
            movies.forEach((movie) => {
                if (movie['name'] === name) {
                    movie['director'] = director;
                }
            });
        } else if (current.includes('onDate')) {
            let [name, date] = current.split(' onDate ');
            movies.forEach((movie) => {
                if (movie['name'] === name) {
                    movie['date'] = date;
                }
            });
        }
    }

    movies.forEach((movie) => {
        if (movie['name'] && movie['director'] && movie['date']) {
            console.log(JSON.stringify(movie));
        }
    });
}

solve(
    [

        'addMovie Fast and Furious',

        'addMovie Godfather',

        'Inception directedBy Christopher Nolan',

        'Godfather directedBy Francis Ford Coppola',

        'Godfather onDate 29.07.2018',

        'Fast and Furious onDate 30.07.2018',

        'Batman onDate 01.08.2018',

        'Fast and Furious directedBy Rob Cohen'

    ]
)