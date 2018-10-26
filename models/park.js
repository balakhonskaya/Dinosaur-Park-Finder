const Chalk = require('chalk')
const Person = require('./person')
module.exports = class Park {
    constructor(name, location) {
        this.name = name
        this.location = location
        this.attendees = []
    }
  
    report() {
        console.log(Chalk.bold(this.name), 'park is located at', Chalk.blue(this.location), 'and number of attendees are', this.attendees.length)
    }

    static create({name, location, attendees}) {
        const park = new Park(name, location, attendees)
        park.attendees = attendees.map(Person.create)
        return park
    }

  }