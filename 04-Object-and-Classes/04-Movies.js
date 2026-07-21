function moviesFunc(input) {
    let movies = []

    for (const command of input) {
        if (command.startsWith(`addMovie `)) {
            const name = command.replace(`addMovie `, ``)
            movies.push({name})
            continue;            
        }

        if (command.includes(` directedBy `)) {
            const [name, director] = command.split(` directedBy `)
            const movie = movies.find(m=>m.name === name)

            if (movie) {
                movie.director = director                
            }
            continue;
        }

        if (command.includes(` onDate `)) {
            const [name, date] = command.split(` onDate `)
            const movie = movies.find(m=>m.name === name)

            if (movie) {
                movie.date = date                
            }
            continue;
        }
    }

    for (const movie of movies) {
        if (movie.name && movie.director && movie.date) {
           console.log(JSON.stringify(movie))
        }
    }
}
moviesFunc([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);