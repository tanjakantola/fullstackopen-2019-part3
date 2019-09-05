const mongoose = require('mongoose')

const url = process.env.MONGODB_URI 
mongoose.connect(url, { useNewUrlParser: true })
  .then(() => console.log('connected to MongoDB'))
  .catch(error => console.log('error connecting to MongoDB:', error.message))

  const personSchema = new mongoose.Schema({
    name: {
      type: String,
      minlength: 3,
      required: true,
      unique: true
    },
    number: {
      type: String,
      minlength: 8,
      required: true
    }
  })

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)  