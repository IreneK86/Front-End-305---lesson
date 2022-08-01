class Car {
    constructor (name, buildYear, color) {
      this.year = year;
}


getAge(now) {
    return now - this.year;

}
}

let bmw = new Car (2019);
console.log(bmw.getAge(2022));

class User {
    constructor (firstName, lastName) {
       this.firstName = firstName;
       this.lastName = lastName; 
    }

    getUserName(fullName) {
        return this.firstName + " " + this.lastName
    }
}

let User = new User ('Ira', 'Karamysheva');
console.log(User.fullName);


class Media {
    constructor (name, year, imdb) {
        this.name = name;
        this.year = year;
        this.imdb = imdb;

    }
}

class TVshow extends Media {
    constructor (name, year, imdb, season, episodes) {
        super(name,year,imdb);
        this.seasons = seasons;
        this.episodes = episodes;
    
    }

}

class Movie extends Media {
    constructor (name, year, imdb,duration) {
    super(name, year, imdb);
    this.duration = duration;
}