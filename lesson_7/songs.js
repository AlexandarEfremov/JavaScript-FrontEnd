function solve(input) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = name;
        }
    }

    let songs = [];
    let numberOfSongs = input.shift();
    let typeSong = input.pop();
    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = input[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    }

    if (typeSong === 'all') {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((i) => i.type === typeSong);
        filtered.forEach((i) => console.log(i.name));
    }
}

solve(
    [
        4,

        'favourite_DownTown_3:14',

        'listenLater_Andalouse_3:24',

        'favourite_In To The Night_3:58',

        'favourite_Live It Up_3:48',

        'listenLater'
    ]
)