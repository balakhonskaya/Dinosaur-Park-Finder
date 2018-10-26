const Person = require('./models/person')
const Park = require('./models/park')
const Chalk = require('chalk')
const PersonService = require('./services/person-service')

console.log('Hello World');

async function main() {
  const mert = new Person('Mert', 33)
  const armagan = new Person('Armagan', 34)

  const bautzen = new Park('Dinosaur Park Bautzen', 'Saurierpark 1, 02625 Bautzen')
  const dino = new Park('Park Dino Münchehagen', 'Alte Zollstraße 5, 31547 Rehburg-Loccum')
  armagan.attend(bautzen)
  mert.attend(bautzen)
  mert.attend(dino)
  bautzen.report()
  dino.report()

  await PersonService.add(mert)
  await PersonService.add(armagan)
  const people = await PersonService.findAll()

  console.log(people[0].name)
}

main()