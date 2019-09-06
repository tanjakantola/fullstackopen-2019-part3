const mongoose = require('mongoose')

if (process.argv.length !== 3 && process.argv.length !== 5) {
  console.log('give password as argument')
  process.exit(1)
}
const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0-usmgv.mongodb.net/test?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 5) {
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4]
  })
  person.save().then(() => {
    console.log('Added ' + person.name + ' number ' + person.number + ' to phonebook')
    mongoose.connection.close()
  })
} else {
  console.log('Phonebook:')
  Person.find().then(persons => {
    persons.map(person => console.log(person.name, person.number))
    mongoose.connection.close()
  })
}